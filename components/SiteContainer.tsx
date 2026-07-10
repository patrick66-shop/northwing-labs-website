import styles from "./SiteContainer.module.css";

type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * SiteContainer — the shared horizontal alignment standard.
 * max-width 1280px, centered, with responsive side padding
 * (mobile 24px / tablet+ 32px / wide desktop 48px) driven by
 * the --container-padding token. Use inside all major sections.
 */
export default function SiteContainer({ children, className }: SiteContainerProps) {
  return (
    <div className={className ? `${styles.container} ${className}` : styles.container}>
      {children}
    </div>
  );
}
