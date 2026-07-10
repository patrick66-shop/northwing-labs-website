import Link from "next/link";
import styles from "./Buttons.module.css";

type SecondaryButtonProps = {
  children: React.ReactNode;
  /** Match to the section background:
   * "on-dark"  = transparent with white outline (dark sections)
   * "on-light" = solid Navy with white text (light sections) */
  variant?: "on-dark" | "on-light";
  /** When provided, renders an accessible link styled as a button. */
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

/**
 * SecondaryButton — supporting action beside a PrimaryButton.
 * Inter 600, 48px min height, shared radius with PrimaryButton.
 */
export default function SecondaryButton({
  children,
  variant = "on-light",
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
}: SecondaryButtonProps) {
  const variantClass =
    variant === "on-dark" ? styles.secondaryOnDark : styles.secondaryOnLight;
  const classes = [styles.button, variantClass, className].filter(Boolean).join(" ");

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
