export type ProjectStatus = "in-progress" | "completed" | "archived";

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
  repositoryUrl?: string;
  liveUrl?: string;
  status?: ProjectStatus;
  featured: boolean;
  mediaTone: "ivory" | "sage" | "petrol";
}
