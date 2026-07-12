import SiteContainer from "./SiteContainer";
import SectionEyebrow from "./SectionEyebrow";
import CTAGroup from "./CTAGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./ServicesHero.module.css";

/**
 * Services page hero (GitHub issue #16) — copy-led centered composition
 * on the established dark treatment: Midnight base, quiet workflow-lines
 * texture, blue radial glow, gold eyebrow. No hero imagery — the
 * homepage robot visual stays on the homepage.
 */
export default function ServicesHero() {
  return (
    <section className={styles.hero} aria-labelledby="services-hero-heading">
      <SiteContainer>
        <div className={styles.copy}>
          <Reveal variant="up">
            <SectionEyebrow>NORTHWING LABS SERVICES</SectionEyebrow>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 id="services-hero-heading" className={styles.headline}>
              Practical technology built around the way your business works.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className={styles.supporting}>
              NorthWing Labs helps growing small businesses replace manual
              work, disconnected tools, and operational bottlenecks with
              custom software, AI, automation, mobile apps, and SaaS
              solutions.
            </p>
          </Reveal>
          <Reveal variant="up" delay={240} className={styles.ctaRow}>
            <CTAGroup>
              <PrimaryButton href="/contact">
                Start a Conversation
              </PrimaryButton>
              <SecondaryButton variant="on-dark" href="#what-we-build">
                Explore Our Services
              </SecondaryButton>
            </CTAGroup>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <p className={styles.trust}>
              You do not need to know which technology to ask for. Start with
              the business problem, and we will help determine what makes
              sense.
            </p>
          </Reveal>
        </div>
      </SiteContainer>
    </section>
  );
}
