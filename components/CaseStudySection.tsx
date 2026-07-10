import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import PrimaryButton from "./PrimaryButton";
import Reveal from "./Reveal";
import styles from "./CaseStudySection.module.css";

type ShowcaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CaseStudySectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  showcaseImage: ShowcaseImage;
  challenge: string;
  solution: string;
  businessOutcomes: string[];
  buttonText: string;
  buttonLink: string;
  /** Unique heading id when more than one case study appears on a page. */
  headingId?: string;
};

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      viewBox="0 0 24 24"
      width={22}
      height={22}
      aria-hidden="true"
      focusable="false"
    >
      <circle className={styles.checkRing} cx="12" cy="12" r="11" />
      <path className={styles.checkMark} d="M7.2 12.5l3.1 3.1 6.5-7" />
    </svg>
  );
}

/**
 * CaseStudySection — reusable homepage case study showcase
 * (GitHub issue #8). Dark Midnight section per the background rhythm
 * (HOMEPAGE-DESIGN-SPEC §24): centered header, large showcase image
 * with blue radial glow, three story cards (Challenge / Solution /
 * Business Outcomes checklist), and a centered primary CTA.
 * Not project-specific — future case studies reuse it via props.
 */
export default function CaseStudySection({
  eyebrow,
  title,
  description,
  showcaseImage,
  challenge,
  solution,
  businessOutcomes,
  buttonText,
  buttonLink,
  headingId = "case-study-heading",
}: CaseStudySectionProps) {
  return (
    <SectionWrapper
      variant="dark"
      className={styles.section}
      aria-labelledby={headingId}
    >
      <SiteContainer>
        <Reveal variant="up">
          <SectionHeader
            eyebrow={eyebrow}
            heading={title}
            headingId={headingId}
            align="center"
          >
            <SupportingCopy>{description}</SupportingCopy>
          </SectionHeader>
        </Reveal>

        <Reveal variant="scale" className={styles.showcase}>
          <Image
            src={showcaseImage.src}
            alt={showcaseImage.alt}
            width={showcaseImage.width}
            height={showcaseImage.height}
            sizes="(max-width: 1279px) 100vw, 1240px"
            className={styles.showcaseImage}
          />
        </Reveal>

        <ul className={styles.cards}>
          <Reveal as="li" variant="up">
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Challenge</h3>
              <p className={styles.cardCopy}>{challenge}</p>
            </article>
          </Reveal>
          <Reveal as="li" variant="up" delay={90}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Solution</h3>
              <p className={styles.cardCopy}>{solution}</p>
            </article>
          </Reveal>
          <Reveal as="li" variant="up" delay={180}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Business Outcomes</h3>
              <ul className={styles.outcomeList}>
                {businessOutcomes.map((outcome) => (
                  <li key={outcome} className={styles.outcomeItem}>
                    <CheckIcon />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </ul>

        <Reveal variant="up" delay={120} className={styles.ctaRow}>
          <PrimaryButton href={buttonLink}>{buttonText}</PrimaryButton>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
