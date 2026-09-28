import { getTranslations } from "next-intl/server";
import type { Project } from "@/lib/projects/types";
import styles from "./project-list.module.css";

export async function ProjectList({ projects }: { projects: readonly Project[] }) {
  const t = await getTranslations("Projects");
  if (projects.length === 0) return <p>{t("empty")}</p>;

  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.slug}>
          <article className={styles.project}>
            <h2>{project.title}</h2>
            {project.status && <p className={styles.status}>{t(`status.${project.status}`)}</p>}
            <p>{project.shortDescription}</p>
            {project.technologies.length > 0 && (
              <dl>
                <dt>{t("technologies")}</dt>
                <dd>{project.technologies.join(", ")}</dd>
              </dl>
            )}
            {(project.repositoryUrl || project.liveUrl) && (
              <ul className={styles.links}>
                {project.repositoryUrl && <li><a href={project.repositoryUrl}>{t("repository")}</a></li>}
                {project.liveUrl && <li><a href={project.liveUrl}>{t("live")}</a></li>}
              </ul>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
}
