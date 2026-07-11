import SectionEyebrow from "./SectionEyebrow";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  eyebrow: string;
  heading: React.ReactNode;
  /** id for the heading element; pass the same value to the section's
   * aria-labelledby. */
  headingId?: string;
  /** Left by default; use center only where composition benefits
   * (final CTA, selected outcome/results sections). */
  align?: "left" | "center";
  /** Scroll-entry animation: eyebrow → heading → supporting copy in a
   * subtle stagger (Reveal skips it under prefers-reduced-motion and
   * without JavaScript). All homepage sections pass true so the page
   * animates as one system. */
  animate?: boolean;
  /** Supporting copy — one or more SupportingCopy elements. */
  children?: React.ReactNode;
  className?: string;
};

/**
 * SectionHeader — consistent eyebrow → heading → supporting copy hierarchy
 * for major sections (docs/COMPONENT-SYSTEM.md §5). Width capped at 820px.
 */
export default function SectionHeader({
  eyebrow,
  heading,
  headingId,
  align = "left",
  animate = false,
  children,
  className,
}: SectionHeaderProps) {
  const classes = [styles.header, align === "center" ? styles.center : "", className]
    .filter(Boolean)
    .join(" ");

  if (!animate) {
    return (
      <div className={classes}>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionHeading as="h2" id={headingId}>
          {heading}
        </SectionHeading>
        {children}
      </div>
    );
  }

  return (
    <div className={classes}>
      <Reveal variant="up" className={styles.revealItem}>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
      </Reveal>
      <Reveal variant="up" delay={80} className={styles.revealItem}>
        <SectionHeading as="h2" id={headingId}>
          {heading}
        </SectionHeading>
      </Reveal>
      {children ? (
        <Reveal variant="up" delay={160} className={styles.revealItem}>
          {children}
        </Reveal>
      ) : null}
    </div>
  );
}
