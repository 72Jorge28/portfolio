"use client";

import { useId, useRef, type ReactNode } from "react";
import { useCarouselTrack } from "./use-carousel-track";
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
  play: string;
  pause: string;
  reducedMotion: string;
  instructions: string;
}

export function Carousel({ items, labels }: {
  items: readonly CarouselItem[];
  labels: CarouselLabels;
}) {
  const { viewport, active, updatePosition, goTo, normalize, playback } = useCarouselTrack(items.length);
  const rotationControl = useRef<HTMLButtonElement>(null);
  const drag = useRef<{ x: number; scrollLeft: number; pointerId: number } | null>(null);
  const id = useId();

  function finishDrag() {
    if (!drag.current) return;
    const pointerId = drag.current.pointerId;
    drag.current = null;
    const element = viewport.current;
    if (element?.hasPointerCapture(pointerId)) element.releasePointerCapture(pointerId);
    if (element) element.removeAttribute("data-dragging");
    normalize();
  }

  if (!items.length) return null;

  return (
    <div
      className={styles.carousel}
      role="group"
      aria-roledescription={labels.description}
      aria-label={labels.label}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") playback.setHovered(true); }}
      onPointerLeave={() => playback.setHovered(false)}
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
        data-playing={playback.playing}
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
            goTo(targets[event.key]);
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
        {[0, 1, 2].map((copy) => items.map((item, index) => (
          <li key={`${copy}-${item.id}`} className={styles.slide}
            data-copy={copy} data-item-index={index} data-active={index === active}
            aria-hidden={copy !== 1 ? true : undefined} inert={copy !== 1 ? true : undefined}>
            {item.content}
          </li>
        )))}
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
                onClick={() => goTo(index)}>
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
          <p className={styles.counter} aria-live={playback.paused ? "polite" : "off"} aria-atomic="true">
            <span className="visually-hidden">{items[active]?.positionLabel}</span>
            <span aria-hidden="true">{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          </p>
        </div>
      )}
    </div>
  );
}
