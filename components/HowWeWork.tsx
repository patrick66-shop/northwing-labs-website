import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import ProcessTimeline from "./ProcessTimeline";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./HowWeWork.module.css";

/* Approved production copy from docs/WEBSITE-CONTENT.md §6 — do not edit. */
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

/**
 * How We Work — homepage section 6 (HOMEPAGE-DESIGN-SPEC §10).
 * Light technical background, seven-step timeline (4 + 3 desktop,
 * 2 columns tablet, vertical mobile), navigational CTA.
 */
export default function HowWeWork() {
  return (
    <SectionWrapper
      variant="light"
      id="process"
      className={styles.section}
      aria-labelledby="process-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="HOW WE WORK"
          heading="A clear process from problem to working solution."
          headingId="process-heading"
          animate
        >
          <SupportingCopy>
            Good technology starts with a clear understanding of the business
            problem. NorthWing Labs uses a structured process to move from
            discovery to launch without losing sight of the people, workflows,
            and results that matter.
          </SupportingCopy>
        </SectionHeader>
        {/* The timeline reveals as one unit — its connector lines join
            adjacent steps, so per-step staggering would tear the drawing. */}
        <Reveal variant="up">
          <ProcessTimeline steps={STEPS} />
        </Reveal>
        <Reveal variant="up" delay={120} className={styles.ctaRow}>
          <SecondaryButton variant="on-light" href="/process">
            See Our Process
          </SecondaryButton>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
