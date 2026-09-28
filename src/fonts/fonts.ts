import localFont from "next/font/local";

export const displayFont = localFont({
  src: "./cormorant-garamond-latin.woff2",
  variable: "--font-display",
  weight: "300 700",
  display: "swap",
  fallback: ["Georgia"],
});

export const bodyFont = localFont({
  src: "./manrope-latin.woff2",
  variable: "--font-body",
  weight: "200 800",
  display: "swap",
  fallback: ["Arial"],
});
