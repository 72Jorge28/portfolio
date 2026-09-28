"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import styles from "./theme-switcher.module.css";

const subscribe = () => () => {};

export function ThemeSwitcher({ labels }: {
  labels: { label: string; system: string; light: string; dark: string };
}) {
  const { theme, setTheme } = useTheme();
  // Keep the server and hydration render identical until browser preferences are available.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <label className={styles.control}>
      <span className="visually-hidden">{labels.label}</span>
      <select
        value={mounted ? theme ?? "system" : "system"}
        disabled={!mounted}
        onChange={(event) => setTheme(event.target.value)}
      >
        <option value="system">{labels.system}</option>
        <option value="light">{labels.light}</option>
        <option value="dark">{labels.dark}</option>
      </select>
    </label>
  );
}
