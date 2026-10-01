"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import styles from "./site-shell.module.css";

export function SiteHeaderFrame({ children }: { children: ReactNode }) {
  const header = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = header.current;
    if (!element) return;
    const root = document.documentElement;
    const updateHeight = () => {
      root.style.setProperty("--site-header-height", `${element.getBoundingClientRect().height}px`);
    };
    // Measure the actual header, including wrapping or enlarged interface text.
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element, { box: "border-box" });
    return () => {
      observer.disconnect();
      root.style.removeProperty("--site-header-height");
    };
  }, []);

  return <header ref={header} className={styles.header}>{children}</header>;
}
