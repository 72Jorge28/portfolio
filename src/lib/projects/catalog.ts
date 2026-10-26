import type messages from "@/i18n/messages/en.json";
import type { Project } from "./types";
import type { ProjectMediaDescriptor } from "./types";
import { SAMPLE_MEDIA_PAIR } from "./media.ts";

export type ProjectEntry = Omit<Project, "title" | "shortDescription" | "category" | "caseStudy" | "media"> & {
  contentKey: keyof typeof messages.ProjectContent;
  media?: readonly ProjectMediaDescriptor[];
};

export const projectCatalog: readonly ProjectEntry[] = [
  {
    slug: "expenses-and-savings",
    contentKey: "expensesAndSavings",
    technologies: [],
    images: [],
    media: SAMPLE_MEDIA_PAIR,
    featured: true,
    mediaTone: "ivory",
  },
  {
    slug: "gelys-event-styling",
    contentKey: "gelysEventStyling",
    technologies: [],
    images: [],
    media: SAMPLE_MEDIA_PAIR,
    featured: true,
    mediaTone: "sage",
  },
  {
    slug: "living-gallery",
    contentKey: "livingGallery",
    technologies: [],
    images: [],
    media: SAMPLE_MEDIA_PAIR,
    featured: true,
    mediaTone: "petrol",
  },
];
