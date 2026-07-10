import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import ProblemCard from "./ProblemCard";
import styles from "./ProblemRecognition.module.css";

/* Approved production copy from docs/WEBSITE-CONTENT.md §3 — do not edit. */
const PROBLEMS = [
  {
    title: "Repetitive Manual Work",
    copy: "Your team spends too much time copying information, updating spreadsheets, sending follow-ups, and repeating the same routine tasks.",
  },
  {
    title: "Disconnected Systems",
    copy: "Customer information, orders, files, schedules, and communication live in separate places that do not work together.",
  },
  {
    title: "Slow Customer Response",
    copy: "Important requests, quotes, updates, and follow-ups depend on manual action and can easily be delayed.",
  },
  {
    title: "Limited Visibility",
    copy: "You have data, but not a clear view of what is happening across the business.",
  },
];

/**
 * Problem Recognition — homepage section 3 (HOMEPAGE-DESIGN-SPEC §7).
 * Light technical background, 2×2 problem card grid (1 column mobile).
 */
export default function ProblemRecognition() {
  return (
    <SectionWrapper
      variant="light"
      className={styles.section}
      aria-labelledby="problems-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="WHEN BUSINESS OUTGROWS THE PROCESS"
          heading="The problem is not always the business. Sometimes it is the system behind it."
          headingId="problems-heading"
        >
          <SupportingCopy>
            Small businesses often reach a point where spreadsheets,
            disconnected tools, repetitive tasks, and manual follow-up start
            slowing everything down.
          </SupportingCopy>
          <SupportingCopy>
            NorthWing Labs helps identify where the friction is and builds
            practical systems to remove it.
          </SupportingCopy>
        </SectionHeader>
        <ul className={styles.grid}>
          {PROBLEMS.map((problem) => (
            <li key={problem.title}>
              <ProblemCard title={problem.title}>{problem.copy}</ProblemCard>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
