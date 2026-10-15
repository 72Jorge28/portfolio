import Image from "next/image";
import { AboutContacts } from "@/components/about/about-contacts";
import type { CSSProperties } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { portrait } from "@/components/home/portrait";
import { MediaFrame } from "@/components/ui/media-frame";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import content from "@/components/layout/page-content.module.css";
import styles from "@/components/about/about.module.css";

export async function generateMetadata() {
  return createPageMetadata(await getLocale(), "about", "/about");
}

export default async function AboutPage() {
  const t = await getTranslations("About");
  return (
    <div className={`${content.content} ${styles.page}`}>
      <div className={styles.opening}>
        <header className={styles.introduction}>
          <h1>{t("title")}</h1>
          <p className="text-lg">{t("introduction")}</p>
        </header>
        {portrait.src && (
          <div
            className={styles.portrait}
            style={{ "--portrait-ratio": portrait.width / portrait.height } as CSSProperties}
          >
            <MediaFrame shape="hero">
              <div className={styles.portraitContent}>
                <div className={styles.photoSafeBox}>
                  <Image
                    src={portrait.src}
                    alt={t("portraitAlt", { name: site.owner.fullName })}
                    fill
                    sizes="(min-width: 64rem) 22rem, (min-width: 48rem) 32vw, min(80vw, 22rem)"
                    style={{ objectFit: "contain", objectPosition: portrait.objectPosition }}
                  />
                </div>
              </div>
            </MediaFrame>
          </div>
        )}
        <p className={styles.background}>{t("background")}</p>
      </div>
      <section aria-labelledby="exploration-title">
        <h2 id="exploration-title">{t("explorationTitle")}</h2>
        <p>{t("explorationDescription")}</p>
      </section>
      <section aria-labelledby="approach-title">
        <h2 id="approach-title">{t("approachTitle")}</h2>
        <p>{t("approachDescription")}</p>
      </section>
      <AboutContacts />
    </div>
  );
}
