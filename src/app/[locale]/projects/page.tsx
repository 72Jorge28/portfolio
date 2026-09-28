import { getLocale, getTranslations } from "next-intl/server";
import { ProjectList } from "@/components/projects/project-list";
import { getProjects } from "@/lib/projects/queries";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/layout/page-content.module.css";

export async function generateMetadata() {
  return createPageMetadata(await getLocale(), "projects", "/projects");
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const [t, projects] = await Promise.all([getTranslations("Projects"), getProjects(locale)]);
  return (
    <div className={styles.content}>
      <header>
        <h1>{t("title")}</h1>
        <p>{t("introduction")}</p>
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}
