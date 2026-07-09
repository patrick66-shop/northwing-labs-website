import styles from "./Typography.module.css";

type SectionEyebrowProps = {
  children: React.ReactNode;
  /** Color defaults to the section context (Flight Blue on light,
   * Flight Gold on dark via SectionWrapper). Set explicitly only when
   * a section needs to deviate from its default. */
  tone?: "auto" | "blue" | "gold";
  className?: string;
};

/**
 * SectionEyebrow — small uppercase section label.
 * Manrope 700, 13px, 0.08em letter spacing.
 */
export default function SectionEyebrow({
  children,
  tone = "auto",
  className,
}: SectionEyebrowProps) {
  const toneClass =
    tone === "gold" ? styles.eyebrowGold : tone === "blue" ? styles.eyebrowBlue : "";
  const classes = [styles.eyebrow, toneClass, className].filter(Boolean).join(" ");
  return <p className={classes}>{children}</p>;
}
