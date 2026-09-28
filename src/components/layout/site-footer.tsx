import { getTranslations } from "next-intl/server";
import styles from "./site-shell.module.css";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  return (
    <footer className={styles.footer}>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
    </footer>
  );
}
