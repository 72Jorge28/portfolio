/** Keep a physical offset in the central copy without changing its visual phase. */
export function normalizeLoopOffset(offset: number, start: number, length: number, tolerance = 0) {
  if (length <= 0) return offset;
  // Native scroll offsets can round just beyond a fractional seam. Keep that
  // settled value instead of alternating equivalent copies on every scrollend.
  if (tolerance > 0 && offset >= start - tolerance && offset < start + length + tolerance) return offset;
  return start + ((offset - start) % length + length) % length;
}

export function wrapProjectIndex(index: number, count: number) {
  return count > 0 ? ((index % count) + count) % count : 0;
}
