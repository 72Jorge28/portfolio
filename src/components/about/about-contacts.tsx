import { getTranslations } from "next-intl/server";
import { getAboutContacts } from "@/lib/contacts";
import { site } from "@/lib/site";
import { ContactSymbol } from "./contact-symbol";
import styles from "./about.module.css";

export async function AboutContacts() {
  const t = await getTranslations("About");

  return (
    <section aria-labelledby="contacts-title">
      <h2 id="contacts-title">{t("contactsTitle")}</h2>
      <ul className={styles.contacts}>
        {getAboutContacts(site.contact).map((entry) => {
          const symbol = (
            <span className={styles.contactSymbol} data-channel={entry.channel} aria-hidden="true">
              <ContactSymbol channel={entry.channel} />
            </span>
          );

          return (
            <li key={entry.channel}>
              {entry.available ? (
                <a className={styles.contactLink} href={entry.href}>
                  {symbol}
                  <span>{t(`contacts.${entry.channel}`)}</span>
                </a>
              ) : (
                <div className={styles.contactStatic}>
                  {symbol}
                  <div>
                    <span>{t(`contacts.${entry.channel}`)}</span>
                    <p className={styles.unavailable}>{t("unavailable")}</p>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
