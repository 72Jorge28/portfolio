import Image from "next/image";
import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import { MediaFrame } from "@/components/ui/media-frame";
import { site } from "@/lib/site";
import regions from "./home-regions.module.css";
import { portrait } from "./portrait";
import styles from "./hero.module.css";

export async function HomeHero() {
  const [t, identity] = await Promise.all([
    getTranslations("Hero"), getTranslations("Identity"),
  ]);

  return (
    <section className={styles.hero} aria-labelledby="introduction-title">
      <div className={`${styles.stage} ${regions.inner}`}>
        <div
          className={styles.portrait}
          style={{ "--portrait-ratio": portrait.width / portrait.height } as CSSProperties}
        >
          <MediaFrame shape="hero">
            <div
              className={styles.portraitContent}
              style={{ aspectRatio: `${portrait.width} / ${portrait.height}` }}
            >
              {portrait.src ? (
                <div className={styles.photoSafeBox}>
                  <Image
                    src={portrait.src}
                    alt={t("portraitAlt", { name: site.owner.fullName })}
                    fill
                    sizes="(min-width: 48rem) min(47.2vw, 28.8rem), min(81vw, 22.5rem)"
                    preload
                    style={{ objectFit: "contain", objectPosition: portrait.objectPosition }}
                  />
                </div>
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderMark} aria-hidden="true">{site.owner.initials}</span>
                  <span className={styles.placeholderLabel}>{t("portraitPlaceholder")}</span>
                </div>
              )}
            </div>
          </MediaFrame>
        </div>
        <div className={styles.introduction}>
          <h1 id="introduction-title" className={styles.name}>
            {site.owner.firstName} <span>{site.owner.lastName}</span>
          </h1>
          <div className={styles.details}>
            <p className={styles.role}>{identity("role")}</p>
            <p className={styles.degree}>{t("degree")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
