"use client";

import { useEffect, useState, useSyncExternalStore, type RefObject } from "react";

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

export function useCarouselPlayback(
  viewport: RefObject<HTMLUListElement | null>,
  advance: (seconds: number) => void,
  disabled: boolean,
) {
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
  const visible = useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === "visible",
    () => false,
  );
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const playing = !disabled && !paused && !hovered && !reducedMotion && visible && inView;

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.5),
      { threshold: [0, 0.5] },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [viewport]);

  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    let previous: number | undefined;
    function tick(time: number) {
      // Clamp a stalled frame; returning to the page never causes a large jump.
      advance(previous === undefined ? 0 : Math.min((time - previous) / 1000, 0.05));
      previous = time;
      frame = window.requestAnimationFrame(tick);
    }
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [advance, playing]);

  return { paused, setPaused, setHovered, reducedMotion, playing };
}
