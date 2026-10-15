export interface CarouselPlaybackSnapshot {
  available: boolean;
  manualPaused: boolean;
  mouseHovered: boolean;
  activeTouchIds: readonly number[];
  mouseDragging: boolean;
  reducedMotion: boolean;
  documentVisible: boolean;
  intersectionEligible: boolean;
}

export function isCarouselPlaying(state: CarouselPlaybackSnapshot): boolean {
  return state.available && !state.manualPaused && !state.mouseHovered
    && state.activeTouchIds.length === 0 && !state.mouseDragging
    && !state.reducedMotion && state.documentVisible && state.intersectionEligible;
}

export type CarouselContactChange =
  | { type: "start"; pointerId: number }
  | { type: "end"; pointerId: number }
  | { type: "reset" };

export function updateCarouselContacts(
  activeTouchIds: readonly number[],
  change: CarouselContactChange,
): readonly number[] {
  if (change.type === "reset") return [];
  if (change.type === "end") return activeTouchIds.filter((id) => id !== change.pointerId);
  return activeTouchIds.includes(change.pointerId)
    ? activeTouchIds : [...activeTouchIds, change.pointerId];
}

export interface CarouselScrollState {
  generation: number;
  operation: { id: number; target: number } | null;
  position: number;
  resetFrame: boolean;
}

export function shouldInterruptCarouselWheel(state: CarouselScrollState, deltaX: number, deltaY: number): boolean {
  return state.operation !== null && (deltaX !== 0 || deltaY !== 0);
}

export function advanceCarouselScroll(
  state: CarouselScrollState,
  nativeOffset: number,
  seconds: number,
): { state: CarouselScrollState; write: number | null } {
  if (state.operation) return { state, write: null };
  const fresh = seconds === 0 || state.resetFrame;
  const position = (fresh ? nativeOffset : state.position) + (fresh ? 0 : Math.min(seconds, 0.05) * 32);
  return { state: { ...state, position, resetFrame: false }, write: position };
}

export function beginCarouselScroll(state: CarouselScrollState, offset: number, target: number): CarouselScrollState {
  const id = state.generation + 1;
  return { generation: id, operation: Math.abs(offset - target) <= 1 ? null : { id, target },
    position: offset, resetFrame: true };
}

export function settleCarouselScroll(state: CarouselScrollState, id: number, offset: number): CarouselScrollState {
  if (state.operation?.id !== id || Math.abs(state.operation.target - offset) > 1) return state;
  return { ...state, operation: null, position: offset, resetFrame: true };
}

// The DOM boundary must stop the native operation before applying this transition.
export function interruptCarouselScroll(state: CarouselScrollState, offset: number): CarouselScrollState {
  return { generation: state.generation + 1, operation: null, position: offset, resetFrame: true };
}
