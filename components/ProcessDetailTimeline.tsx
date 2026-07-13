import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./ProcessDetailTimeline.module.css";

export type ProcessDetailStep = {
  title: string;
  /** The approved one-sentence step definition. */
  definition: string;
  /** "In practice" detail lines. */
  bullets: string[];
  /** "You walk away with" closing line. */
  outcome: string;
};

type ProcessDetailTimelineProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  copy?: string;
  steps: ProcessDetailStep[];
  id?: string;
  /** Label above each step's detail lines. */
  bulletsLabel?: string;
  /** Label before each step's closing outcome line. */
  outcomeLabel?: string;
};

/**
 * ProcessDetailTimeline — the expanded step-by-step engagement
 * walkthrough for the Process page: a vertical rail of numbered nodes
 * (the MiniProcessTimeline language, final step gold) with one card
 * per step — approved definition, "in practice" details, and the
 * concrete thing the client walks away with.
 */
export default function ProcessDetailTimeline({
  eyebrow,
  heading,
  headingId,
  copy,
  steps,
  id,
  bulletsLabel = "In practice",
  outcomeLabel = "You walk away with",
}: ProcessDetailTimelineProps) {
  return (
    <SectionWrapper
      variant="light"
      id={id}
      className={styles.section}
      aria-labelledby={headingId}
    >
      <SiteContainer>
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          headingId={headingId}
          align="center"
          animate
        >
          {copy ? <SupportingCopy>{copy}</SupportingCopy> : null}
        </SectionHeader>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal as="li" variant="up" delay={60} key={step.title} className={styles.item}>
              <div className={styles.rail} aria-hidden="true">
                <span className={styles.node}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 ? (
                  <span className={styles.connector} />
                ) : null}
              </div>
              <article className={styles.card}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.definition}>{step.definition}</p>
                <p className={styles.bulletsLabel}>{bulletsLabel}</p>
                <ul className={styles.bullets}>
                  {step.bullets.map((bullet) => (
                    <li className={styles.bullet} key={bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className={styles.outcome}>
                  <span className={styles.outcomeLabel}>{outcomeLabel}:</span>{" "}
                  {step.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </SiteContainer>
    </SectionWrapper>
  );
}
