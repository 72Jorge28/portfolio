"use client";

import { useId, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import type { ProjectMedia } from "@/lib/projects/types";
import styles from "./project-media-viewer.module.css";

export interface ViewerOrigin {
  trigger: HTMLButtonElement;
  x: number;
  y: number;
  pathname: string;
}

export interface ViewerLabels {
  title: string;
  viewer: string;
  close: string;
  sampleLabel: string;
  sampleExplanation: string;
  unavailable: string;
}

// Preserve the exact values and priorities, including the absence of inline rules.
function preserveStyles(element: HTMLElement, properties: readonly string[]) {
  const previous = properties.map((property) =>
    [property, element.style.getPropertyValue(property), element.style.getPropertyPriority(property)]);
  return () => {
    for (const [property, value, priority] of previous) {
      if (value) element.style.setProperty(property, value, priority);
      else element.style.removeProperty(property);
    }
  };
}

function releaseVideo(video: HTMLVideoElement | null) {
  if (!video) return;
  video.pause();
  video.removeAttribute("src");
  video.load();
}

export function ProjectMediaViewer({ media, origin, labels, onClose, onFailure }: {
  media: ProjectMedia;
  origin: ViewerOrigin;
  labels: ViewerLabels;
  onClose: () => void;
  onFailure: (media: ProjectMedia) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const [captionHeight, setCaptionHeight] = useState(0);
  const restoreOrigin = useRef(false);
  const outsidePointer = useRef<number | null>(null);
  const [failed, setFailed] = useState(false);
  const descriptionId = useId();

  useLayoutEffect(() => {
    const caption = captionRef.current;
    if (!caption) return;
    const observer = new ResizeObserver(() => setCaptionHeight(caption.getBoundingClientRect().height));
    observer.observe(caption);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const root = document.documentElement;
    const body = document.body;
    const restoreRoot = preserveStyles(root, ["overflow-x", "overflow-y"]);
    const restoreBody = preserveStyles(body, ["position", "top", "left", "width", "overflow-x", "overflow-y", "padding-right"]);
    const previousWidth = root.clientWidth;
    const padding = parseFloat(getComputedStyle(body).paddingRight);
    root.style.setProperty("overflow", "hidden");
    // Existing stable scrollbar gutters may already reserve the space.
    const scrollbar = root.clientWidth - previousWidth;
    body.style.setProperty("position", "fixed");
    body.style.setProperty("top", `${-origin.y}px`);
    body.style.setProperty("left", `${-origin.x}px`);
    body.style.setProperty("width", "100%");
    body.style.setProperty("overflow", "hidden");
    body.style.setProperty("padding-right", `${padding + scrollbar}px`);
    // Strict Mode can set up the same mounted player again after its cleanup.
    const video = videoRef.current;
    if (video) video.src = media.src;
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      releaseVideo(video);
      if (dialog.open) dialog.close();
      restoreBody();
      restoreRoot();
      // Route unmount must release the lock, not focus/scroll the new page.
      if (restoreOrigin.current && origin.trigger.isConnected && location.pathname === origin.pathname) {
        window.scrollTo({ left: origin.x, top: origin.y, behavior: "instant" });
        origin.trigger.focus({ preventScroll: true });
      }
    };
  }, [media.src, origin]);

  function close() {
    restoreOrigin.current = true;
    onClose();
  }

  function fail() {
    if (document.activeElement === videoRef.current) {
      closeRef.current?.focus({ preventScroll: true });
    }
    releaseVideo(videoRef.current);
    setFailed(true);
    onFailure(media);
  }

  function isOutside(target: EventTarget | null, x: number, y: number) {
    const dialog = dialogRef.current;
    if (!dialog || target !== dialog) return false;
    // Transparent space around the content is surround, not an invisible panel.
    return ![stageRef.current, captionRef.current, closeRef.current].some((element) => {
      if (!element) return false;
      const bounds = element.getBoundingClientRect();
      return x >= bounds.left && x <= bounds.right && y >= bounds.top && y <= bounds.bottom;
    });
  }

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-label={labels.viewer}
      aria-describedby={media.isSample ? descriptionId : undefined}
      onCancel={(event) => { event.preventDefault(); close(); }}
      onClose={(event) => {
        // Strict Mode cleanup can queue a close event before setup reopens it.
        if (!event.currentTarget.open) close();
      }}
      onPointerDown={(event) => {
        outsidePointer.current = event.isPrimary && event.button === 0 &&
          isOutside(event.target, event.clientX, event.clientY) ? event.pointerId : null;
      }}
      onPointerUp={(event) => {
        const outside = outsidePointer.current === event.pointerId &&
          isOutside(event.target, event.clientX, event.clientY);
        outsidePointer.current = null;
        if (outside) close();
      }}
      onPointerCancel={() => { outsidePointer.current = null; }}>
      <div ref={stageRef} className={styles.stage} style={{
        "--media-ratio": media.width / media.height,
        "--caption-height": `${captionHeight}px`,
      } as CSSProperties}>
        <button ref={closeRef} type="button" className={styles.close} onClick={close}
          aria-label={labels.close}>
          <span aria-hidden="true">×</span>
        </button>
        {failed ? <p role="status" className={styles.error}>{labels.unavailable}</p> :
          media.kind === "image" ? (
            // Native media keeps the original bytes and full intrinsic aspect ratio.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={media.src} alt={media.alt} width={media.width} height={media.height}
              className={styles.media} onError={fail} />
          ) : (
            <video ref={videoRef} src={media.src} width={media.width} height={media.height}
              className={styles.media} controls playsInline preload="metadata"
              aria-label={media.alt} onError={fail} />
          )}
      </div>
      {media.isSample && <p ref={captionRef} id={descriptionId} className={styles.caption}>
        <strong>{labels.sampleLabel}</strong>{" "}{labels.sampleExplanation}
      </p>}
    </dialog>
  );
}
