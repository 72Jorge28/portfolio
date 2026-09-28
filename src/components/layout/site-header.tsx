import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { LocaleSwitcher } from "@/components/navigation/locale-switcher";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { NavigationMenu } from "@/components/navigation/navigation-menu";
import styles from "./site-shell.module.css";

export async function SiteHeader() {
  const [locale, t, theme] = await Promise.all([
    getLocale(),
    getTranslations("Navigation"),
    getTranslations("Theme"),
  ]);

  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.brand}
        aria-label={`Jorge Ramos — ${t("home")}`}
      >
        JR<span aria-hidden="true">.</span>
      </Link>
      <NavigationMenu labels={{ open: t("menu"), close: t("close") }}>
        <SiteNavigation
          labels={{
            main: t("main"),
            home: t("home"),
            about: t("about"),
            projects: t("projects"),
          }}
        />
        <div className={styles.preferences}>
          <LocaleSwitcher locale={locale} label={t("language")} />
          <ThemeSwitcher
            labels={{
              label: theme("label"),
              system: theme("system"),
              light: theme("light"),
              dark: theme("dark"),
            }}
          />
        </div>
      </NavigationMenu>
    </header>
  );
}
