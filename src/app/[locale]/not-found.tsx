import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "@/components/layout/page-content.module.css";

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  return (
    <div className={styles.content}>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Link href="/">{t("home")}</Link>
    </div>
  );
}
