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

interface SiteContact {
  github?: `https://${string}`;
  linkedin?: `https://${string}`;
  email?: string;
}

// Add verified public contact values here; missing fields are not rendered.
const contact: SiteContact = {};

export const site = {
  name: "Portfolio",
  url: getSiteUrl(),
  owner: "Jorge Ramos",
  role: "Software Developer",
  contact,
};
