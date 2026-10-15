"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
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
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    let contact: { id: number; x: number; y: number; moved: boolean } | undefined;
    const startContact = (event: PointerEvent) => {
      if (event.isPrimary) {
        contact = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
      }
    };
    const updateContact = (event: PointerEvent) => {
      // Allow small contact jitter, but retain movement even if a drag returns.
      if (contact?.id === event.pointerId &&
        Math.hypot(event.clientX - contact.x, event.clientY - contact.y) > 8) {
        contact.moved = true;
      }
    };
    const cancelContact = (event: PointerEvent) => {
      if (contact?.id === event.pointerId) contact.moved = true;
    };

    const dismissOutside = (event: MouseEvent) => {
      // A mouse drag can still produce a native compatibility click. Keyboard
      // activation has detail 0 and does not belong to a pointer contact.
      const dragged = event.detail > 0 && contact?.moved;
      contact = undefined;
      if (dragged) return;
      const button = trigger.current;
      const menuPanel = panel.current;
      if (!button || !menuPanel || button.getClientRects().length === 0) return;
      const path = event.composedPath();
      if (path.includes(menuPanel) || path.includes(button)) return;

      const activeElement = document.activeElement;
      setOpen(false);
      // Native outside controls keep their focus; background clicks must not
      // strand it in the hidden panel or on the document body.
      if (menuPanel.contains(activeElement) || activeElement === document.body) {
        button.focus({ preventScroll: true });
      }
    };

    const options = { capture: true, passive: true };
    document.addEventListener("pointerdown", startContact, options);
    document.addEventListener("pointermove", updateContact, options);
    document.addEventListener("pointerup", updateContact, options);
    document.addEventListener("pointercancel", cancelContact, options);
    document.addEventListener("click", dismissOutside, options);
    return () => {
      document.removeEventListener("pointerdown", startContact, true);
      document.removeEventListener("pointermove", updateContact, true);
      document.removeEventListener("pointerup", updateContact, true);
      document.removeEventListener("pointercancel", cancelContact, true);
      document.removeEventListener("click", dismissOutside, true);
    };
  }, [open]);

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
        ref={panel}
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
