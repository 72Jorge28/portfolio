"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { normalizeLoopOffset, wrapProjectIndex } from "./carousel-geometry";
import { useCarouselPlayback } from "./use-carousel-playback";
import { advanceCarouselScroll, beginCarouselScroll, interruptCarouselScroll, settleCarouselScroll, shouldInterruptCarouselWheel,
  type CarouselScrollState } from "./carousel-playback";

export function useCarouselTrack(count: number) {
  const viewport = useRef<HTMLUListElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const scroll = useRef<CarouselScrollState>({ generation: 0, operation: null, position: 0, resetFrame: true });
  const geometry = useRef({ centers: [] as number[], start: 0, length: 0, looping: false });
  const removeSettlementListener = useRef<(() => void) | null>(null);

  const advance = useCallback((seconds: number) => {
    const element = viewport.current;
    const track = geometry.current;
    if (!element || !track.looping) return;
    const frame = advanceCarouselScroll(scroll.current, element.scrollLeft, seconds);
    if (frame.write === null) return;
    scroll.current = { ...frame.state, position: normalizeLoopOffset(frame.write, track.start, track.length) };
    element.scrollLeft = scroll.current.position;
  }, []);

  const normalize = useCallback(() => {
    const element = viewport.current;
    const track = geometry.current;
    if (!element || !track.looping || scroll.current.operation) return;
    const normalized = normalizeLoopOffset(element.scrollLeft, track.start, track.length, 1);
    if (Math.abs(normalized - element.scrollLeft) > 1) element.scrollLeft = normalized;
    scroll.current = { ...scroll.current, position: element.scrollLeft };
  }, []);

  const interrupt = useCallback(() => {
    const element = viewport.current;
    if (!element) return;
    removeSettlementListener.current?.();
    removeSettlementListener.current = null;
    if (scroll.current.operation) {
      // Abort the native writer before drag, remeasurement or autoplay can write.
      element.scrollTo({ left: element.scrollLeft, behavior: "instant" });
    }
    scroll.current = interruptCarouselScroll(scroll.current, element.scrollLeft);
    normalize();
  }, [normalize]);
  const playback = useCarouselPlayback(viewport, advance, count < 2, interrupt);

  function wheel(deltaX: number, deltaY: number) {
    // Stop/reconcile the native writer before the wheel's default scroll can cancel
    // it at a non-target offset, which must not settle a navigation operation.
    if (shouldInterruptCarouselWheel(scroll.current, deltaX, deltaY)) interrupt();
  }

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const looping = count > 1 && !playback.reducedMotion;
    element.dataset.loopReady = String(looping);
    function measure() {
      if (!element) return;
      interrupt();
      const origin = element.getBoundingClientRect().left + element.clientLeft;
      const centers = Array.from(element.children).map((child) => {
        const rect = child.getBoundingClientRect();
        return rect.left - origin + element.scrollLeft + rect.width / 2 - element.clientWidth / 2;
      });
      const start = centers[count] ?? 0;
      geometry.current = { centers, start, length: start - centers[0], looping };
      element.scrollLeft = centers[count + activeRef.current] ?? 0;
      scroll.current = { ...scroll.current, position: element.scrollLeft, resetFrame: true };
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    // scrollend handles touch momentum. Older browsers use a quiet-scroll fallback.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const settled = () => {
      if (scroll.current.operation) return;
      if (element.dataset.playing !== "true" && element.dataset.dragging !== "true") normalize();
    };
    const fallback = () => { clearTimeout(timer); timer = setTimeout(settled, 160); };
    const supportsScrollEnd = "onscrollend" in element;
    element.addEventListener(supportsScrollEnd ? "scrollend" : "scroll", supportsScrollEnd ? settled : fallback);
    return () => {
      removeSettlementListener.current?.();
      removeSettlementListener.current = null;
      if (scroll.current.operation) element.scrollTo({ left: element.scrollLeft, behavior: "instant" });
      scroll.current = interruptCarouselScroll(scroll.current, element.scrollLeft);
      observer.disconnect();
      clearTimeout(timer);
      element.removeEventListener(supportsScrollEnd ? "scrollend" : "scroll", supportsScrollEnd ? settled : fallback);
    };
  }, [count, interrupt, normalize, playback.reducedMotion]);

  function updatePosition() {
    const element = viewport.current;
    if (!element) return;
    // Keep fractional autoplay progress; native manual scrolling can move beyond rounding.
    if (Math.abs(scroll.current.position - element.scrollLeft) > 1) {
      scroll.current = { ...scroll.current, position: element.scrollLeft };
    }
    const track = geometry.current;
    const candidates = track.looping ? track.centers : track.centers.slice(count, count * 2);
    let nearest = 0;
    let distance = Infinity;
    candidates.forEach((center, index) => {
      const candidate = Math.abs(center - element.scrollLeft);
      if (candidate < distance) { nearest = index; distance = candidate; }
    });
    const index = wrapProjectIndex(nearest, count);
    if (index !== activeRef.current) {
      activeRef.current = index;
      setActive(index);
    }
  }

  function goTo(index: number) {
    const element = viewport.current;
    if (!element) return;
    if (!playback.reducedMotion && !("onscrollend" in element)) {
      throw new Error("Native carousel navigation requires reliable scrollend support.");
    }
    if (scroll.current.operation) interrupt();
    else normalize();
    const logical = wrapProjectIndex(index, count);
    const track = geometry.current;
    let target = track.centers[count + logical] ?? 0;
    if (track.looping) {
      for (const copy of [0, 2]) {
        const candidate = track.centers[copy * count + logical];
        if (Math.abs(candidate - element.scrollLeft) < Math.abs(target - element.scrollLeft)) target = candidate;
      }
    }
    if (playback.reducedMotion) {
      element.scrollTo({ left: target, behavior: "instant" });
      scroll.current = interruptCarouselScroll(scroll.current, element.scrollLeft);
    } else {
      scroll.current = beginCarouselScroll(scroll.current, element.scrollLeft, target);
      const operation = scroll.current.operation;
      if (operation) {
        const settled = () => {
          const next = settleCarouselScroll(scroll.current, operation.id, element.scrollLeft);
          if (next === scroll.current) return;
          scroll.current = next;
          element.removeEventListener("scrollend", settled);
          removeSettlementListener.current = null;
          normalize();
        };
        element.addEventListener("scrollend", settled);
        removeSettlementListener.current = () => element.removeEventListener("scrollend", settled);
        element.scrollTo({ left: target, behavior: "smooth" });
      }
    }
  }

  return { viewport, active, updatePosition, goTo, normalize, interrupt, wheel, playback };
}
