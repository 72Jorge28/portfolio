import styles from "./section-curve.module.css";

export function SectionCurve() {
  return (
    <div className={styles.curve} aria-hidden="true">
      <div className={styles.fill} />
    </div>
  );
}
