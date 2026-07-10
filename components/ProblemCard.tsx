import styles from "./ProblemCard.module.css";

type ProblemCardProps = {
  title: string;
  children: React.ReactNode;
};

/**
 * ProblemCard — one business pain point (docs/COMPONENT-SYSTEM.md §14).
 * Wing White card, Cloud Gray border, restrained Flight Blue accent marker.
 */
export default function ProblemCard({ title, children }: ProblemCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.accent} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
