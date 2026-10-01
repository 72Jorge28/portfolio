"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { normalizeLoopOffset, wrapProjectIndex } from "./carousel-geometry";
import { useCarouselPlayback } from "./use-carousel-playback";

export function useCarouselTrack(count: number) {
  const viewport = useRef<HTMLUListElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const position = useRef(0);
  const geometry = useRef({ centers: [] as number[], start: 0, length: 0, looping: false });

  const advance = useCallback((seconds: number) => {
    const element = viewport.current;
    const track = geometry.current;
    if (!element || !track.looping) return;
    if (seconds === 0) position.current = element.scrollLeft;
    position.current = normalizeLoopOffset(position.current + seconds * 32, track.start, track.length);
    element.scrollLeft = position.current;
  }, []);
  const playback = useCarouselPlayback(viewport, advance, count < 2);

  const normalize = useCallback(() => {
    const element = viewport.current;
    const track = geometry.current;
    if (!element || !track.looping) return;
    const normalized = normalizeLoopOffset(element.scrollLeft, track.start, track.length);
    if (Math.abs(normalized - element.scrollLeft) > 1) element.scrollLeft = normalized;
    position.current = element.scrollLeft;
  }, []);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const looping = count > 1 && !playback.reducedMotion;
    element.dataset.loopReady = String(looping);
    function measure() {
      if (!element) return;
      const origin = element.getBoundingClientRect().left + element.clientLeft;
      const centers = Array.from(element.children).map((child) => {
        const rect = child.getBoundingClientRect();
        return rect.left - origin + element.scrollLeft + rect.width / 2 - element.clientWidth / 2;
      });
      const start = centers[count] ?? 0;
      geometry.current = { centers, start, length: start - centers[0], looping };
      element.scrollLeft = centers[count + activeRef.current] ?? 0;
      position.current = element.scrollLeft;
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    // scrollend handles touch momentum. Older browsers use a quiet-scroll fallback.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const settled = () => {
      if (element.dataset.playing !== "true" && element.dataset.dragging !== "true") normalize();
    };
    const fallback = () => { clearTimeout(timer); timer = setTimeout(settled, 160); };
    const supportsScrollEnd = "onscrollend" in element;
    element.addEventListener(supportsScrollEnd ? "scrollend" : "scroll", supportsScrollEnd ? settled : fallback);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
      element.removeEventListener(supportsScrollEnd ? "scrollend" : "scroll", supportsScrollEnd ? settled : fallback);
    };
  }, [count, normalize, playback.reducedMotion]);

  function updatePosition() {
    const element = viewport.current;
    if (!element) return;
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
    playback.setPaused(true);
    normalize();
    const logical = wrapProjectIndex(index, count);
    const track = geometry.current;
    let target = track.centers[count + logical] ?? 0;
    if (track.looping) {
      for (const copy of [0, 2]) {
        const candidate = track.centers[copy * count + logical];
        if (Math.abs(candidate - element.scrollLeft) < Math.abs(target - element.scrollLeft)) target = candidate;
      }
    }
    element.scrollTo({ left: target, behavior: playback.reducedMotion ? "instant" : "smooth" });
  }

  return { viewport, active, updatePosition, goTo, normalize, playback };
}
