import type { ReactNode } from "react";
import styles from "./media-frame.module.css";

export type MediaShape = "hero" | "project";

export function MediaFrame({ children, shape = "project" }: {
  children: ReactNode;
  shape?: MediaShape;
}) {
  return (
    <div className={styles.frame} data-shape={shape}>
      <div className={styles.clip}>{children}</div>
    </div>
  );
}
