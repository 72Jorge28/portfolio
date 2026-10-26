"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { MediaFrame } from "@/components/ui/media-frame";
import type { ProjectMedia } from "@/lib/projects/types";
import { projectGalleryStrip, transitionGalleryIndex, type GalleryStripGeometry } from "@/lib/projects/gallery-state";
import styles from "./project-list.module.css";
import { ProjectMediaViewer, type ViewerLabels, type ViewerOrigin } from "./project-media-viewer";

export interface ProjectGalleryLabels {
  gallery: string;
  previous: string;
  next: string;
  positions: readonly string[];
  sampleLabel: string;
  sampleExplanation: string;
  empty: string;
  unavailable: string;
  previewUnavailable: string;
  videoPreview: string;
  videoPreviewCompact: string;
  openImage: string;
  openVideo: string;
  viewer: ViewerLabels;
}

export function ProjectGallery({ media = [], labels, heading, children, className }: {
  media?: readonly ProjectMedia[];
  labels: ProjectGalleryLabels;
  heading: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const articleRef = useRef<HTMLElement>(null);
  const sizingRef = useRef<HTMLDivElement>(null);
  const [geometry, setGeometry] = useState<GalleryStripGeometry>({
    stageWidth: 0, cellWidth: 0, gap: 0, initialInset: 0, shiftedInset: 0,
  });
  const [failedSources, setFailedSources] = useState<Record<string, string>>({});
  const [failedPosters, setFailedPosters] = useState<Record<string, string>>({});
  const [viewer, setViewer] = useState<{ media: ProjectMedia; origin: ViewerOrigin } | null>(null);
  const strip = projectGalleryStrip(media, index, geometry);
  const selectedIndex = strip.selectedIndex;
  const selected = selectedIndex === null ? undefined : media[selectedIndex];

  useLayoutEffect(() => {
    const article = articleRef.current;
    const sizing = sizingRef.current;
    if (!article || !sizing) return;
    function measure() {
      const style = getComputedStyle(sizing!);
      const next: GalleryStripGeometry = {
        stageWidth: article!.getBoundingClientRect().width,
        cellWidth: sizing!.getBoundingClientRect().width,
        gap: parseFloat(style.columnGap),
        initialInset: parseFloat(style.left),
        shiftedInset: parseFloat(style.marginLeft),
      };
      setGeometry((current) => Object.keys(next).every((key) =>
        current[key as keyof GalleryStripGeometry] === next[key as keyof GalleryStripGeometry]) ? current : next);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(article);
    observer.observe(sizing);
    measure();
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={articleRef} className={className} data-composition={strip.composition}>
      <div className={styles.heading}>
        <span aria-hidden="true" className={styles.titleSpace}>{labels.viewer.title}</span>
        <span aria-hidden="true" className={styles.compactTitleSpace}>{labels.viewer.title}</span>
        {heading}
      </div>
      <div data-project-copy className={styles.copy}>
        {children}
      </div>
      <section aria-label={labels.gallery} className={styles.gallery}>
        <p role="status" aria-live="polite" aria-atomic="true" className={styles.position}>
          {labels.positions.map((position, positionIndex) => (
            <span key={positionIndex} aria-hidden="true" className={styles.positionSpace}>{position}</span>
          ))}
          <span>{selectedIndex === null ? "" : labels.positions[selectedIndex]}</span>
        </p>
        {selected ? (
          <>
            {selected.isSample && (
              <div className={styles.notice}>
                <p className="font-semibold">{labels.sampleLabel}</p>
                <p>{labels.sampleExplanation}</p>
              </div>
            )}
            <div className={styles.strip} data-media-strip data-strip-offset={strip.offset}
              style={{ height: geometry.cellWidth ? geometry.cellWidth * 760 / 1200 + 16 : undefined }}>
              <div ref={sizingRef} className={styles.stripSizing} aria-hidden="true" />
              {media.map((item) => {
                const cell = strip.cells.find((candidate) => candidate.id === item.id);
                const visible = !!cell && cell.visibleWidth >= 44;
                const failed = failedSources[item.id] === item.src;
                return <div key={item.id} data-media-preview data-media-id={item.id}
                  hidden={!cell} inert={!visible} className={styles.preview}
                  style={{ left: cell?.x, width: geometry.cellWidth, height: geometry.cellWidth * 760 / 1200 }}>
                  <MediaFrame shape="project">
                    <div className={styles.frameContent}>
                      {failed ? <span>{labels.unavailable}</span> : item.kind === "image" ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.src} alt={item.alt} width={item.width} height={item.height}
                          className={styles.image}
                          ref={(image) => {
                            if (image?.complete && image.naturalWidth === 0) {
                              setFailedSources((sources) => ({ ...sources, [item.id]: item.src }));
                            }
                          }}
                          onError={() => setFailedSources((sources) => ({ ...sources, [item.id]: item.src }))} />
                      ) : item.poster && failedPosters[item.id] !== item.poster.src ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={item.poster.src} src={item.poster.src} alt={item.alt}
                          width={item.poster.width} height={item.poster.height} className={styles.image}
                          ref={(image) => {
                            if (image?.complete && image.naturalWidth === 0) {
                              setFailedPosters((sources) => ({ ...sources, [item.id]: item.poster!.src }));
                            }
                          }}
                          onError={() => setFailedPosters((sources) => ({ ...sources, [item.id]: item.poster!.src }))} />
                      ) : <span className={styles.previewUnavailable}>{labels.previewUnavailable}</span>}
                    </div>
                  </MediaFrame>
                  <button type="button" className={styles.openMedia} tabIndex={visible ? 0 : -1}
                    style={{ left: Math.max(0, -(cell?.x ?? 0)), width: cell?.visibleWidth ?? 0 }}
                    aria-label={item.kind === "image" ? labels.openImage : labels.openVideo}
                    onClick={(event) => {
                      if (document.querySelector("dialog:modal")) return;
                      setViewer({ media: item, origin: {
                        trigger: event.currentTarget, x: window.scrollX, y: window.scrollY,
                        pathname: location.pathname,
                      } });
                    }}>
                    {item.kind === "video" && <span aria-hidden="true" className={styles.videoPreview}
                      data-compact={(cell?.visibleWidth ?? 0) < 160}>
                      {(cell?.visibleWidth ?? 0) < 160 ? labels.videoPreviewCompact : labels.videoPreview}
                    </span>}
                  </button>
                </div>;
              })}
            </div>
          </>
        ) : <p className={styles.empty}>{labels.empty}</p>}
      </section>
      {media.length > 1 && (
        <div className={styles.controls}>
          <button type="button" aria-label={labels.previous}
            className={styles.arrow}
            onClick={() => setIndex((current) => transitionGalleryIndex(current, media.length, "previous") ?? 0)}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" aria-label={labels.next}
            className={styles.arrow}
            onClick={() => setIndex((current) => transitionGalleryIndex(current, media.length, "next") ?? 0)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
      {viewer && <ProjectMediaViewer media={viewer.media} origin={viewer.origin} labels={labels.viewer}
        onClose={() => setViewer(null)}
        onFailure={(item) => setFailedSources((sources) => ({ ...sources, [item.id]: item.src }))} />}
    </article>
  );
}
