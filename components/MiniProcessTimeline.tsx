import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./MiniProcessTimeline.module.css";

/* Approved seven-step process copy from the homepage How We Work
   section (docs/WEBSITE-CONTENT.md §6) — do not edit. */
const STEPS = [
  {
    title: "Discover",
    copy: "Understand the business, users, workflow, current tools, and problem.",
  },
  {
    title: "Define",
    copy: "Clarify requirements, priorities, scope, constraints, and success criteria.",
  },
  {
    title: "Design",
    copy: "Plan the user experience, workflows, screens, system behavior, and technical direction.",
  },
  {
    title: "Build",
    copy: "Develop the solution in controlled, reviewable stages.",
  },
  {
    title: "Test",
    copy: "Validate usability, functionality, responsiveness, accessibility, and reliability.",
  },
  {
    title: "Launch",
    copy: "Deploy the solution and confirm production readiness.",
  },
  {
    title: "Improve",
    copy: "Measure results, gather feedback, and refine where it adds value.",
  },
];

type MiniProcessTimelineProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  copy?: string;
};

/**
 * MiniProcessTimeline — compact seven-step process for the service
 * pages (GitHub issue #18): numbered nodes in the established process
 * language with connector arrows, one approved sentence per step, and
 * a link to the full process page. Not a duplicate of the homepage
 * How We Work section.
 */
export default function MiniProcessTimeline({
  eyebrow,
  heading,
  headingId,
  copy,
}: MiniProcessTimelineProps) {
  return (
    <SectionWrapper
      variant="light"
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
          {STEPS.map((step, index) => (
            <Reveal as="li" variant="up" delay={index * 70} key={step.title}>
              <article className={styles.step}>
                <span className={styles.node} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.copy}>{step.copy}</p>
              </article>
            </Reveal>
          ))}
        </ol>
        <Reveal variant="up" delay={120} className={styles.ctaRow}>
          <SecondaryButton variant="on-light" href="/process">
            See the Full Process
          </SecondaryButton>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
