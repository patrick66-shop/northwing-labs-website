import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import CTAGroup from "./CTAGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./FinalCTA.module.css";

type CTAAction = {
  label: string;
  href: string;
};

type FinalCTAProps = {
  /** All copy defaults to the approved homepage version (chat-approved
   * spec); inner pages pass their own approved variants. */
  eyebrow?: string;
  heading?: string;
  /** One paragraph, or several rendered as separate paragraphs. */
  copy?: string | string[];
  primary?: CTAAction;
  secondary?: CTAAction;
  /** Optional friction-reducing line between the supporting copy and
   * the CTA buttons (services page UX polish). */
  reassurance?: string;
};

/**
 * Final CTA — the closing conversion moment (chat-approved spec,
 * superseding docs/WEBSITE-CONTENT.md §10 copy). Dark Midnight band
 * with the approved blue radial glow, centered 760px content, and the
 * standard gold primary / outlined secondary pair. Reused across pages
 * with per-page copy via props.
 */
export default function FinalCTA({
  eyebrow = "LET’S BUILD SOMETHING BETTER",
  heading = "Let’s build software that helps your business grow.",
  copy = "Whether you need custom software, AI tools, workflow automation, or a new SaaS product, NorthWing Labs starts by understanding your business and designing the simplest solution that delivers real results.",
  primary = { label: "Start a Conversation →", href: "/contact" },
  secondary = { label: "Explore Our Services", href: "/services" },
  reassurance,
}: FinalCTAProps) {
  return (
    <SectionWrapper
      variant="dark"
      id="final-cta"
      className={styles.section}
      aria-labelledby="final-cta-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          headingId="final-cta-heading"
          align="center"
          animate
          className={styles.header}
        >
          {(Array.isArray(copy) ? copy : [copy]).map((paragraph) => (
            <SupportingCopy key={paragraph}>{paragraph}</SupportingCopy>
          ))}
        </SectionHeader>

        {reassurance ? (
          <Reveal variant="up" delay={100}>
            <p className={styles.reassurance}>{reassurance}</p>
          </Reveal>
        ) : null}
        <Reveal variant="up" delay={120} className={styles.ctaRow}>
          <CTAGroup>
            <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
            <SecondaryButton variant="on-dark" href={secondary.href}>
              {secondary.label}
            </SecondaryButton>
          </CTAGroup>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
