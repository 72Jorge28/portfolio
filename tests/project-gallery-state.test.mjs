import assert from "node:assert/strict";
import test from "node:test";
import * as galleryState from "../src/lib/projects/gallery-state.ts";
import { SAMPLE_MEDIA_PAIR } from "../src/lib/projects/media.ts";
import {
  normalizeGalleryIndex,
  transitionGalleryIndex,
  getGalleryComposition,
} from "../src/lib/projects/gallery-state.ts";

test("empty galleries have no selection and single items never advance", () => {
  for (const direction of ["previous", "next"]) {
    assert.equal(transitionGalleryIndex(0, 0, direction), null);
    assert.equal(transitionGalleryIndex(0, 1, direction), 0);
  }
  assert.equal(normalizeGalleryIndex(4, 0), null);
  assert.equal(getGalleryComposition(0, 0), "initial");
  assert.equal(getGalleryComposition(7, 1), "initial");
});

test("two and many items cycle in both directions and fully reset on every zero", () => {
  for (const count of [2, 3, 7]) {
    for (const direction of ["previous", "next"]) {
      let index = 0;
      for (let step = 1; step <= count * 4; step++) {
        index = transitionGalleryIndex(index, count, direction);
        const expected = direction === "next" ? step % count : (count - step % count) % count;
        assert.equal(index, expected);
        assert.equal(getGalleryComposition(index, count), expected === 0 ? "initial" : "expanded");
      }
      assert.equal(index, 0);
    }
  }
});

test("selection normalizes indices outside a changed sequence before moving", () => {
  assert.equal(normalizeGalleryIndex(8, 3), 2);
  assert.equal(normalizeGalleryIndex(-1, 3), 2);
  assert.equal(normalizeGalleryIndex(-7, 3), 2);
  assert.equal(transitionGalleryIndex(8, 3, "next"), 0);
  assert.equal(transitionGalleryIndex(-1, 3, "previous"), 1);
  assert.equal(getGalleryComposition(9, 3), "initial");
  assert.equal(getGalleryComposition(-1, 3), "expanded");
});

test("independent project selections do not share state through repeated cycles", () => {
  const indices = [0, 0, 0];
  indices[0] = transitionGalleryIndex(indices[0], 3, "next");
  indices[1] = transitionGalleryIndex(indices[1], 2, "previous");
  assert.deepEqual(indices, [1, 1, 0]);
  for (let step = 0; step < 12; step++) {
    indices[0] = transitionGalleryIndex(indices[0], 3, "next");
    assert.deepEqual(indices.slice(1), [1, 0]);
  }
  indices[1] = transitionGalleryIndex(indices[1], 2, "next");
  assert.deepEqual(indices, [1, 0, 0]);
});

// Distinct logical media reuse only the two approved sample sources.
const sequence = (count) => Array.from({ length: count }, (_, index) => ({
  ...SAMPLE_MEDIA_PAIR[index % 2], id: `fixture-${index}`,
}));
const desktop = { stageWidth: 1000, cellWidth: 460, gap: 20, initialInset: 380, shiftedInset: 320 };
const narrow = { stageWidth: 288, cellWidth: 230, gap: 8, initialInset: 0, shiftedInset: 54 };
const project = (items, index, geometry = desktop) => galleryState.projectGalleryStrip(items, index, geometry);

test("strip initial exposure and first advance translate constant-size media, not zoom", () => {
  for (const geometry of [desktop, narrow]) {
    const items = sequence(2);
    const initial = project(items, 0, geometry);
    const shifted = project(items, 1, geometry);
    assert.equal(initial.composition, "initial");
    assert.equal(shifted.composition, "shifted");
    assert.deepEqual(initial.cells.map((cell) => cell.id), items.map((item) => item.id));
    assert.deepEqual(shifted.cells.map((cell) => cell.id), items.map((item) => item.id));
    const [first, peek] = initial.cells;
    const [previous, current] = shifted.cells;
    assert.equal(first.visibleWidth, first.width);
    assert.ok(peek.visibleWidth >= 44 && peek.visibleWidth < peek.width);
    assert.ok(previous.x < first.x && previous.visibleWidth >= 44);
    assert.ok(current.visibleWidth > peek.visibleWidth);
    assert.deepEqual(initial.visibleIds, items.map((item) => item.id));
    assert.deepEqual(shifted.visibleIds, items.map((item) => item.id));
    // Concrete clipping examples: a 140px/50px initial peek becomes 460px/230px,
    // while 300px/46px of the original first item remains on the left.
    assert.deepEqual([peek.visibleWidth, current.visibleWidth, previous.visibleWidth],
      geometry === desktop ? [140, 460, 300] : [50, 230, 46]);
    assert.ok(shifted.offset < initial.offset);
    for (const cell of [...initial.cells, ...shifted.cells]) {
      assert.equal(cell.width, geometry.cellWidth);
      assert.equal(cell.height / cell.width, 760 / 1200);
      assert.equal(cell.visibleWidth, Math.max(0, Math.min(geometry.stageWidth, cell.x + cell.width) - Math.max(0, cell.x)));
    }
  }
});

