import SectionEyebrow from "./SectionEyebrow";
import SectionHeading from "./SectionHeading";
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
  children,
  className,
}: SectionHeaderProps) {
  const classes = [styles.header, align === "center" ? styles.center : "", className]
    .filter(Boolean)
    .join(" ");
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
