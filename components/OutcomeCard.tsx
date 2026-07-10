import OutcomeIcon, { type OutcomeIconName } from "./OutcomeIcon";
import styles from "./OutcomeCard.module.css";

type OutcomeCardProps = {
  title: string;
  icon: OutcomeIconName;
  children: React.ReactNode;
};

/**
 * OutcomeCard — one business outcome (docs/COMPONENT-SYSTEM.md §16).
 * Dark card for the Midnight outcomes section: subtle translucent
 * surface, small Flight Blue line icon, white title, Cloud Gray copy.
 * One outcome per card; no fabricated metrics.
 */
export default function OutcomeCard({ title, icon, children }: OutcomeCardProps) {
  return (
    <article className={styles.card}>
      <OutcomeIcon name={icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
