import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const messagesDirectory = new URL("../src/i18n/messages/", import.meta.url);

function collectMessages(value, prefix = "") {
  return Object.entries(value).flatMap(([key, message]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof message === "string") {
      assert.ok(message.trim(), `Empty message: ${path}`);
      return [path];
    }
    assert.ok(
      message && typeof message === "object" && !Array.isArray(message),
      `Invalid message: ${path}`,
    );
    return collectMessages(message, path);
  });
}

test("Spanish provides every English message with no unexpected keys or empty values", async () => {
  const [english, spanish] = await Promise.all(
    ["en", "es"].map(async (locale) =>
      JSON.parse(await readFile(new URL(`${locale}.json`, messagesDirectory), "utf8")),
    ),
  );
  assert.deepEqual(collectMessages(spanish).sort(), collectMessages(english).sort());
});
