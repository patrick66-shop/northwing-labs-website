import Link from "next/link";
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
  /** Cross-service footnote link under the emphasis line (e.g. "Need
   * more than an AI assistant? Explore Custom Software →"). */
  footnote?: { prompt: string; label: string; href: string };
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
  footnote,
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
        {footnote ? (
          <Reveal variant="up" delay={160}>
            <p className={styles.footnote}>
              {footnote.prompt}{" "}
              <Link href={footnote.href} className={styles.footnoteLink}>
                {footnote.label}
                <span className={styles.footnoteArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </p>
          </Reveal>
        ) : null}
      </SiteContainer>
    </SectionWrapper>
  );
}
