import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./PlatformShowcase.module.css";

type PlatformShowcaseProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  /** Plain text or JSX — contextual internal links welcome. */
  copy?: React.ReactNode;
  /** Short emphasis line under the visual (e.g. "One connected
   * business platform."). */
  emphasis?: string;
  illustration: React.ReactNode;
};

/**
 * PlatformShowcase — dark showcase band for the service pages (GitHub
 * issue #18): centered header, large original illustration, and an
 * emphasis line. Same presentation language as the homepage case
 * study without reusing its artwork.
 */
export default function PlatformShowcase({
  eyebrow,
  heading,
  headingId,
  copy,
  emphasis,
  illustration,
}: PlatformShowcaseProps) {
  return (
    <SectionWrapper
      variant="dark"
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
          {copy ? <SupportingCopy>{copy}</SupportingCopy> : null}
        </SectionHeader>
        <Reveal variant="scale" className={styles.visual}>
          {illustration}
        </Reveal>
        {emphasis ? (
          <Reveal variant="up" delay={120}>
            <p className={styles.emphasis}>
              <span className={styles.emphasisRule} aria-hidden="true" />
              {emphasis}
            </p>
          </Reveal>
        ) : null}
      </SiteContainer>
    </SectionWrapper>
  );
}
