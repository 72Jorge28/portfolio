import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import { bodyFont, displayFont } from "@/fonts/fonts";
import styles from "@/components/layout/site-shell.module.css";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: site.url,
  title: { default: site.name, template: `%s | ${site.name}` },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Navigation" });

  return (
    <html
      lang={locale}
      className={`${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={null}>
            <a className={styles.skipLink} href="#main-content">
              {t("skip")}
            </a>
            <SiteHeader />
            <main id="main-content" tabIndex={-1} className={styles.main}>
              {children}
            </main>
            <SiteFooter />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
