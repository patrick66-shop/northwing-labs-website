import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";

type ServiceNarrativeProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  /** Approved paragraphs, rendered in order — plain text or JSX with
   * contextual internal links. */
  paragraphs: React.ReactNode[];
  variant?: "light" | "tinted" | "dark";
  id?: string;
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
      </SiteContainer>
    </SectionWrapper>
  );
}
