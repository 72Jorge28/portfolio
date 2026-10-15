import contentStyles from "@/components/layout/page-content.module.css";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import { bodyFont, displayFont } from "@/fonts/fonts";
import styles from "@/components/layout/site-shell.module.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: site.url,
  title: { default: site.name, template: `%s | ${site.name}` },
};

export default async function GlobalNotFound() {
  const locale = await getLocale();
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Navigation" });
  const error = await getTranslations({ locale, namespace: "NotFound" });

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
            <div className={styles.frame}>
              <SiteHeader />
              <main id="main-content" tabIndex={-1} className={styles.main}>
                <div className={contentStyles.content}>
                  <h1>{error("title")}</h1>
                  <p>{error("description")}</p>
                  <a href={`/${locale}`}>{error("home")}</a>
                </div>
              </main>
              <SiteFooter />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
