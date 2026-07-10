"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteContainer from "./SiteContainer";
import PrimaryButton from "./PrimaryButton";
import MobileNavigation from "./MobileNavigation";
import { NAV_LINKS } from "./navigation";
import styles from "./SiteHeader.module.css";

/**
 * SiteHeader — fixed site header.
 * Transparent over the dark hero at the top of the page; transitions to a
 * solid Midnight background with a subtle edge on scroll. Shows desktop
 * navigation + CTA at ≥1024px and the mobile menu trigger below that.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <header className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header}>
      <SiteContainer className={styles.inner}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/brand/logos/northwing-logo-reversed.png"
            alt="NorthWing Labs — home"
            width={814}
            height={220}
            priority
          />
        </Link>
        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.headerCta}>
          <PrimaryButton href="/contact" className={styles.ctaButton}>
            Start a Conversation
          </PrimaryButton>
        </div>
        <button
          ref={triggerRef}
          type="button"
          className={styles.menuTrigger}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
        >
          <span className={styles.srOnly}>Open menu</span>
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
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </SiteContainer>
      <MobileNavigation open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
