import styles from "./Typography.module.css";

type SupportingCopyProps = {
  children: React.ReactNode;
  /** "large" = introductory paragraphs (18–20px); default body is 17px. */
  size?: "default" | "large";
  className?: string;
};

/**
 * SupportingCopy — Inter 400 supporting paragraph.
 * Line length capped at 680px; color adapts to section context
 * (Slate on light, Cloud Gray on dark).
 */
export default function SupportingCopy({
  children,
  size = "default",
  className,
}: SupportingCopyProps) {
  const classes = [styles.copy, size === "large" ? styles.copyLarge : "", className]
    .filter(Boolean)
    .join(" ");
  return <p className={classes}>{children}</p>;
}
