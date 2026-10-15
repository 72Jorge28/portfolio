import assert from "node:assert/strict";
import test from "node:test";
import { normalizeLoopOffset, wrapProjectIndex } from "../src/components/ui/carousel-geometry.ts";

test("loop normalization preserves fractional visual phase across either seam", () => {
  const start = 1000.25;
  const length = 973.5;
  for (const phase of [0, 0.125, 125.75, length - 0.001]) {
    for (const copy of [-2, -1, 0, 1, 2]) {
      const result = normalizeLoopOffset(start + phase + copy * length, start, length);
      assert.ok(Math.abs(result - (start + phase)) < 0.00001);
      assert.ok(result >= start && result < start + length);
    }
  }
  assert.equal(normalizeLoopOffset(10, 0, 0), 10);
});

test("manual next and previous retain a logical project index across copies", () => {
  assert.equal(wrapProjectIndex(-1, 3), 2);
  assert.equal(wrapProjectIndex(3, 3), 0);
  assert.equal(wrapProjectIndex(7, 3), 1);
  assert.equal(wrapProjectIndex(1, 0), 0);
});

test("native quantized seam offsets settle without repeated equivalent-copy writes", () => {
  for (const [start, length] of [[1747.546875, 1747.546875], [634.7, 634.7], [1000.25, 973.5]]) {
    for (const offset of [Math.floor(start), Math.round(start), Math.round(start + length)]) {
      const normalized = normalizeLoopOffset(offset, start, length, 1);
      assert.equal(normalized, offset, "a settled native seam needs no new scroll write");
      const native = Math.round(normalized);
      assert.equal(normalizeLoopOffset(native, start, length, 1), native);
    }
  }
});

test("native reconciliation still wraps distant copies and retains fractional phase", () => {
  const start = 1000.25;
  const length = 634.7;
  for (const offset of [start - 20.75, start + length + 20.75, start - 3 * length + 77.125]) {
    const normalized = normalizeLoopOffset(offset, start, length, 1);
    assert.ok(normalized >= start && normalized < start + length);
    assert.ok(Math.abs((normalized - offset) / length - Math.round((normalized - offset) / length)) < 1e-10);
    const native = Math.round(normalized);
    assert.equal(normalizeLoopOffset(native, start, length, 1), native);
  }
  assert.equal(normalizeLoopOffset(start + 0.125, start, length, 1), start + 0.125);
  assert.equal(normalizeLoopOffset(10, 0, 0, 1), 10);
});
