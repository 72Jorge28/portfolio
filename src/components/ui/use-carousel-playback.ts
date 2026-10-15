"use client";

import { useCallback, useEffect, useState, useSyncExternalStore, type RefObject } from "react";
import { isCarouselPlaying, updateCarouselContacts } from "./carousel-playback";

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
  interruptScroll: () => void,
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
  const [activeTouchIds, setActiveTouchIds] = useState<readonly number[]>([]);
  const [mouseDragging, setMouseDragging] = useState(false);
  const startContact = useCallback((pointerId: number) => {
    setActiveTouchIds((ids) => updateCarouselContacts(ids, { type: "start", pointerId }));
  }, []);
  const endContact = useCallback((pointerId: number) => {
    setActiveTouchIds((ids) => updateCarouselContacts(ids, { type: "end", pointerId }));
  }, []);
  const playing = isCarouselPlaying({
    available: !disabled, manualPaused: paused, mouseHovered: hovered,
    activeTouchIds, mouseDragging, reducedMotion,
    documentVisible: visible, intersectionEligible: inView,
  });

  useEffect(() => {
    if (!activeTouchIds.length) return;
    const end = (event: PointerEvent) => endContact(event.pointerId);
    document.addEventListener("pointerup", end);
    document.addEventListener("pointercancel", end);
    document.addEventListener("lostpointercapture", end);
    return () => {
      document.removeEventListener("pointerup", end);
      document.removeEventListener("pointercancel", end);
      document.removeEventListener("lostpointercapture", end);
    };
  }, [activeTouchIds.length, endContact]);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const eligible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        if (!eligible) interruptScroll();
        setInView(eligible);
      },
      { threshold: [0, 0.5] },
    );
    observer.observe(element);
    const reconcile = () => {
      if (document.visibilityState === "visible") return;
      interruptScroll();
      setActiveTouchIds((ids) => updateCarouselContacts(ids, { type: "reset" }));
      setHovered(false);
      setMouseDragging(false);
    };
    document.addEventListener("visibilitychange", reconcile);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", reconcile);
    };
  }, [interruptScroll, viewport]);

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

  return { paused, setPaused, setHovered, mouseDragging, setMouseDragging,
    startContact, endContact, reducedMotion, playing };
}
