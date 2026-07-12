import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./ServiceComparison.module.css";

/* Situation → service chooser (chat-approved feedback on issue #16).
   Situations recap each card's best-fit framing in "sounds familiar"
   language; every row deep-links its future service-detail route. */
const MATCHES = [
  {
    situation:
      "Spreadsheets or generic software can no longer keep up with the workflow",
    service: "Custom Software",
    href: "/services/custom-software",
  },
  {
    situation:
      "Your team keeps searching for information or answering the same questions",
    service: "AI Tools",
    href: "/services/ai-tools",
  },
  {
    situation:
      "People copy information between systems, send routine updates, or chase follow-up by hand",
    service: "Business Automation",
    href: "/services/business-automation",
  },
  {
    situation:
      "Important work happens away from a desk, or customers need an easier way to interact",
    service: "Mobile Apps",
    href: "/services/mobile-apps",
  },
  {
    situation:
      "A software product idea needs to become something customers can use",
    service: "SaaS Development",
    href: "/services/saas-development",
  },
];

/**
 * Which Service Is Right? — services page chooser between the outcomes
 * band and the Final CTA. Each row is one accessible link pairing a
 * recognizable situation with the service built for it; a contact
 * fallback catches visitors who match more than one row.
 */
export default function ServiceComparison() {
  return (
    <SectionWrapper
      variant="tinted"
      id="which-service"
      aria-labelledby="which-service-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="WHICH SERVICE IS RIGHT?"
          heading="Find the service that matches your situation."
          headingId="which-service-heading"
          align="center"
          animate
        >
          <SupportingCopy>
            Every engagement starts with the problem, not the technology. Pick
            the row that sounds most familiar — and if more than one fits, we
            will help you decide where to begin.
          </SupportingCopy>
        </SectionHeader>

        <ul className={styles.rows}>
          {MATCHES.map((match, index) => (
            <Reveal as="li" variant="up" delay={index * 70} key={match.href}>
              <Link href={match.href} className={styles.row}>
                <span className={styles.situation}>{match.situation}</span>
                <span className={styles.service} aria-hidden="true">
                  {match.service}
                  <span className={styles.arrow}>→</span>
                </span>
                <span className={styles.srOnly}>
                  — explore {match.service}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="up" delay={120}>
          <p className={styles.fallback}>
            Still not sure?{" "}
            <Link href="/contact" className={styles.fallbackLink}>
              Start a conversation →
            </Link>
          </p>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
