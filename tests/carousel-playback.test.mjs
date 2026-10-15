import assert from "node:assert/strict";
import test from "node:test";
import { isCarouselPlaying } from "../src/components/ui/carousel-playback.ts";
import * as contacts from "../src/components/ui/carousel-playback.ts";

const eligible = {
  available: true, manualPaused: false, mouseHovered: false,
  activeTouchIds: [], mouseDragging: false, reducedMotion: false,
  documentVisible: true, intersectionEligible: true,
};

test("contact suspends enabled autoplay until the last finger ends", () => {
  assert.equal(isCarouselPlaying({ ...eligible, activeTouchIds: [7, 9] }), false);
  assert.equal(isCarouselPlaying({ ...eligible, activeTouchIds: [9] }), false);
  assert.equal(isCarouselPlaying(eligible), true);
});

test("native navigation owns every frame write, including the initial zero delta", () => {
  const state = { generation: 1, operation: { id: 1, target: 1555.25 }, position: 2333.125, resetFrame: false };
  for (const seconds of [0, 0.016, 3]) {
    const frame = contacts.advanceCarouselScroll(state, 2169.5, seconds);
    assert.equal(frame.write, null);
    assert.deepEqual(frame.state, state);
  }
});

test("a reconciled native offset starts a fresh clock without ownership-time catch-up", () => {
  const state = { generation: 1, operation: null, position: 1555.25, resetFrame: true };
  const first = contacts.advanceCarouselScroll(state, 1555.25, 5);
  assert.equal(first.write, 1555.25);
  const second = contacts.advanceCarouselScroll(first.state, 1555, 0.016);
  assert.equal(second.write, 1555.762);
});

test("superseding navigation rejects stale completion and unrelated offsets", () => {
  const initial = { generation: 0, operation: null, position: 2333.125, resetFrame: false };
  const first = contacts.beginCarouselScroll(initial, 2333.125, 1555.25);
  const second = contacts.beginCarouselScroll(first, 2100.5, 3110.75);
  assert.notEqual(first.operation.id, second.operation.id);
  assert.equal(contacts.settleCarouselScroll(second, first.operation.id, 1555), second);
  assert.equal(contacts.settleCarouselScroll(second, second.operation.id, 1555), second);
  const settled = contacts.settleCarouselScroll(second, second.operation.id, 3111);
  assert.equal(settled.operation, null);
  assert.equal(settled.position, 3111);
  assert.equal(settled.resetFrame, true);
});

test("already settled targets need no scrollend, including superseding no-op", () => {
  const initial = { generation: 0, operation: null, position: 2333, resetFrame: false };
  const moving = contacts.beginCarouselScroll(initial, 2333, 1555.25);
  const noop = contacts.beginCarouselScroll(moving, 2169, 2169.25);
  assert.equal(noop.operation, null);
  assert.equal(noop.position, 2169);
  assert.equal(noop.resetFrame, true);
  assert.equal(contacts.settleCarouselScroll(noop, moving.operation.id, 1555), noop);
});

test("wheel takeover releases native ownership before an off-target end and resumes without catch-up", () => {
  const moving = contacts.beginCarouselScroll(
    { generation: 0, operation: null, position: 3923.375, resetFrame: false },
    3923.375, 3888.125,
  );
  // Chrome can settle at 3388 after a -500 wheel, never reaching the requested target.
  assert.equal(contacts.settleCarouselScroll(moving, moving.operation.id, 3388), moving);
  assert.equal(contacts.shouldInterruptCarouselWheel(moving, -500, 0), true);
  const stopped = contacts.interruptCarouselScroll(moving, 3888.375);
  assert.equal(contacts.settleCarouselScroll(stopped, moving.operation.id, 3388), stopped);
  const first = contacts.advanceCarouselScroll(stopped, 3388, 1.2);
  assert.equal(first.write, 3388);
  const second = contacts.advanceCarouselScroll(first.state, 3388, 0.016);
  assert.equal(second.write, 3388.512);
  assert.equal(isCarouselPlaying(eligible), true);
  assert.equal(isCarouselPlaying({ ...eligible, manualPaused: true }), false);
  assert.equal(isCarouselPlaying({ ...eligible, reducedMotion: true }), false);
});

test("only a moving wheel with native ownership needs takeover", () => {
  const initial = { generation: 0, operation: null, position: 2333.125, resetFrame: false };
  const moving = contacts.beginCarouselScroll(initial, 2333.125, 1555.25);
  assert.equal(contacts.shouldInterruptCarouselWheel(moving, 0, 0), false);
  assert.equal(contacts.shouldInterruptCarouselWheel(initial, -500, 0), false);
  assert.equal(contacts.shouldInterruptCarouselWheel(moving, 0, 80), true);
  assert.equal(contacts.shouldInterruptCarouselWheel(moving, 500, 0), true);
  const noop = contacts.beginCarouselScroll(moving, 1555, 1555.25);
  assert.equal(contacts.shouldInterruptCarouselWheel(noop, -500, 0), false);
});

