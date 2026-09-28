import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./about-preview.module.css";

export async function AboutPreview() {
  const t = await getTranslations("AboutPreview");

  return (
    <section className={styles.section} aria-labelledby="about-preview-title">
      <header className={styles.heading}>
        <span className={styles.number} aria-hidden="true">03</span>
        <h2 id="about-preview-title">{t("title")}</h2>
      </header>
      <div className={styles.content}>
        <p className={styles.introduction}>{t("introduction")}</p>
        <p className={styles.direction}>{t("direction")}</p>
        <Link className={styles.link} href="/about">
          {t("readMore")} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
