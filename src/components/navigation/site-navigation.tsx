"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { navigationItems } from "./navigation-items";
import styles from "./site-navigation.module.css";

export function SiteNavigation({ labels }: {
  labels: { main: string; home: string; about: string; projects: string };
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={labels.main}>
      <ul className={styles.links}>
        {navigationItems.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} aria-current={pathname === href ? "page" : undefined}>
              {labels[label]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
