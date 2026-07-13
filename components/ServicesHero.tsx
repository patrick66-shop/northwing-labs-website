import SiteContainer from "./SiteContainer";
import SectionEyebrow from "./SectionEyebrow";
import CTAGroup from "./CTAGroup";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./ServicesHero.module.css";

type CTAAction = { label: string; href: string };

type ServicesHeroProps = {
  /** All content defaults to the services overview page (issue #16);
   * other copy-led inner pages (e.g. /process) pass their own. */
  headingId?: string;
  eyebrow?: string;
  heading?: string;
  copy?: string;
  primary?: CTAAction;
  secondary?: CTAAction;
  trust?: string;
};

/**
 * ServicesHero — copy-led centered hero for inner pages (GitHub issue
 * #16; the services page is the template instance): Midnight base,
 * quiet workflow-lines texture, blue radial glow, gold eyebrow. No
 * hero imagery — the homepage robot visual stays on the homepage.
 */
export default function ServicesHero({
  headingId = "services-hero-heading",
  eyebrow = "NORTHWING LABS SERVICES",
  heading = "Practical technology built around the way your business works.",
  copy = "NorthWing Labs helps growing small businesses replace manual work, disconnected tools, and operational bottlenecks with custom software, AI, automation, mobile apps, and SaaS solutions.",
  primary = { label: "Start a Conversation", href: "/contact" },
  secondary = { label: "Explore Our Services", href: "#what-we-build" },
  trust = "You do not need to know which technology to ask for. Start with the business problem, and we will help determine what makes sense.",
}: ServicesHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby={headingId}>
      <SiteContainer>
        <div className={styles.copy}>
          <Reveal variant="up">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 id={headingId} className={styles.headline}>
              {heading}
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className={styles.supporting}>{copy}</p>
          </Reveal>
          <Reveal variant="up" delay={240} className={styles.ctaRow}>
            <CTAGroup>
              <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
              <SecondaryButton variant="on-dark" href={secondary.href}>
                {secondary.label}
              </SecondaryButton>
            </CTAGroup>
          </Reveal>
          {trust ? (
            <Reveal variant="up" delay={300}>
              <p className={styles.trust}>{trust}</p>
            </Reveal>
          ) : null}
        </div>
      </SiteContainer>
    </section>
  );
}
