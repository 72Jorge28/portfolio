// src/components/layout/section-curve.tsx
import styles from "./section-curve.module.css";

type Region = "background" | "surface" | "present" | "future";

export function SectionCurve({ from, to, reverse = false }: {
  from: Region;
  to: Region;
  reverse?: boolean;
}) {
  return (
    <div className={styles.curve} data-from={from} data-to={to} data-reverse={reverse} aria-hidden="true">
      <div className={styles.fill} />
    </div>
  );
}
