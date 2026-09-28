import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjects } from "@/lib/projects/queries";
import { Carousel } from "@/components/ui/carousel";
import { ProjectPreview } from "./project-preview";
import styles from "./selected-projects.module.css";

export async function SelectedProjects() {
  const locale = await getLocale();
  const [projects, t, carousel] = await Promise.all([
    getProjects(locale), getTranslations("SelectedWork"), getTranslations("Carousel"),
  ]);
  const selected = projects.filter((project) => project.featured);
  if (!selected.length) return null;

  return (
    <section className={styles.section} aria-labelledby="selected-work-title">
      <header className={styles.heading}>
        <div className={styles.titleGroup}>
          <span className={styles.number} aria-hidden="true">02</span>
          <h2 id="selected-work-title">{t("title")}</h2>
        </div>
        <Link className={styles.allProjects} href="/projects">
          {t("allProjects")} <span aria-hidden="true">↗</span>
        </Link>
      </header>
      <Carousel
        items={selected.map((project, index) => ({
          id: project.slug,
          navigationLabel: carousel("goTo", { title: project.title }),
          positionLabel: carousel("position", { current: index + 1, total: selected.length }),
          content: <ProjectPreview project={project} placeholder={t("placeholder")} />,
        }))}
        labels={{
          label: carousel("label"), description: carousel("description"),
          previous: carousel("previous"), next: carousel("next"),
          play: carousel("play"), pause: carousel("pause"),
          reducedMotion: carousel("reducedMotion"), instructions: carousel("instructions"),
        }}
      />
    </section>
  );
}
