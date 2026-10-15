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

export interface SiteContact {
  github?: `https://${string}`;
  linkedin?: `https://${string}`;
  whatsapp?: `https://${string}`;
  email?: string;
}

// Add verified public contact values here; missing fields are not rendered.
const contact: SiteContact = {
  github: "https://github.com/72Jorge28",
  linkedin: "https://www.linkedin.com/in/jorge-ramos-79b709234/",
};

const ownerName = {
  firstName: "Jorge Luis",
  lastName: "Ramos Suárez",
};

export const site = {
  name: "Portfolio",
  url: getSiteUrl(),
  owner: {
    ...ownerName,
    fullName: `${ownerName.firstName} ${ownerName.lastName}`,
    initials: `${ownerName.firstName[0]}${ownerName.lastName[0]}`,
  },
  contact,
};
