import type { ImageProps } from "next/image";

type Portrait = {
  src: ImageProps["src"] | null;
  width: number;
  height: number;
  objectPosition: string;
};

export const portrait: Portrait = {
  src: "/images/me/portrait.png",
  width: 1122,
  height: 1402,
  objectPosition: "50% 0%",
};
