import ProcessStep from "./ProcessStep";
import styles from "./ProcessTimeline.module.css";

type Step = { title: string; copy: string };

type ProcessTimelineProps = {
  steps: Step[];
};

/**
 * ProcessTimeline — composes the seven steps (docs/COMPONENT-SYSTEM.md §22).
 * Desktop: 4 + 3 wrapped flow with the second row centered; each step's
 * node carries a trailing Flight Blue connector line. Mobile: vertical
 * sequence with a visible connector between steps. Ordered list preserves
 * the sequence for screen readers.
 */
export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className={styles.timeline}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.item}>
          <ProcessStep number={index + 1} title={step.title}>
            {step.copy}
          </ProcessStep>
        </li>
      ))}
    </ol>
  );
}
