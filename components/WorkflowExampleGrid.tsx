import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./WorkflowExampleGrid.module.css";

export type WorkflowExample = {
  title: string;
  /** Ordered flow: the first entry is the trigger, the rest are the
   * connected actions that follow it. */
  steps: string[];
};

type WorkflowExampleGridProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  /** Plain text or JSX — contextual internal links welcome. */
  copy?: React.ReactNode;
  workflows: WorkflowExample[];
  id?: string;
};

/**
 * WorkflowExampleGrid — example workflow sequences for the service
 * pages (GitHub issue #22): each card is a titled, semantic ordered
 * list from trigger to result, connected by a quiet vertical thread.
 * Live HTML text, readable at every width — deliberately not a
 * technical flowchart.
 */
export default function WorkflowExampleGrid({
  eyebrow,
  heading,
  headingId,
  copy,
  workflows,
  id,
}: WorkflowExampleGridProps) {
  return (
    <SectionWrapper variant="tinted" id={id} aria-labelledby={headingId}>
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
        <ul className={styles.grid}>
          {workflows.map((workflow, index) => (
            <Reveal as="li" variant="up" delay={index * 80} key={workflow.title}>
              <article className={styles.card}>
                <h3 className={styles.title}>{workflow.title}</h3>
                <ol className={styles.flow}>
                  {workflow.steps.map((step) => (
                    <li className={styles.step} key={step}>
                      {step}
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
