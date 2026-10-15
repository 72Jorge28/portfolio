import type { SiteContact } from "./site.ts";

const contactChannels = ["github", "linkedin", "whatsapp", "email"] as const;

export type ContactChannel = typeof contactChannels[number];

export type ActiveContact = {
  channel: ContactChannel;
  available: true;
  href: string;
};

export type AboutContact = ActiveContact | {
  channel: ContactChannel;
  available: false;
  href?: never;
};

export function getAboutContacts(contact: SiteContact): AboutContact[] {
  return contactChannels.map((channel) => {
    const value = contact[channel];
    if (!value) return { channel, available: false };

    return {
      channel,
      available: true,
      href: channel === "email" ? `mailto:${value}` : value,
    };
  });
}

export function getFooterContacts(contact: SiteContact): ActiveContact[] {
  return getAboutContacts(contact).filter(
    (entry): entry is ActiveContact => entry.available && entry.channel !== "whatsapp",
  );
}
