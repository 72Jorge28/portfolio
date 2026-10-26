import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { projectCatalog } from "../src/lib/projects/catalog.ts";
import {
  SAMPLE_MEDIA_PAIR,
  resolveProjectMedia,
  resolveProjectLiveUrl,
} from "../src/lib/projects/media.ts";

const catalogs = Object.fromEntries(await Promise.all(["en", "es"].map(async (locale) => [
  locale,
  JSON.parse(await readFile(new URL(`../src/i18n/messages/${locale}.json`, import.meta.url), "utf8")),
])));

test("sample descriptors preserve the inspected image/video order, dimensions and original bytes", async () => {
  assert.deepEqual(SAMPLE_MEDIA_PAIR.map(({ id, kind, width, height, isSample }) =>
    [id, kind, width, height, isSample]), [
    ["demo-image", "image", 640, 360, true],
    ["demo-video", "video", 1920, 1080, true],
  ]);
  const expected = [
    [310566, "52441f615b82ceb16eca473f0ebc834248d2f0c2342c53a9c7ba838a3dcc86d3"],
    [7722052, "bdd4d58057cc961023c415a64af5f689e84488e594e9de29e1db1b1cfe0a74bd"],
  ];
  for (const [index, item] of SAMPLE_MEDIA_PAIR.entries()) {
    const bytes = await readFile(new URL(`../public${item.src}`, import.meta.url));
    assert.deepEqual([bytes.length, createHash("sha256").update(bytes).digest("hex")], expected[index]);
  }
});

test("absent and empty media stay empty rather than receiving samples", () => {
  const translate = () => assert.fail("Empty media must not request alternatives");
  assert.deepEqual(resolveProjectMedia(undefined, translate), []);
  assert.deepEqual(resolveProjectMedia([], translate), []);
});

test("the centrally configured video poster is a real PNG with matching intrinsic dimensions", async () => {
  const [image, video] = SAMPLE_MEDIA_PAIR;
  assert.equal(Object.hasOwn(image, "poster"), false);
  assert.deepEqual(video.poster, {
    src: "/images/pruebas/demo-video-poster.png", width: 1920, height: 1080,
  });
  const bytes = await readFile(new URL(`../public${video.poster.src}`, import.meta.url));
  assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.equal(bytes.toString("ascii", 12, 16), "IHDR");
  assert.deepEqual([bytes.readUInt32BE(16), bytes.readUInt32BE(20)],
    [video.poster.width, video.poster.height]);
  assert.equal(createHash("sha256").update(bytes).digest("hex"),
    "95229f54968dfe293009ee28afd693c7eca28b772d968ca5659b314487869380");
  for (const project of projectCatalog) {
    assert.equal(project.media, SAMPLE_MEDIA_PAIR);
    assert.deepEqual(project.images, []);
  }
});

test("optional posters survive bilingual mixed/fourth-project projection without mutating inputs or video dimensions", () => {
  const poster = Object.freeze({
    src: SAMPLE_MEDIA_PAIR[0].src, width: 640, height: 360,
  });
  const withPoster = Object.freeze({ ...SAMPLE_MEDIA_PAIR[1], id: "fixture-poster", poster });
  const withoutPoster = { ...SAMPLE_MEDIA_PAIR[1], id: "fixture-no-poster" };
  delete withoutPoster.poster;
  Object.freeze(withoutPoster);
  const mixed = Object.freeze([withoutPoster, SAMPLE_MEDIA_PAIR[0], withPoster]);
  const fixtures = Object.freeze([
    projectCatalog[2],
    Object.freeze({ ...projectCatalog[0], slug: "fourth-fixture", media: mixed }),
    projectCatalog[0], projectCatalog[1],
  ]);
  const original = structuredClone(fixtures);
  for (const messages of Object.values(catalogs)) {
    const projected = fixtures.map(({ slug, media }) => ({
      slug, media: resolveProjectMedia(media, (key) => messages.Projects.media.alternatives[key]),
    }));
    assert.deepEqual(projected.map(({ slug }) => slug),
      ["living-gallery", "fourth-fixture", "expenses-and-savings", "gelys-event-styling"]);
    for (const index of [0, 2, 3]) {
      assert.deepEqual(projected[index].media[1].poster, {
        src: "/images/pruebas/demo-video-poster.png", width: 1920, height: 1080,
      });
    }
    const [absent, image, configured] = projected[1].media;
    assert.deepEqual(projected[1].media.map(({ id }) => id),
      ["fixture-no-poster", "demo-image", "fixture-poster"]);
    assert.equal(Object.hasOwn(absent, "poster"), false);
    assert.equal(Object.hasOwn(image, "poster"), false);
    assert.deepEqual(configured.poster, poster);
    for (const video of [absent, configured]) {
      assert.deepEqual([video.kind, video.src, video.width, video.height, video.isSample],
        ["video", "/images/pruebas/demo-video.mp4", 1920, 1080, true]);
      assert.equal(video.alt, messages.Projects.media.alternatives.sampleVideo);
    }
    assert.deepEqual(JSON.parse(JSON.stringify(projected)), projected);
  }
  assert.deepEqual(fixtures, original);
});

