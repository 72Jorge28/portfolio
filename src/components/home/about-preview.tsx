// src/components/home/about-preview.tsx
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./about-preview.module.css";

export async function AboutPreview() {
  const t = await getTranslations("AboutPreview");

  return (
    <section aria-labelledby="about-preview-title">
      <div className={styles.present} data-about-part="present">
        <div className={styles.composition}>
          <div className={styles.personalMedia}>{t("personalPlaceholder")}</div>
          <div className={styles.content}>
            <header className={styles.heading}>
              <span className={styles.number} aria-hidden="true">03</span>
              <h2 id="about-preview-title">{t("title")}</h2>
            </header>
            <p className={styles.introduction}>{t("introduction")}</p>
            <Link className={styles.link} href="/about">
              {t("readMore")} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.future} data-about-part="future">
        <div className={styles.composition}>
          <p className={styles.direction}>{t("direction")}</p>
          <div className={styles.directionMedia}>{t("directionPlaceholder")}</div>
        </div>
      </div>
    </section>
  );
}
