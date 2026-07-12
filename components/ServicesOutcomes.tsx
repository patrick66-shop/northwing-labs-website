import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import OutcomeCard from "./OutcomeCard";
import Reveal from "./Reveal";
import styles from "./ServicesOutcomes.module.css";

import type { OutcomeIconName } from "./OutcomeIcon";

export type OutcomeItem = { title: string; icon: OutcomeIconName; copy: string };

/* Outcome titles are approved copy from GitHub issue #16 — do not edit.
   The one-line supporting sentences are new concise copy (the issue
   allows more concise wording here than the homepage section). */
const SERVICES_PAGE_OUTCOMES: OutcomeItem[] = [
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

type ServicesOutcomesProps = {
  /** All content defaults to the services overview page (issue #16);
   * the service-detail pages pass their own (issue #18). */
  eyebrow?: string;
  heading?: string;
  headingId?: string;
  copy?: string;
  outcomes?: OutcomeItem[];
};

/**
 * Business outcomes — dark outcome band shared by the services pages
 * (GitHub issues #16 and #18). Reuses the homepage OutcomeCard system
 * on the workflow-lines band with per-page copy via props.
 */
export default function ServicesOutcomes({
  eyebrow = "WHAT BETTER SYSTEMS CREATE",
  heading = "The value is not the technology. The value is what improves because of it.",
  headingId = "services-outcomes-heading",
  copy = "Whatever the service, every NorthWing Labs solution is designed around the improvements it creates in day-to-day operations.",
  outcomes = SERVICES_PAGE_OUTCOMES,
}: ServicesOutcomesProps) {
  return (
    <SectionWrapper
      variant="dark"
      id="services-outcomes"
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
          className={styles.header}
        >
          <SupportingCopy>{copy}</SupportingCopy>
        </SectionHeader>

        <ul className={styles.grid}>
          {outcomes.map((outcome, index) => (
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
