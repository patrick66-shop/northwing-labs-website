import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./ProblemChecklist.module.css";

/* Approved copy from GitHub issue #16 — do not edit. */
const PROBLEMS = [
  "Too much repetitive manual work",
  "Customer information is scattered",
  "Quotes, orders, or follow-up are delayed",
  "Existing tools do not work together",
  "The business lacks clear operational visibility",
  "A software product idea needs a practical path forward",
];

/* Gold check in a blue-tinted ring — the site's line-icon convention
   (24 grid / 1.8 stroke). Decorative. */
function CheckMark() {
  return (
    <span className={styles.mark} aria-hidden="true">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 12.5 4.8 4.8L19 7" />
      </svg>
    </span>
  );
}

/**
 * Problem recognition — services page section 2 (GitHub issue #16).
 * A quiet two-column checklist rather than another card grid: six
 * problem indicators a small-business owner can self-select against.
 */
export default function ProblemChecklist() {
  return (
    <SectionWrapper
      variant="light"
      id="start-with-the-problem"
      className={styles.section}
      aria-labelledby="problem-checklist-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="START WITH THE PROBLEM"
          heading="The right service depends on what is slowing your business down."
          headingId="problem-checklist-heading"
          align="center"
          animate
        >
          <SupportingCopy>
            Some businesses need a custom internal tool. Others need existing
            systems connected, repetitive tasks automated, an AI assistant, a
            mobile experience, or help turning a product idea into software.
            The best solution begins with understanding the workflow—not
            choosing technology first.
          </SupportingCopy>
        </SectionHeader>

        <ul className={styles.list}>
          {PROBLEMS.map((problem, index) => (
            <Reveal as="li" variant="up" delay={index * 70} key={problem}>
              <span className={styles.item}>
                <CheckMark />
                <span className={styles.itemText}>{problem}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
