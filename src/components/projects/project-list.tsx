import { getTranslations } from "next-intl/server";
import type { Project } from "@/lib/projects/types";
import { ProjectGallery } from "./project-gallery";
import styles from "./project-list.module.css";

export async function ProjectList({ projects }: { projects: readonly Project[] }) {
  const t = await getTranslations("Projects");
  if (projects.length === 0) return <p>{t("empty")}</p>;

  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectGallery className={styles.project} media={project.media} heading={<h2 key={project.slug}>{project.title}</h2>}
            labels={{
              gallery: t("media.galleryLabel", { title: project.title }),
              previous: t("media.previous", { title: project.title }),
              next: t("media.next", { title: project.title }),
              positions: (project.media ?? []).map((_, index, items) =>
                t("media.position", { title: project.title, current: index + 1, total: items.length })),
              sampleLabel: t("media.sampleLabel"),
              sampleExplanation: t("media.sampleExplanation"),
              empty: t("media.empty"),
              unavailable: t("media.unavailable"),
              previewUnavailable: t("media.previewUnavailable"),
              videoPreview: t("media.videoPreview"),
              videoPreviewCompact: t("media.videoPreviewCompact"),
              openImage: t("media.openImage", { title: project.title }),
              openVideo: t("media.openVideo", { title: project.title }),
              viewer: {
                title: project.title,
                viewer: t("media.viewerLabel", { title: project.title }),
                close: t("media.close"),
                sampleLabel: t("media.sampleLabel"),
                sampleExplanation: t("media.sampleExplanation"),
                unavailable: t("media.unavailable"),
              },
            }}>
            <p className={styles.category}>{project.category}</p>
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
          </ProjectGallery>
        </li>
      ))}
    </ul>
  );
}
