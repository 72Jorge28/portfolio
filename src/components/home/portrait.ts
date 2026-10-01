import type { ImageProps } from "next/image";

type Portrait = {
  src: ImageProps["src"] | null;
  width: number;
  height: number;
  objectPosition: string;
};

// Add a local image path or static import here when the final portrait is selected.
export const portrait: Portrait = {
  src: null,
  width: 760,
  height: 1200,
  objectPosition: "50% 50%",
};
