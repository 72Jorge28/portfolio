function getSiteUrl() {
  const value = process.env.SITE_URL;
  if (!value) return undefined;

  const url = new URL(value);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("SITE_URL must be an HTTP(S) origin without credentials, a path, query, or fragment.");
  }
  return url;
}

export const site = {
  name: "Portfolio",
  url: getSiteUrl(),
};
