import styles from "./Typography.module.css";

type SectionHeadingProps = {
  children: React.ReactNode;
  /** Heading level for document hierarchy. Defaults to h2 (section heading). */
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
};

/**
 * SectionHeading — Manrope 700 section heading.
 * Responsive scale comes from the global heading styles
 * (H2: 36–44px desktop / 32–38 tablet / 28–34 mobile).
 * Color adapts to section context: Navy on light, White on dark.
 */
export default function SectionHeading({
  children,
  as: Tag = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const classes = [styles.heading, className].filter(Boolean).join(" ");
  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
}
