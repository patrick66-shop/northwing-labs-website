import SiteContainer from "./SiteContainer";
import SectionEyebrow from "./SectionEyebrow";
import CTAGroup from "./CTAGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./ServiceDetailHero.module.css";

type CTAAction = { label: string; href: string };

type ServiceDetailHeroProps = {
  eyebrow: string;
  /** Visible H1 — the marketing headline for the service. */
  heading: string;
  copy: string;
  primary: CTAAction;
  secondary: CTAAction;
  /** Service illustration rendered in the right column on desktop,
   * below the copy on mobile. Decorative — pass aria-hidden SVG. */
  illustration: React.ReactNode;
};

/**
 * ServiceDetailHero — shared hero for the individual service pages
 * (GitHub issue #18; Custom Software is the template instance).
 * Two-column dark treatment on the established Midnight + network
 * texture + blue glow language: copy left, illustration right,
 * stacking copy-first on mobile.
 */
export default function ServiceDetailHero({
  eyebrow,
  heading,
  copy,
  primary,
  secondary,
  illustration,
}: ServiceDetailHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="service-hero-heading">
      <SiteContainer>
        <div className={styles.layout}>
          <div className={styles.copyColumn}>
            <Reveal variant="up">
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h1 id="service-hero-heading" className={styles.headline}>
                {heading}
              </h1>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p className={styles.supporting}>{copy}</p>
            </Reveal>
            <Reveal variant="up" delay={240}>
              <CTAGroup>
                <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
                <SecondaryButton variant="on-dark" href={secondary.href}>
                  {secondary.label}
                </SecondaryButton>
              </CTAGroup>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={200} className={styles.visualColumn}>
            {illustration}
          </Reveal>
        </div>
      </SiteContainer>
    </section>
  );
}
