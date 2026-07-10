import Link from "next/link";
import styles from "./Buttons.module.css";

type PrimaryButtonProps = {
  children: React.ReactNode;
  /** When provided, renders an accessible link styled as a button. */
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

/**
 * PrimaryButton — the primary conversion action.
 * Flight Gold background, Midnight text, Inter 600, 48px min height.
 * Use one primary action per local decision area.
 */
export default function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
}: PrimaryButtonProps) {
  const classes = [styles.button, styles.primary, className].filter(Boolean).join(" ");

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
