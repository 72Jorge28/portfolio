import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { navigationItems } from "@/components/navigation/navigation-items";
import styles from "./site-footer.module.css";

export async function SiteFooter() {
  const [t, navigation] = await Promise.all([
    getTranslations("Footer"), getTranslations("Navigation"),
  ]);
  const contacts = [
    { label: "GitHub", href: site.contact.github },
    { label: "LinkedIn", href: site.contact.linkedin },
    { label: t("email"), href: site.contact.email ? `mailto:${site.contact.email}` : undefined },
  ].filter((contact) => contact.href);

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div>
          <p className={styles.name}>{site.owner}</p>
          <p className={styles.role}>{site.role}</p>
        </div>
        <nav aria-label={t("navigation")}>
          <ul className={styles.links}>
            {navigationItems.map((item) => (
              <li key={item.href}><Link href={item.href}>{navigation(item.label)}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <small className={styles.copyright}>© {site.owner}</small>
        {contacts.length > 0 && (
          <ul className={styles.links}>
            {contacts.map((contact) => (
              <li key={contact.label}><a href={contact.href}>{contact.label}</a></li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
