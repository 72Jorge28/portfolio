"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { localeNames, routing, type Locale } from "@/i18n/routing";
import styles from "./site-navigation.module.css";

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul className={styles.links}>
        {routing.locales.map((language) => (
          <li key={language}>
            <Link
              href={pathname}
              locale={language}
              hrefLang={language}
              lang={language}
              aria-label={localeNames[language]}
              title={localeNames[language]}
              aria-current={locale === language ? "true" : undefined}
            >
              {language.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
