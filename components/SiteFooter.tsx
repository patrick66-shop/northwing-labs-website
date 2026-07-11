import Image from "next/image";
import Link from "next/link";
import SiteContainer from "./SiteContainer";
import { NAV_LINKS } from "./navigation";
import styles from "./SiteFooter.module.css";

/* Approved footer copy (chat-approved spec; tagline placement is the
   one approved home for "Helping Your Business Take Flight."). */
const DESCRIPTION =
  "Practical software, AI tools, automation, and SaaS development for growing small businesses.";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "hello@northwinglabs.com",
    href: "mailto:hello@northwinglabs.com",
  },
  {
    label: "Website",
    value: "northwinglabs.com",
    href: "/",
  },
];

/* Legal pages arrive in a later sprint, matching the other future
   routes that 404 until their issues are built. */
const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

/**
 * SiteFooter — premium closing footer (chat-approved spec, superseding
 * the docs' five-column layout with brand / navigation / contact plus a
 * legal bottom bar). Midnight base with the approved network wave
 * anchored to the bottom edge at low opacity.
 */
export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <SiteContainer className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/brand/logos/northwing-logo-reversed.png"
                alt="NorthWing Labs — home"
                width={892}
                height={240}
                className={styles.logo}
              />
            </Link>
            <p className={styles.tagline}>Helping Your Business Take Flight.</p>
            <p className={styles.description}>{DESCRIPTION}</p>
          </div>

          <nav aria-label="Footer" className={styles.navColumn}>
            <h2 className={styles.columnHeading}>Navigation</h2>
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactColumn}>
            <h2 className={styles.columnHeading}>Contact</h2>
            <ul className={styles.contactList}>
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className={styles.contactItem}>
                  <span className={styles.contactLabel}>{item.label}</span>
                  <a href={item.href} className={styles.footerLink}>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 NorthWing Labs. All rights reserved.
          </p>
          <ul className={styles.legalList}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </footer>
  );
}
