import type messages from "@/i18n/messages/en.json";
import type { Project } from "./types";

type ProjectEntry = Omit<Project, "title" | "shortDescription" | "category" | "caseStudy"> & {
  contentKey: keyof typeof messages.ProjectContent;
};

export const projectCatalog: readonly ProjectEntry[] = [
  {
    slug: "expenses-and-savings",
    contentKey: "expensesAndSavings",
    technologies: [],
    images: [],
    featured: true,
    mediaTone: "ivory",
  },
  {
    slug: "gelys-event-styling",
    contentKey: "gelysEventStyling",
    technologies: [],
    images: [],
    featured: true,
    mediaTone: "sage",
  },
  {
    slug: "living-gallery",
    contentKey: "livingGallery",
    technologies: [],
    images: [],
    featured: true,
    mediaTone: "petrol",
  },
];
