/** Keep a physical offset in the central copy without changing its visual phase. */
export function normalizeLoopOffset(offset: number, start: number, length: number) {
  if (length <= 0) return offset;
  return start + ((offset - start) % length + length) % length;
}

export function wrapProjectIndex(index: number, count: number) {
  return count > 0 ? ((index % count) + count) % count : 0;
}
