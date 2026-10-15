import assert from "node:assert/strict";
import test from "node:test";
import { site } from "../src/lib/site.ts";

test("public identity preserves compound names and JR branding for shared consumers", () => {
  assert.equal(site.owner.firstName, "Jorge Luis");
  assert.equal(site.owner.lastName, "Ramos Suárez");
  assert.equal(site.owner.fullName, "Jorge Luis Ramos Suárez");
  assert.equal(site.owner.initials, "JR");
});
