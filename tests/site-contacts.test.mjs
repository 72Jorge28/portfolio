import assert from "node:assert/strict";
import test from "node:test";
import { site } from "../src/lib/site.ts";

const channels = ["github", "linkedin", "whatsapp", "email"];
const configured = {
  github: "https://github.com/example",
  linkedin: "https://www.linkedin.com/in/example/",
  whatsapp: "https://wa.me/15555550100",
  email: "hello@example.com",
};

test("initial contacts publish only the two approved public destinations", () => {
  assert.deepEqual(site.contact, {
    github: "https://github.com/72Jorge28",
    linkedin: "https://www.linkedin.com/in/jorge-ramos-79b709234/",
  });
  assert.equal(site.contact.email, undefined);
  assert.equal(site.contact.whatsapp, undefined);
});

test("About retains four ordered entries with explicit active and unavailable states", async () => {
  const { getAboutContacts } = await import("../src/lib/contacts.ts");
  assert.deepEqual(getAboutContacts(site.contact), [
    { channel: "github", available: true, href: site.contact.github },
    { channel: "linkedin", available: true, href: site.contact.linkedin },
    { channel: "whatsapp", available: false },
    { channel: "email", available: false },
  ]);
});

test("configured channels preserve HTTPS destinations and prefix raw email exactly once", async () => {
  const { getAboutContacts } = await import("../src/lib/contacts.ts");
  const input = Object.freeze({ ...configured });
  assert.deepEqual(getAboutContacts(input), channels.map((channel) => ({
    channel,
    available: true,
    href: channel === "email" ? "mailto:hello@example.com" : configured[channel],
  })));
  assert.deepEqual(input, configured);
});

test("missing and empty email configuration never create empty or fake actions", async () => {
  const { getAboutContacts, getFooterContacts } = await import("../src/lib/contacts.ts");
  for (const input of [{}, { email: "" }]) {
    assert.deepEqual(getAboutContacts(input), channels.map((channel) => ({
      channel, available: false,
    })));
    assert.deepEqual(getFooterContacts(input), []);
  }
});

test("footer includes configured GitHub, LinkedIn and existing email but never WhatsApp", async () => {
  const { getFooterContacts } = await import("../src/lib/contacts.ts");
  assert.deepEqual(getFooterContacts(configured), [
    { channel: "github", available: true, href: configured.github },
    { channel: "linkedin", available: true, href: configured.linkedin },
    { channel: "email", available: true, href: "mailto:hello@example.com" },
  ]);
  assert.deepEqual(getFooterContacts({ whatsapp: configured.whatsapp }), []);
  assert.deepEqual(getFooterContacts(site.contact).map(({ channel }) => channel), [
    "github", "linkedin",
  ]);
});

test("updates propagate to both eligible projections without changing other contacts", async () => {
  const { getAboutContacts, getFooterContacts } = await import("../src/lib/contacts.ts");
  const updates = {
    github: "https://github.com/example-updated",
    linkedin: "https://www.linkedin.com/in/example-updated/",
    whatsapp: "https://wa.me/15555550101",
    email: "updated@example.com",
  };
  for (const channel of channels) {
    const input = { ...configured, [channel]: updates[channel] };
    const href = channel === "email" ? `mailto:${updates.email}` : updates[channel];
    const about = getAboutContacts(input);
    assert.equal(about.find((entry) => entry.channel === channel).href, href);
    assert.deepEqual(about.filter((entry) => entry.channel !== channel),
      getAboutContacts(configured).filter((entry) => entry.channel !== channel));
    const footerEntry = getFooterContacts(input).find((entry) => entry.channel === channel);
    if (channel === "whatsapp") assert.equal(footerEntry, undefined);
    else assert.equal(footerEntry.href, href);
  }
});

test("removal retains the static About entry and omits its footer occurrence", async () => {
  const { getAboutContacts, getFooterContacts } = await import("../src/lib/contacts.ts");
  for (const channel of channels) {
    const input = { ...configured };
    delete input[channel];
    assert.deepEqual(getAboutContacts(input).find((entry) => entry.channel === channel), {
      channel, available: false,
    });
    assert.equal(getAboutContacts(input).length, 4);
    assert.equal(getFooterContacts(input).some((entry) => entry.channel === channel), false);
  }
});
