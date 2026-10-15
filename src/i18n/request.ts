import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";

const messageLoaders = {
  en: () => import("./messages/en.json").then((module) => module.default),
  es: () => import("./messages/es.json").then((module) => module.default),
};

export default getRequestConfig(async (params) => {
  const requestedLocale = params.locale;
  if (requestedLocale !== undefined && !hasLocale(routing.locales, requestedLocale)) notFound();
  const implicitLocale = requestedLocale === undefined ? await params.requestLocale : requestedLocale;
  const locale = hasLocale(routing.locales, implicitLocale) ? implicitLocale : routing.defaultLocale;

  return { locale, messages: await messageLoaders[locale]() };
});
