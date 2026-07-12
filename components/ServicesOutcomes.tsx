import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import OutcomeCard from "./OutcomeCard";
import Reveal from "./Reveal";
import styles from "./ServicesOutcomes.module.css";

import type { OutcomeIconName } from "./OutcomeIcon";

/* Outcome titles are approved copy from GitHub issue #16 — do not edit.
   The one-line supporting sentences are new concise copy (the issue
   allows more concise wording here than the homepage section). */
const OUTCOMES: { title: string; icon: OutcomeIconName; copy: string }[] = [
  {
    title: "Less Manual Work",
    icon: "clock",
    copy: "Repetitive tasks get handled by the system instead of your team.",
  },
  {
    title: "Faster Customer Response",
    icon: "bolt",
    copy: "Quotes, answers, and follow-up go out in minutes, not days.",
  },
  {
    title: "Fewer Errors",
    icon: "shield-check",
    copy: "Information moves between systems without retyping or missed steps.",
  },
  {
    title: "Clearer Business Visibility",
    icon: "eye",
    copy: "Dashboards and reporting show what is actually happening.",
  },
  {
    title: "Better Customer and Team Experiences",
    icon: "people",
    copy: "Interacting with the business gets easier on both sides.",
  },
  {
    title: "Systems Ready to Support Growth",
    icon: "growth",
    copy: "More customers and more work without more administrative overhead.",
  },
];

/**
 * Business outcomes — services page section 6 (GitHub issue #16).
 * Reuses the homepage OutcomeCard system on the dark workflow-lines
 * band with the services-page heading and more concise copy.
 */
export default function ServicesOutcomes() {
  return (
    <SectionWrapper
      variant="dark"
      id="services-outcomes"
      className={styles.section}
      aria-labelledby="services-outcomes-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="WHAT BETTER SYSTEMS CREATE"
          heading="The value is not the technology. The value is what improves because of it."
          headingId="services-outcomes-heading"
          align="center"
          animate
          className={styles.header}
        />

        <ul className={styles.grid}>
          {OUTCOMES.map((outcome, index) => (
            <Reveal as="li" variant="up" delay={index * 90} key={outcome.title}>
              <OutcomeCard title={outcome.title} icon={outcome.icon}>
                {outcome.copy}
              </OutcomeCard>
            </Reveal>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
