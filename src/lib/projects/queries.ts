import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { projectCatalog } from "./catalog";
import type { Project } from "./types";

export async function getProjects(locale: Locale): Promise<Project[]> {
  const t = await getTranslations({ locale, namespace: "ProjectContent" });

  return projectCatalog.map(({ contentKey, ...project }) => ({
    ...project,
    title: t(`${contentKey}.title`),
    shortDescription: t(`${contentKey}.shortDescription`),
    category: t(`${contentKey}.category`),
  }));
}
