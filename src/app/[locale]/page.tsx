import { getLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/home/home-hero";
import { SelectedProjects } from "@/components/projects/selected-projects";
import { AboutPreview } from "@/components/home/about-preview";

export async function generateMetadata() {
  return createPageMetadata(await getLocale(), "home", "/");
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SelectedProjects />
      <AboutPreview />
    </>
  );
}
