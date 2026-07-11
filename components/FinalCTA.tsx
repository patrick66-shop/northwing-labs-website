import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import CTAGroup from "./CTAGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./FinalCTA.module.css";

/**
 * Final CTA — the homepage's closing conversion moment (chat-approved
 * spec, superseding docs/WEBSITE-CONTENT.md §10 copy). Dark Midnight
 * band with the approved blue radial glow, centered 760px content,
 * and the standard gold primary / outlined secondary pair.
 */
export default function FinalCTA() {
  return (
    <SectionWrapper
      variant="dark"
      id="final-cta"
      className={styles.section}
      aria-labelledby="final-cta-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="LET’S BUILD SOMETHING BETTER"
          heading="Let’s build software that helps your business grow."
          headingId="final-cta-heading"
          align="center"
          animate
          className={styles.header}
        >
          <SupportingCopy>
            Whether you need custom software, AI tools, workflow automation,
            or a new SaaS product, NorthWing Labs starts by understanding
            your business and designing the simplest solution that delivers
            real results.
          </SupportingCopy>
        </SectionHeader>

        <Reveal variant="up" delay={120} className={styles.ctaRow}>
          <CTAGroup>
            <PrimaryButton href="/contact">
              Start a Conversation →
            </PrimaryButton>
            <SecondaryButton variant="on-dark" href="/services">
              Explore Our Services
            </SecondaryButton>
          </CTAGroup>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
