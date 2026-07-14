import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./ServiceNarrative.module.css";

type ServiceNarrativeProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  /** Approved paragraphs, rendered in order — plain text or JSX with
   * contextual internal links. */
  paragraphs: React.ReactNode[];
  variant?: "light" | "tinted" | "dark";
  id?: string;
  /** Optional CTA rendered below the paragraphs (homepage teaser use). */
  cta?: { label: string; href: string };
};

/**
 * ServiceNarrative — text-only statement band for the service pages
 * (GitHub issue #22): eyebrow → heading → one or more approved
 * paragraphs, centered on the standard section header measure. For
 * approved copy that explains rather than enumerates — no cards.
 */
export default function ServiceNarrative({
  eyebrow,
  heading,
  headingId,
  paragraphs,
  variant = "tinted",
  id,
  cta,
}: ServiceNarrativeProps) {
  return (
    <SectionWrapper variant={variant} id={id} aria-labelledby={headingId}>
      <SiteContainer>
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          headingId={headingId}
          align="center"
          animate
        >
          {paragraphs.map((paragraph, index) => (
            <SupportingCopy key={index}>{paragraph}</SupportingCopy>
          ))}
        </SectionHeader>
        {cta ? (
          <Reveal variant="up" delay={120} className={styles.ctaRow}>
            <SecondaryButton
              variant={variant === "dark" ? "on-dark" : "on-light"}
              href={cta.href}
            >
              {cta.label}
            </SecondaryButton>
          </Reveal>
        ) : null}
      </SiteContainer>
    </SectionWrapper>
  );
}
