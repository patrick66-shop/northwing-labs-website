import styles from "./ProcessTimeline.module.css";

type ProcessStepProps = {
  number: number;
  title: string;
  children: React.ReactNode;
};

/**
 * ProcessStep — one stage of the seven-step process
 * (docs/COMPONENT-SYSTEM.md §20). Flight Blue numbered node with a
 * trailing connector line (the ProcessConnector, realized in CSS),
 * Manrope title, Inter description.
 */
export default function ProcessStep({ number, title, children }: ProcessStepProps) {
  return (
    <article className={styles.step}>
      <div className={styles.stepHeader}>
        <span className={styles.stepNumber} aria-hidden="true">
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepCopy}>{children}</p>
    </article>
  );
}
