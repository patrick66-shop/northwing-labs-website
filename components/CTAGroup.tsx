import styles from "./Buttons.module.css";

type CTAGroupProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * CTAGroup — groups a primary and optional secondary action.
 * Inline with a 16px gap on desktop; stacks full-width below 480px
 * while the primary action retains visual hierarchy (place it first).
 */
export default function CTAGroup({ children, className }: CTAGroupProps) {
  const classes = [styles.ctaGroup, className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}
