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
/* Homepage sections that correspond to primary nav destinations
   (scroll-spy). Section ids are set by the section components. */
const SECTION_NAV_MAP: { id: string; href: string }[] = [
  { id: "services", href: "/services" },
  { id: "work", href: "/work" },
  { id: "process", href: "/process" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Understated active state: while a mapped homepage section crosses
     the middle band of the viewport, its nav item shows the gold
     underline. Pages without those sections simply never activate it. */
  useEffect(() => {
    const targets = SECTION_NAV_MAP.map(({ id, href }) => ({
      el: document.getElementById(id),
      href,
    })).filter((t): t is { el: HTMLElement; href: string } => t.el !== null);
    if (targets.length === 0) return;

    const inBand = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const href = targets.find((t) => t.el === entry.target)?.href;
          if (!href) continue;
          if (entry.isIntersecting) inBand.add(href);
          else inBand.delete(href);
        }
        setActiveHref(
          targets.find((t) => inBand.has(t.href))?.href ?? null,
        );
      },
      /* A thin band around the viewport's vertical midpoint, so exactly
         one section is active at a time. */
      { rootMargin: "-45% 0px -45% 0px" }
    );
    targets.forEach((t) => observer.observe(t.el));
    return () => observer.disconnect();
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
            width={892}
            height={240}
            priority
          />
        </Link>
        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    activeHref === link.href
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : styles.navLink
                  }
                  aria-current={activeHref === link.href ? "true" : undefined}
                >
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
