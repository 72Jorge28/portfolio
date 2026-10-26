import type {
  ProjectMedia,
  ProjectMediaAlternativeKey,
  ProjectMediaDescriptor,
} from "./types.ts";

export const SAMPLE_MEDIA_PAIR = [
  {
    id: "demo-image",
    kind: "image",
    src: "/images/pruebas/demo-image.png",
    width: 640,
    height: 360,
    alternativeKey: "sampleImage",
    isSample: true,
  },
  {
    id: "demo-video",
    kind: "video",
    src: "/images/pruebas/demo-video.mp4",
    width: 1920,
    height: 1080,
    poster: {
      src: "/images/pruebas/demo-video-poster.png",
      width: 1920,
      height: 1080,
    },
    alternativeKey: "sampleVideo",
    isSample: true,
  },
] as const satisfies readonly ProjectMediaDescriptor[];

export function resolveProjectMedia(
  media: readonly ProjectMediaDescriptor[] | undefined,
  translate: (key: ProjectMediaAlternativeKey) => string,
): ProjectMedia[] {
  return (media ?? []).map(({ alternativeKey, ...item }) => ({
    ...item,
    alt: translate(alternativeKey),
  }));
}

export function resolveProjectLiveUrl(liveUrl: string | undefined): string | undefined {
  const value = liveUrl?.trim();
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if ((url.protocol !== "https:" && url.protocol !== "http:") || url.username || url.password) {
      return undefined;
    }
    return value;
  } catch {
    return undefined;
  }
}
