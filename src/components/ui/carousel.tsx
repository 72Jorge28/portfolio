"use client";

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useCarouselPlayback } from "./use-carousel-playback";
import styles from "./carousel.module.css";

interface CarouselItem {
  id: string;
  content: ReactNode;
  navigationLabel: string;
  positionLabel: string;
}

interface CarouselLabels {
  label: string;
  description: string;
  previous: string;
  next: string;
  play: string;
  pause: string;
  reducedMotion: string;
  instructions: string;
}

export function Carousel({ items, labels }: {
  items: readonly CarouselItem[];
  labels: CarouselLabels;
}) {
  const viewport = useRef<HTMLUListElement>(null);
  const rotationControl = useRef<HTMLButtonElement>(null);
  const activeRef = useRef(0);
  const drag = useRef<{ x: number; scrollLeft: number; pointerId: number } | null>(null);
  const [active, setActive] = useState(0);
  const id = useId();

  const goTo = useCallback((index: number, instant = false) => {
    const element = viewport.current;
    const slide = element?.children[index];
    if (!element || !(slide instanceof HTMLElement)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollTo({
      left: slide.offsetLeft - (element.clientWidth - slide.offsetWidth) / 2,
      behavior: instant || reduced ? "instant" : "smooth",
    });
  }, []);

  const advance = useCallback(() => {
    // A single calm return to the start; no cloned slides or continuous loop.
    goTo((active + 1) % items.length, active === items.length - 1);
  }, [active, goTo, items.length]);
  const playback = useCarouselPlayback(viewport, advance, items.length < 2);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(() => goTo(activeRef.current, true));
    observer.observe(element);
    return () => observer.disconnect();
  }, [goTo]);

  function updatePosition() {
    const element = viewport.current;
    if (!element) return;
    const center = element.scrollLeft + element.clientWidth / 2;
    let nearest = 0;
    let distance = Infinity;
    Array.from(element.children).forEach((slide, index) => {
      if (!(slide instanceof HTMLElement)) return;
      const candidate = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (candidate < distance) { nearest = index; distance = candidate; }
    });
    activeRef.current = nearest;
    setActive(nearest);
  }

  function manualGoTo(index: number) {
    playback.setPaused(true);
    goTo(Math.max(0, Math.min(items.length - 1, index)));
  }

  function finishDrag() {
    if (!drag.current) return;
    const pointerId = drag.current.pointerId;
    drag.current = null;
    const element = viewport.current;
    if (element?.hasPointerCapture(pointerId)) element.releasePointerCapture(pointerId);
    if (element) element.removeAttribute("data-dragging");
    goTo(activeRef.current);
  }

  if (!items.length) return null;

  return (
    <div
      className={styles.carousel}
      role="group"
      aria-roledescription={labels.description}
      aria-label={labels.label}
      onMouseEnter={() => playback.setHovered(true)}
      onMouseLeave={() => playback.setHovered(false)}
      onFocusCapture={(event) => {
        if (!(event.target instanceof HTMLButtonElement) || event.target !== rotationControl.current) playback.setPaused(true);
      }}
    >
      <p id={`${id}-help`} className="visually-hidden">{labels.instructions}</p>
      <ul
        ref={viewport}
        id={id}
        className={styles.viewport}
        tabIndex={0}
        aria-label={labels.label}
        aria-describedby={`${id}-help`}
        onScroll={updatePosition}
        onWheel={() => playback.setPaused(true)}
        onKeyDown={(event) => {
          // Leave native keyboard behavior intact inside any future slide links.
          if (event.target !== event.currentTarget) return;
          const targets: Record<string, number> = {
            ArrowLeft: active - 1, ArrowRight: active + 1,
            Home: 0, End: items.length - 1,
          };
          if (event.key in targets) {
            event.preventDefault();
            manualGoTo(targets[event.key]);
          }
        }}
        onPointerDown={(event) => {
          playback.setPaused(true);
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          if (event.target instanceof Element && event.target.closest("a, button")) return;
          drag.current = { x: event.clientX, scrollLeft: event.currentTarget.scrollLeft, pointerId: event.pointerId };
        }}
        onPointerMove={(event) => {
          const start = drag.current;
          if (!start || start.pointerId !== event.pointerId) return;
          const offset = event.clientX - start.x;
          if (Math.abs(offset) < 5 && !event.currentTarget.hasPointerCapture(event.pointerId)) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          event.currentTarget.setAttribute("data-dragging", "true");
          event.currentTarget.scrollLeft = start.scrollLeft - offset;
        }}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onLostPointerCapture={finishDrag}
        onPointerLeave={() => {
          if (drag.current && !viewport.current?.hasPointerCapture(drag.current.pointerId)) drag.current = null;
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {items.map((item, index) => (
          <li key={item.id} className={styles.slide} data-active={index === active}>
            {item.content}
          </li>
        ))}
      </ul>
      {items.length > 1 && (
        <div className={styles.controls}>
          <button
            ref={rotationControl}
            type="button"
            className={styles.rotation}
            disabled={playback.reducedMotion}
            aria-label={playback.reducedMotion ? labels.reducedMotion : playback.paused ? labels.play : labels.pause}
            title={playback.reducedMotion ? labels.reducedMotion : playback.paused ? labels.play : labels.pause}
            onClick={() => playback.setPaused(!playback.paused)}
          >
            <span aria-hidden="true">{playback.paused || playback.reducedMotion ? "▷" : "Ⅱ"}</span>
          </button>
          <div className={styles.positions}>
            {items.map((item, index) => (
              <button key={item.id} type="button" aria-label={item.navigationLabel}
                aria-current={index === active ? "true" : undefined}
                onClick={() => manualGoTo(index)}>
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
          <p className={styles.counter} aria-live={playback.paused ? "polite" : "off"} aria-atomic="true">
            <span className="visually-hidden">{items[active]?.positionLabel}</span>
            <span aria-hidden="true">{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          </p>
          <div className={styles.arrows}>
            <button type="button" aria-label={labels.previous} aria-controls={id}
              disabled={active === 0} onClick={() => manualGoTo(active - 1)}><span aria-hidden="true">←</span></button>
            <button type="button" aria-label={labels.next} aria-controls={id}
              disabled={active === items.length - 1} onClick={() => manualGoTo(active + 1)}><span aria-hidden="true">→</span></button>
          </div>
        </div>
      )}
    </div>
  );
}
