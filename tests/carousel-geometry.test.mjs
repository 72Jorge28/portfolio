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
