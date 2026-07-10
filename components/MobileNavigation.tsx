"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteContainer from "./SiteContainer";
import PrimaryButton from "./PrimaryButton";
import { NAV_LINKS } from "./navigation";
import styles from "./SiteHeader.module.css";

type MobileNavigationProps = {
  open: boolean;
  /** Called on close request (close button, Escape, or link tap).
   * The parent restores focus to the menu trigger. */
  onClose: () => void;
};

/**
 * MobileNavigation — full-height accessible navigation panel.
 * Traps focus while open, closes on Escape, locks body scroll,
 * and places the primary CTA inside the menu.
 */
export default function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );

    getFocusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id="mobile-navigation"
      className={styles.mobilePanel}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <SiteContainer>
        <div className={styles.mobilePanelHeader}>
          <Link href="/" className={styles.logoLink} onClick={onClose}>
            <Image
              src="/brand/logos/northwing-logo-reversed.png"
              alt="NorthWing Labs — home"
              width={814}
              height={220}
            />
          </Link>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            <span className={styles.srOnly}>Close menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        <nav aria-label="Primary">
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileCta}>
          <PrimaryButton href="/contact">Start a Conversation</PrimaryButton>
        </div>
      </SiteContainer>
    </div>
  );
}
