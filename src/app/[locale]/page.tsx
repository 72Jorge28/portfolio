import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { createPageMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/home/home-hero";
import { SelectedProjects } from "@/components/projects/selected-projects";
import styles from "@/components/layout/page-content.module.css";

export async function generateMetadata() {
  return createPageMetadata(await getLocale(), "home", "/");
}

export default async function HomePage() {
  const t = await getTranslations("Home");

  return (
    <>
      <HomeHero />
      <SelectedProjects />
      <div className={styles.content}>
        <section aria-labelledby="about-title">
          <h2 id="about-title">{t("aboutTitle")}</h2>
          <p>{t("aboutDescription")}</p>
          <Link href="/about">{t("aboutLink")}</Link>
        </section>
      </div>
    </>
  );
}