test("handled interruptions reconcile actual fractional position and invalidate identities", () => {
  for (const reason of ["contact", "drag", "hidden", "offscreen", "resize", "reduced-motion", "unmount"]) {
    const initial = { generation: 0, operation: null, position: 2333, resetFrame: false };
    const moving = contacts.beginCarouselScroll(initial, 2333, 1555.25);
    const stopped = contacts.interruptCarouselScroll(moving, 2010.375);
    assert.equal(stopped.operation, null, reason);
    assert.equal(stopped.position, 2010.375, reason);
    assert.equal(stopped.resetFrame, true, reason);
    assert.equal(contacts.settleCarouselScroll(stopped, moving.operation.id, 1555), stopped, reason);
    const next = contacts.beginCarouselScroll(stopped, 2010.375, 3110.75);
    assert.ok(next.operation.id > moving.operation.id, reason);
    assert.equal(contacts.settleCarouselScroll(next, moving.operation.id, 3111), next, reason);
  }
});

test("ownership does not change eligibility or explicit pause/reduced-motion priority", () => {
  const state = contacts.beginCarouselScroll({ generation: 0, operation: null, position: 0, resetFrame: false }, 0, 800);
  const settled = contacts.settleCarouselScroll(state, state.operation.id, 800);
  assert.equal(settled.operation, null);
  assert.equal(isCarouselPlaying(eligible), true);
  for (const restriction of [{ manualPaused: true }, { reducedMotion: true }]) {
    assert.equal(isCarouselPlaying({ ...eligible, ...restriction }), false);
  }
  const frame = contacts.advanceCarouselScroll({ ...settled, resetFrame: false }, 800, 5);
  assert.equal(frame.write, 801.6);
});

test("captured mouse dragging remains suspended outside mouse hover", () => {
  assert.equal(isCarouselPlaying({ ...eligible, mouseDragging: true }), false);
  assert.equal(isCarouselPlaying(eligible), true);
});

test("hover leave resumes enabled autoplay, including while keyboard focus remains", () => {
  assert.equal(isCarouselPlaying({ ...eligible, mouseHovered: true }), false);
  assert.equal(isCarouselPlaying(eligible), true);
});

test("temporary release never overrides manual pause or resource restrictions", () => {
  for (const restriction of [
    { manualPaused: true }, { reducedMotion: true },
    { documentVisible: false }, { intersectionEligible: false },
    { available: false },
  ]) {
    assert.equal(isCarouselPlaying({ ...eligible, ...restriction }), false);
    assert.equal(isCarouselPlaying({ ...eligible, ...restriction, activeTouchIds: [7] }), false);
  }
});

test("manual Play during hover or contact waits for temporary release", () => {
  assert.equal(isCarouselPlaying({ ...eligible, manualPaused: false, mouseHovered: true }), false);
  assert.equal(isCarouselPlaying({ ...eligible, manualPaused: false, activeTouchIds: [7] }), false);
  assert.equal(isCarouselPlaying(eligible), true);
});

test("zero and single item availability cannot be enabled by interaction release", () => {
  for (const count of [0, 1, 3]) {
    assert.equal(isCarouselPlaying({ ...eligible, available: count > 1 }), count > 1);
  }
});

test("touch IDs are unique and ending or losing one preserves other contacts", () => {
  const first = contacts.updateCarouselContacts([], { type: "start", pointerId: 7 });
  const both = contacts.updateCarouselContacts(first, { type: "start", pointerId: 9 });
  assert.deepEqual(contacts.updateCarouselContacts(both, { type: "start", pointerId: 7 }), [7, 9]);
  assert.deepEqual(contacts.updateCarouselContacts(both, { type: "end", pointerId: 123 }), [7, 9]);
  const remaining = contacts.updateCarouselContacts(both, { type: "end", pointerId: 7 });
  assert.deepEqual(remaining, [9]);
  assert.equal(isCarouselPlaying({ ...eligible, activeTouchIds: remaining }), false);
  assert.deepEqual(contacts.updateCarouselContacts(remaining, { type: "end", pointerId: 7 }), [9]);
  const ended = contacts.updateCarouselContacts(remaining, { type: "end", pointerId: 9 });
  assert.equal(isCarouselPlaying({ ...eligible, activeTouchIds: ended }), true);
  assert.deepEqual(both, [7, 9]);
});

test("cancel, lost contact and hidden-document reconciliation preserve manual preference", () => {
  for (const manualPaused of [false, true]) {
    const last = contacts.updateCarouselContacts([7, 9], { type: "end", pointerId: 7 });
    const canceled = contacts.updateCarouselContacts(last, { type: "end", pointerId: 9 });
    const reset = contacts.updateCarouselContacts([7, 9], { type: "reset" });
    assert.deepEqual(canceled, []);
    assert.deepEqual(reset, []);
    assert.equal(isCarouselPlaying({ ...eligible, manualPaused, activeTouchIds: canceled }), !manualPaused);
    assert.equal(isCarouselPlaying({ ...eligible, manualPaused, activeTouchIds: reset, documentVisible: false }), false);
    assert.equal(isCarouselPlaying({ ...eligible, manualPaused, activeTouchIds: reset }), !manualPaused);
  }
});