test("single and mixed media retain order, identity, sample flags and localized alternatives", () => {
  const realImage = { ...SAMPLE_MEDIA_PAIR[0], id: "fixture-image", isSample: false };
  const mixed = [SAMPLE_MEDIA_PAIR[1], realImage, SAMPLE_MEDIA_PAIR[0]];
  const original = structuredClone(mixed);
  for (const [locale, messages] of Object.entries(catalogs)) {
    const translate = (key) => {
      const value = messages.Projects.media.alternatives[key];
      assert.ok(value?.trim(), `${locale}: missing ${key}`);
      return value;
    };
    for (const sequence of [[realImage], mixed]) {
      const result = resolveProjectMedia(sequence, translate);
      assert.deepEqual(result, sequence.map(({ alternativeKey, ...item }) => ({
        ...item, alt: translate(alternativeKey),
      })));
      assert.deepEqual(JSON.parse(JSON.stringify(result)), result);
      result.forEach((item) => assert.ok(item.width > 0 && item.height > 0));
    }
  }
  assert.deepEqual(mixed, original);
  assert.notEqual(catalogs.en.Projects.media.alternatives.sampleImage,
    catalogs.es.Projects.media.alternatives.sampleImage);
  assert.notEqual(catalogs.en.Projects.media.alternatives.sampleVideo,
    catalogs.es.Projects.media.alternatives.sampleVideo);
});

test("added and reordered configuration resolves without project-specific defaults or branching", () => {
  const newProject = { ...projectCatalog[0], slug: "synthetic-fixture", media: [SAMPLE_MEDIA_PAIR[1]] };
  const emptyProject = { ...projectCatalog[1], slug: "empty-fixture", media: undefined };
  const fixtures = [newProject, ...projectCatalog.slice().reverse(), emptyProject];
  for (const messages of Object.values(catalogs)) {
    const projected = fixtures.map(({ slug, media }) => ({
      slug, media: resolveProjectMedia(media, (key) => messages.Projects.media.alternatives[key]),
    }));
    assert.deepEqual(projected.map(({ slug }) => slug), fixtures.map(({ slug }) => slug));
    assert.deepEqual(projected.map(({ media }) => media.map(({ kind }) => kind)), [
      ["video"], ["image", "video"], ["image", "video"], ["image", "video"], [],
    ]);
    assert.deepEqual(projected[0].media.map(({ id }) => id), ["demo-video"]);
  }
});

test("unconfigured, placeholder, unsafe and credential-bearing live destinations are omitted", () => {
  for (const value of [undefined, "", "  ", "#", "#project", "/projects", "example.com",
    "not a URL", "javascript:alert(1)", "data:text/html,test", "mailto:test@example.test",
    "ftp://example.test", "https://", "https://user:password@example.test",
    "https://user@example.test", "//example.test"]) {
    assert.equal(resolveProjectLiveUrl(value), undefined, String(value));
  }
});

test("valid HTTP(S) live destinations retain their configured path, query and fragment", () => {
  for (const value of ["https://example.test/project?view=demo#details", "http://example.test/project"]) {
    assert.equal(resolveProjectLiveUrl(value), value);
    assert.equal(resolveProjectLiveUrl(`  ${value}  `), value);
  }
});
