import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import OutcomeCard from "./OutcomeCard";
import styles from "./BusinessOutcomes.module.css";

/* Approved production copy from docs/WEBSITE-CONTENT.md §5 — do not edit. */
const OUTCOMES = [
  {
    title: "Save Time",
    copy: "Reduce repetitive work and give people more time for higher-value tasks.",
  },
  {
    title: "Respond Faster",
    copy: "Improve how quickly customers receive quotes, answers, updates, and follow-up.",
  },
  {
    title: "Reduce Errors",
    copy: "Replace fragile manual steps with consistent workflows and connected systems.",
  },
  {
    title: "Improve Visibility",
    copy: "Turn scattered information into useful dashboards, alerts, and operational views.",
  },
  {
    title: "Create Better Experiences",
    copy: "Make it easier for customers and employees to interact with the business.",
  },
  {
    title: "Support Growth",
    copy: "Build systems that can handle more customers, more work, and more complexity.",
  },
];

/**
 * Business Outcomes — homepage section 5 (HOMEPAGE-DESIGN-SPEC §9).
 * Dark Midnight section with the approved workflow-lines overlay at low
 * opacity; 3×2 outcome grid (2 columns tablet, 1 column mobile).
 */
export default function BusinessOutcomes() {
  return (
    <SectionWrapper
      variant="dark"
      className={styles.section}
      aria-labelledby="outcomes-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="WHAT CHANGES"
          heading="Better systems create better businesses."
          headingId="outcomes-heading"
        >
          <SupportingCopy>
            The value of technology is not the software itself. The value is
            what becomes easier, faster, clearer, and more reliable because of
            it.
          </SupportingCopy>
        </SectionHeader>
        <ul className={styles.grid}>
          {OUTCOMES.map((outcome) => (
            <li key={outcome.title}>
              <OutcomeCard title={outcome.title}>{outcome.copy}</OutcomeCard>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
