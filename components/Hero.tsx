import Image from "next/image";
import SiteContainer from "./SiteContainer";
import SectionEyebrow from "./SectionEyebrow";
import SectionHeading from "./SectionHeading";
import SupportingCopy from "./SupportingCopy";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import CTAGroup from "./CTAGroup";
import styles from "./Hero.module.css";

/**
 * Hero — homepage entry experience (HOMEPAGE-DESIGN-SPEC §6).
 * Dark two-column hero: copy left (42–45%), robot-at-whiteboard visual
 * right (55–58%), stacking copy-first on mobile. All copy is approved
 * production text from docs/WEBSITE-CONTENT.md — do not edit here.
 */
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <SiteContainer>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <SectionEyebrow>SOFTWARE • AI • AUTOMATION</SectionEyebrow>
            <SectionHeading as="h1" id="hero-heading" className={styles.headline}>
              <span className={styles.headlineLine}>Your business has outgrown spreadsheets.</span>{" "}
              <span className={`${styles.headlineLine} ${styles.headlineAccent}`}>
                Your systems should catch up.
              </span>
            </SectionHeading>
            <SupportingCopy size="large" className={styles.supporting}>
              NorthWing Labs replaces repetitive work, disconnected tools, and
              fragile spreadsheets with practical software, AI, and
              automation—so your team spends less time copying information,
              chasing follow-ups, and searching for answers, and more time
              serving customers and growing the business.
            </SupportingCopy>
            <CTAGroup className={styles.ctas}>
              <PrimaryButton href="/contact">Start a Conversation</PrimaryButton>
              <SecondaryButton variant="on-dark" href="/services">
                Explore Our Services
              </SecondaryButton>
            </CTAGroup>
          </div>
          <div className={styles.visual}>
            {/* Nested wrappers each carry one gradient mask (horizontal, then
                vertical) — masks intersect through nesting, blending the
                rectangular image edges into the hero background without
                mask-composite browser quirks. */}
            <div className={styles.visualFrame}>
              <Image
                src="/images/hero/northwing-hero-whiteboard-robot-visual.png"
                alt="Humanoid robot mapping a business workflow, system architecture, and business outcomes on a futuristic whiteboard."
                width={951}
                height={798}
                priority
                sizes="(min-width: 1024px) 56vw, (min-width: 768px) 54vw, 100vw"
                className={styles.visualImage}
              />
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
