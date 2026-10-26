import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { projectCatalog } from "./catalog";
import type { Project } from "./types";
import { resolveProjectLiveUrl, resolveProjectMedia } from "./media";

export async function getProjects(locale: Locale): Promise<Project[]> {
  const t = await getTranslations({ locale, namespace: "ProjectContent" });
  const media = await getTranslations({ locale, namespace: "Projects.media.alternatives" });

  return projectCatalog.map(({ contentKey, ...project }) => ({
    ...project,
    media: resolveProjectMedia(project.media, media),
    liveUrl: resolveProjectLiveUrl(project.liveUrl),
    title: t(`${contentKey}.title`),
    shortDescription: t(`${contentKey}.shortDescription`),
    category: t(`${contentKey}.category`),
  }));
}
