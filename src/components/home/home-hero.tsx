import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MediaFrame } from "@/components/ui/media-frame";
import { HeroOrnament } from "./hero-ornament";
import { portrait } from "./portrait";
import styles from "./hero.module.css";

export async function HomeHero() {
  const t = await getTranslations("Hero");

  return (
    <section className={styles.hero} aria-labelledby="introduction-title">
      <div className={styles.stage}>
        <HeroOrnament />
        <div className={styles.portrait}>
          <MediaFrame>
            <div
              className={styles.portraitContent}
              style={{ aspectRatio: `${portrait.width} / ${portrait.height}` }}
            >
              {portrait.src ? (
                <Image
                  src={portrait.src}
                  alt={t("portraitAlt")}
                  fill
                  sizes="(min-width: 768px) 34vw, (min-width: 390px) 300px, 74vw"
                  preload
                  style={{ objectFit: "cover", objectPosition: portrait.objectPosition }}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderMark} aria-hidden="true">JR</span>
                  <span className={styles.placeholderLabel}>{t("portraitPlaceholder")}</span>
                </div>
              )}
            </div>
          </MediaFrame>
        </div>
        <div className={styles.introduction}>
          <h1 id="introduction-title" className={styles.name}>
            Jorge <span>Ramos</span>
          </h1>
          <div className={styles.details}>
            <p className={styles.role}>Software Developer</p>
            <p className={styles.degree}>{t("degree")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
