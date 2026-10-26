export type GalleryDirection = "previous" | "next";

export function normalizeGalleryIndex(index: number, count: number): number | null {
  return count > 0 ? ((index % count) + count) % count : null;
}

export function transitionGalleryIndex(index: number, count: number, direction: GalleryDirection): number | null {
  const current = normalizeGalleryIndex(index, count);
  if (current === null) return null;
  return normalizeGalleryIndex(current + (direction === "next" ? 1 : -1), count);
}

// Revision-1 rendering compatibility only; new strip consumers use the projection below.
export function getGalleryComposition(index: number, count: number): "initial" | "expanded" {
  return (normalizeGalleryIndex(index, count) ?? 0) === 0 ? "initial" : "expanded";
}

/** CSS-pixel geometry measured/derived from the stable whole-project parent.
 * Insets locate the selected cell's left edge, not a new sizing container.
 * The caller supplies responsive sizes; selection never changes cell dimensions.
 */
export interface GalleryStripGeometry {
  stageWidth: number;
  cellWidth: number;
  gap: number;
  initialInset: number;
  shiftedInset: number;
}

export interface GalleryStripCell {
  id: string;
  index: number;
  selected: boolean;
  x: number;
  width: number;
  height: number;
  visibleWidth: number;
}

export interface GalleryStripProjection {
  composition: "initial" | "shifted";
  selectedIndex: number | null;
  count: number;
  canNavigate: boolean;
  /** Translation of the selected cell from its logical index * pitch position. */
  offset: number;
  /** Ordered, unique cyclic neighbors; never more than three stateful cells. */
  cells: readonly GalleryStripCell[];
  visibleIds: readonly string[];
}

export function projectGalleryStrip(
  items: readonly { readonly id: string }[],
  index: number,
  geometry: GalleryStripGeometry,
): GalleryStripProjection {
  const count = items.length;
  const selectedIndex = normalizeGalleryIndex(index, count);
  const composition = (selectedIndex ?? 0) === 0 ? "initial" : "shifted";
  const { stageWidth, cellWidth, gap, initialInset, shiftedInset } = geometry;
  const pitch = cellWidth + gap;
  const selectedX = composition === "initial" ? initialInset : shiftedInset;
  const cells: GalleryStripCell[] = [];

  if (selectedIndex !== null) {
    // Initial never wraps a predecessor into the heading region. Two items
    // need no duplicate successor; larger sequences have one neighbor per side.
    const slots = composition === "initial"
      ? (count > 1 ? [0, 1] : [0])
      : (count > 2 ? [-1, 0, 1] : [-1, 0]);
    for (const slot of slots) {
      const itemIndex = (selectedIndex + slot + count) % count;
      const x = selectedX + slot * pitch;
      cells.push({
        id: items[itemIndex].id,
        index: itemIndex,
        selected: slot === 0,
        x,
        width: cellWidth,
        height: cellWidth * 760 / 1200,
        visibleWidth: Math.max(0, Math.min(stageWidth, x + cellWidth) - Math.max(0, x)),
      });
    }
  }

  return {
    composition,
    selectedIndex,
    count,
    canNavigate: count > 1,
    offset: selectedIndex === null ? 0 : selectedX - selectedIndex * pitch,
    cells,
    visibleIds: cells.filter((cell) => cell.visibleWidth > 0).map((cell) => cell.id),
  };
}
