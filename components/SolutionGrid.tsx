import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import SecondaryButton from "./SecondaryButton";
import Reveal from "./Reveal";
import styles from "./SolutionGrid.module.css";

export type SolutionItem = {
  /** Approved solution category title. */
  title: string;
  /** The problem in the owner's words. */
  problem: string;
  /** The one-line "what changes" outcome. */
  outcome: string;
  /** Services this problem usually leads to. */
  links: { label: string; href: string }[];
};

type SolutionGridProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  copy?: string;
  solutions: SolutionItem[];
  id?: string;
  /** Label before each card's outcome line. */
  outcomeLabel?: string;
  /** Label before each card's service links. */
  linksLabel?: string;
  /** Set false to omit each card's service-routing links (homepage teaser use). */
  showLinks?: boolean;
  /** Optional CTA rendered below the grid (homepage teaser use). */
  cta?: { label: string; href: string };
  variant?: "light" | "tinted" | "dark";
};

/**
 * SolutionGrid — the problem-first solution cards for the Solutions
 * page (SITEMAP §5): each card states a business problem in the
 * owner's words, the one-line change, and the services it usually
 * leads to. Two-up on desktop, single column on mobile.
 */
export default function SolutionGrid({
  eyebrow,
  heading,
  headingId,
  copy,
  solutions,
  id,
  outcomeLabel = "What changes",
  linksLabel = "Where it usually leads",
  showLinks = true,
  cta,
  variant = "light",
}: SolutionGridProps) {
  return (
    <SectionWrapper variant={variant} id={id} aria-labelledby={headingId}>
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
        <ul className={styles.grid}>
          {solutions.map((solution, index) => (
            <Reveal as="li" variant="up" delay={index * 70} key={solution.title}>
              <article className={styles.card}>
                <h3 className={styles.title}>{solution.title}</h3>
                <p className={styles.problem}>{solution.problem}</p>
                <p className={styles.outcome}>
                  <span className={styles.outcomeLabel}>{outcomeLabel}:</span>{" "}
                  {solution.outcome}
                </p>
                {showLinks ? (
                  <p className={styles.links}>
                    <span className={styles.linksLabel}>{linksLabel}:</span>
                    {solution.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={styles.link}
                      >
                        {link.label}
                        <span className={styles.linkArrow} aria-hidden="true">
                          →
                        </span>
                      </Link>
                    ))}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </ul>
        {cta ? (
          <Reveal variant="up" delay={120} className={styles.ctaRow}>
            <SecondaryButton variant="on-light" href={cta.href}>
              {cta.label}
            </SecondaryButton>
          </Reveal>
        ) : null}
      </SiteContainer>
    </SectionWrapper>
  );
}
