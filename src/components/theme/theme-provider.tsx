"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      // The parser runs the SSR bootstrap before paint. Client-created copies are
      // inert; next-themes effects own updates after hydration. See docs/theme-compatibility.md.
      scriptProps={{
        id: "theme-bootstrap",
        type: typeof window === "undefined" ? "text/javascript" : "application/x-next-themes-bootstrap",
      }}
    >
      {children}
    </NextThemesProvider>
  );
}
