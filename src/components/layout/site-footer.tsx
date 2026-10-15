import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { getFooterContacts } from "@/lib/contacts";
import { navigationItems } from "@/components/navigation/navigation-items";
import styles from "./site-footer.module.css";

export async function SiteFooter() {
  const [t, navigation, identity] = await Promise.all([
    getTranslations("Footer"), getTranslations("Navigation"), getTranslations("Identity"),
  ]);
  const contacts = getFooterContacts(site.contact).map((contact) => ({
    ...contact,
    label: contact.channel === "github" ? "GitHub"
      : contact.channel === "linkedin" ? "LinkedIn" : t("email"),
  }));

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div>
          <p className={styles.name}>{site.owner.fullName}</p>
          <p className={styles.role}>{identity("role")}</p>
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
        <small className={styles.copyright}>© {site.owner.fullName}</small>
        {contacts.length > 0 && (
          <ul className={styles.links}>
            {contacts.map((contact) => (
              <li key={contact.channel}><a href={contact.href}>{contact.label}</a></li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
