import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { projectCatalog } from "../src/lib/projects/catalog.ts";

test("project slugs are unique route segments and every record has localized content", async () => {
  const slugs = projectCatalog.map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const locale of ["en", "es"]) {
    const messages = JSON.parse(await readFile(
      new URL(`../src/i18n/messages/${locale}.json`, import.meta.url), "utf8",
    ));
    for (const project of projectCatalog) {
      assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      for (const field of ["title", "shortDescription", "category"]) {
        assert.ok(messages.ProjectContent[project.contentKey]?.[field]?.trim(),
          `${locale}: ${project.slug} is missing ${field}`);
      }
    }
  }
});
