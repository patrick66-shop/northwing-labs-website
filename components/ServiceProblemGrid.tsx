import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import ProblemCard from "./ProblemCard";
import Reveal from "./Reveal";
import styles from "./ServiceProblemGrid.module.css";

type ServiceProblemGridProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  /** One paragraph, or several rendered as separate paragraphs. */
  copy?: string | string[];
  problems: { title: string; copy: string }[];
};

/**
 * ServiceProblemGrid — "why this service" problem recognition for the
 * individual service pages (GitHub issue #18). Reuses the homepage
 * ProblemCard on the light texture band; 3 / 2 / 1 columns.
 */
export default function ServiceProblemGrid({
  eyebrow,
  heading,
  headingId,
  copy,
  problems,
}: ServiceProblemGridProps) {
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
          {copy
            ? (Array.isArray(copy) ? copy : [copy]).map((paragraph) => (
                <SupportingCopy key={paragraph}>{paragraph}</SupportingCopy>
              ))
            : null}
        </SectionHeader>
        <ul
          className={[styles.grid, problems.length === 4 ? styles.gridTwoUp : ""]
            .filter(Boolean)
            .join(" ")}
        >
          {problems.map((problem, index) => (
            <Reveal as="li" variant="up" delay={index * 80} key={problem.title}>
              <ProblemCard title={problem.title}>{problem.copy}</ProblemCard>
            </Reveal>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
