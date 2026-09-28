"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import styles from "./navigation-menu.module.css";

export function NavigationMenu({
  children,
  labels,
}: {
  children: ReactNode;
  labels: { open: string; close: string };
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);

  return (
    <div
      className={styles.menu}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        className={styles.trigger}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {open ? labels.close : labels.open}
        <span className={styles.icon} aria-hidden="true" data-open={open}>
          <span />
          <span />
        </span>
      </button>
      <div
        id={id}
        className={styles.panel}
        data-open={open}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            setOpen(false);
          }
        }}
      >
        {children}
      </div>
    </div>
  );
}
