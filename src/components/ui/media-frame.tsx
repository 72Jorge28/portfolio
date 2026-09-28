import type { ReactNode } from "react";
import styles from "./media-frame.module.css";

export function MediaFrame({ children }: { children: ReactNode }) {
  return <div className={styles.frame}>{children}</div>;
}
