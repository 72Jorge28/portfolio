import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { site } from "./site";

type PageName = "home" | "about" | "projects";

export async function createPageMetadata(
  locale: Locale,
  page: PageName,
  pathname: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);
  const localizedPath = getPathname({ locale, href: pathname });

  return {
    title,
    description,
    ...(site.url && {
      alternates: {
        canonical: new URL(localizedPath, site.url),
        languages: Object.fromEntries([
          ...routing.locales.map((language) => [
            language,
            new URL(getPathname({ locale: language, href: pathname }), site.url),
          ]),
          ["x-default", new URL(getPathname({ locale: routing.defaultLocale, href: pathname }), site.url)],
        ]),
      },
    }),
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      locale,
      alternateLocale: routing.locales.filter((language) => language !== locale),
      ...(site.url && { url: new URL(localizedPath, site.url) }),
    },
  };
}
