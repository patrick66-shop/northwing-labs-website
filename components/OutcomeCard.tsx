import styles from "./OutcomeCard.module.css";

type OutcomeCardProps = {
  title: string;
  children: React.ReactNode;
};

/**
 * OutcomeCard — one business outcome (docs/COMPONENT-SYSTEM.md §16).
 * Dark card for the Navy/Midnight outcomes section: subtle translucent
 * surface, Flight Blue marker, white title, Cloud Gray copy. One outcome
 * per card; no fabricated metrics.
 */
export default function OutcomeCard({ title, children }: OutcomeCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.accent} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
