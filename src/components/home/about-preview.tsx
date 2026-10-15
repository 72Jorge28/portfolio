// src/components/home/about-preview.tsx
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import styles from "./about-preview.module.css";

export async function AboutPreview() {
  const t = await getTranslations("AboutPreview");

  return (
    <section aria-labelledby="about-preview-title">
      <div className={styles.present} data-about-part="present">
        <div className={styles.composition}>
          <div className={styles.personalMedia}>
            <div className={styles.personalMask}>
              <div className={styles.personalImage}>
                <Image
                  src="/images/about/portrait.png"
                  alt={t("portraitAlt", { name: site.owner.fullName })}
                  fill
                  sizes="(width < 48rem) 100vw, 51vw"
                />
              </div>
            </div>
          </div>
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
          <div className={styles.directionMedia}>
            <div className={styles.directionImage}>
              <Image
                src="/images/about/Vigilancia aérea y seguridad urbana.png"
                alt={t("directionAlt")}
                fill
                sizes="(width < 48rem) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