test("bounded strip neighbors follow configured IDs with truthful counts and complete resets", () => {
  for (const count of [2, 3, 7, 100]) {
    const items = sequence(count);
    for (const geometry of [desktop, narrow]) {
      const initial = project(items, 0, geometry);
      for (const direction of ["previous", "next"]) {
        let index = 0;
        for (let step = 0; step < count * 3; step++) {
          index = transitionGalleryIndex(index, count, direction);
          const strip = project(items, index, geometry);
          assert.equal(strip.selectedIndex, index);
          assert.equal(strip.count, count);
          assert.equal(strip.canNavigate, true);
          assert.equal(strip.cells.length, index === 0 || count === 2 ? 2 : 3);
          assert.equal(new Set(strip.cells.map((cell) => cell.id)).size, strip.cells.length);
          assert.deepEqual(strip.visibleIds, strip.cells.filter((cell) => cell.visibleWidth > 0).map((cell) => cell.id));
          const expected = index === 0 ? [0, 1] : count === 2 ? [0, 1] : [(index + count - 1) % count, index, (index + 1) % count];
          assert.deepEqual(strip.cells.map((cell) => cell.id), expected.map((position) => items[position].id));
          assert.deepEqual(strip.cells.filter((cell) => cell.selected).map((cell) => cell.id), [items[index].id]);
          for (const cell of strip.cells) {
            assert.equal(cell.width, initial.cells[0].width);
            assert.equal(cell.height, initial.cells[0].height);
          }
          for (let position = 1; position < strip.cells.length; position++) {
            const left = strip.cells[position - 1];
            assert.ok(strip.cells[position].x >= left.x + left.width);
          }
          if (index === 0) assert.deepEqual(strip, initial);
        }
      }
    }
  }
});

test("empty/single strips omit navigation, normalize selection and never mutate inputs", () => {
  const geometry = Object.freeze({ ...desktop });
  const empty = project([], 9, geometry);
  assert.equal(empty.selectedIndex, null);
  assert.equal(empty.count, 0);
  assert.equal(empty.canNavigate, false);
  assert.equal(empty.composition, "initial");
  assert.deepEqual(empty.cells, []);
  assert.deepEqual(empty.visibleIds, []);
  const single = Object.freeze(sequence(1).map(Object.freeze));
  assert.deepEqual(project(single, -7, geometry), project(single, 0, geometry));
  assert.equal(project(single, 0, geometry).cells.length, 1);
  assert.equal(project(single, 0, geometry).canNavigate, false);
  const items = Object.freeze(sequence(3).map(Object.freeze));
  assert.deepEqual(project(items, -1, geometry), project(items, 2, geometry));
  assert.deepEqual(project(items, 9, geometry), project(items, 0, geometry));
  const untouched = project(items, 1, geometry);
  project(sequence(7), 6, narrow);
  assert.deepEqual(project(items, 1, geometry), untouched);
  // Resize is an explicit caller input, never a selection-dependent width.
  const resized = project(items, 1, narrow);
  assert.equal(resized.selectedIndex, untouched.selectedIndex);
  assert.deepEqual(resized.cells.map((cell) => cell.id), untouched.cells.map((cell) => cell.id));
  assert.equal(resized.cells[0].width, narrow.cellWidth);
  const reordered = [items[2], items[0], items[1]];
  assert.deepEqual(project(reordered, 1).cells.map((cell) => cell.id), reordered.map((item) => item.id));
});
