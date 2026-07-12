import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./ServiceFitSteps.module.css";

/* Approved copy from GitHub issue #16 — do not edit. */
const STEPS = [
  {
    title: "Describe the Problem",
    copy: "Show us what takes too long, gets missed, creates confusion, or prevents the business from growing.",
  },
  {
    title: "Map the Workflow",
    copy: "We identify the people, information, systems, and decisions involved in the current process.",
  },
  {
    title: "Choose the Right Approach",
    copy: "We determine whether the need is best solved through automation, custom software, AI, mobile, SaaS, or a combination.",
  },
];

/**
 * Service-fit guidance — services page section 5 (GitHub issue #16).
 * A compact three-step connected flow in the homepage process language
 * (numbered Flight Blue nodes, gold final node, connector lines) —
 * deliberately not a duplicate of the full seven-step section.
 */
export default function ServiceFitSteps() {
  return (
    <SectionWrapper
      variant="light"
      id="service-fit"
      className={styles.section}
      aria-labelledby="service-fit-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="NOT SURE WHAT YOU NEED?"
          heading="You bring the business problem. We help define the right solution."
          headingId="service-fit-heading"
          align="center"
          animate
        >
          <SupportingCopy>
            NorthWing Labs begins by learning how the work is done today,
            where friction occurs, what tools are already in place, and what
            outcome matters most. From there, we recommend the simplest
            practical approach.
          </SupportingCopy>
        </SectionHeader>

        <ol className={styles.steps}>
          {STEPS.map((step, index) => (
            <Reveal as="li" variant="up" delay={index * 120} key={step.title}>
              <article className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepCopy}>{step.copy}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </SiteContainer>
    </SectionWrapper>
  );
}
