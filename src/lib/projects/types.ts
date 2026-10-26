import type messages from "../../i18n/messages/en.json";

export type ProjectStatus = "in-progress" | "completed" | "archived";

export type ProjectMediaAlternativeKey = keyof typeof messages.Projects.media.alternatives;

type MediaSource = {
  id: string;
  src: string;
  width: number;
  height: number;
  isSample: boolean;
} & ({ kind: "image" } | {
  kind: "video";
  poster?: { src: string; width: number; height: number };
});

export type ProjectMediaDescriptor = MediaSource & {
  alternativeKey: ProjectMediaAlternativeKey;
};

export type ProjectMedia = MediaSource & { alt: string };

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  caseStudy?: string;
  technologies: readonly string[];
  images: readonly ProjectImage[];
  media?: readonly ProjectMedia[];
  repositoryUrl?: string;
  liveUrl?: string;
  status?: ProjectStatus;
  featured: boolean;
  mediaTone: "ivory" | "sage" | "petrol";
}
