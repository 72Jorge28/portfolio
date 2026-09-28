import { getLocale, getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/layout/page-content.module.css";

export async function generateMetadata() {
  return createPageMetadata(await getLocale(), "about", "/about");
}

export default async function AboutPage() {
  const t = await getTranslations("About");
  return (
    <div className={styles.content}>
      <header>
        <h1>{t("title")}</h1>
        <p>{t("introduction")}</p>
      </header>
      <section aria-labelledby="approach-title">
        <h2 id="approach-title">{t("approachTitle")}</h2>
        <p>{t("approachDescription")}</p>
      </section>
    </div>
  );
}
