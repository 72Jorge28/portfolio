import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import * as rootParams from "next/root-params";
import { routing } from "./routing";

const messageLoaders = {
  en: () => import("./messages/en.json").then((module) => module.default),
  es: () => import("./messages/es.json").then((module) => module.default),
};

export default getRequestConfig(async ({ locale: requestedLocale }) => {
  const locale = requestedLocale ?? (await rootParams.locale());
  if (!hasLocale(routing.locales, locale)) notFound();

  return { locale, messages: await messageLoaders[locale]() };
});
