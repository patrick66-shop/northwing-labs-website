import styles from "./SectionWrapper.module.css";

type SectionVariant = "light" | "dark" | "tinted" | "transparent";

type SectionWrapperProps = {
  children: React.ReactNode;
  /** Background treatment. Variants re-map the semantic color tokens so
   * child components (headings, copy, eyebrows) adapt automatically. */
  variant?: SectionVariant;
  /** Render element. Defaults to a semantic <section>. */
  as?: "section" | "div" | "header" | "footer";
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
};

/**
 * SectionWrapper — consistent vertical rhythm and background treatment.
 * Vertical padding follows the responsive spec via the --section-space
 * token (mobile 64px / tablet 88px / desktop 112px).
 */
export default function SectionWrapper({
  children,
  variant = "light",
  as: Tag = "section",
  id,
  className,
  "aria-labelledby": ariaLabelledby,
}: SectionWrapperProps) {
  const classes = [styles.section, styles[variant], className].filter(Boolean).join(" ");
  return (
    <Tag id={id} className={classes} aria-labelledby={ariaLabelledby}>
      {children}
    </Tag>
  );
}
