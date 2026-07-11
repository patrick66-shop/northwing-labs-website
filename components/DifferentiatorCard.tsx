import styles from "./DifferentiatorCard.module.css";

export type DifferentiatorIconName =
  | "discovery"
  | "practical"
  | "collaboration"
  | "growth";

const FLIGHT_GOLD = "#edb743";

/* Restrained line icons on the site's 24px grid / 1.8 stroke convention
   (OutcomeIcon family), each carrying one small Flight Gold detail per
   GitHub issue #13. Decorative — the card titles carry the meaning. */
const GLYPHS: Record<DifferentiatorIconName, React.ReactNode> = {
  /* Business First: workflow nodes examined under a magnifying glass;
     the node in focus is the gold detail. */
  discovery: (
    <>
      <rect x="3" y="3" width="4.6" height="4.6" rx="1.2" />
      <path d="M7.6 5.3h4.3" />
      <circle cx="13.6" cy="5.3" r="1.7" />
      <path d="M5.3 7.6v3.2a2 2 0 0 0 2 2h1.1" />
      <circle cx="13" cy="13.8" r="4.6" />
      <path d="m16.4 17.2 3.6 3.6" />
      <circle cx="13" cy="13.8" r="1.7" stroke={FLIGHT_GOLD} />
    </>
  ),
  /* Practical by Design: simple system blocks; the fourth slot holds a
     gold checkmark — every piece earns its place. */
  practical: (
    <>
      <rect x="3.2" y="3.2" width="7" height="7" rx="1.6" />
      <rect x="3.2" y="13.8" width="7" height="7" rx="1.6" />
      <rect x="13.8" y="13.8" width="7" height="7" rx="1.6" />
      <path d="m14.4 6.6 2.3 2.3 4.1-4.7" stroke={FLIGHT_GOLD} />
    </>
  ),
  /* Built Collaboratively: two people leaning toward a shared gold
     workflow node — partnership, not a sales transaction. */
  collaboration: (
    <>
      <circle cx="7.6" cy="7" r="2.7" />
      <path d="M2.9 18.4c.8-3.2 2.6-4.9 4.7-4.9 1.3 0 2.4.6 3.2 1.8" />
      <circle cx="16.4" cy="7" r="2.7" />
      <path d="M21.1 18.4c-.8-3.2-2.6-4.9-4.7-4.9-1.3 0-2.4.6-3.2 1.8" />
      <circle cx="12" cy="17.8" r="2.1" stroke={FLIGHT_GOLD} />
    </>
  ),
  /* Designed to Grow: modular platform with an open slot and a gold
     upward path out of it. */
  growth: (
    <>
      <rect x="3" y="14.6" width="5.4" height="5.4" rx="1.3" />
      <rect x="9.8" y="14.6" width="5.4" height="5.4" rx="1.3" />
      <rect x="3" y="7.8" width="5.4" height="5.4" rx="1.3" />
      <path d="M12.4 11 19.6 3.8" stroke={FLIGHT_GOLD} />
      <path d="M14.9 3.8h4.7v4.7" stroke={FLIGHT_GOLD} />
    </>
  ),
};

type DifferentiatorCardProps = {
  title: string;
  /** Short lead sentence between the title and the supporting copy. */
  lead: string;
  icon: DifferentiatorIconName;
  children: React.ReactNode;
};

/**
 * DifferentiatorCard — one "Why NorthWing Labs" differentiator (GitHub
 * issue #13). Same light-card family as ProblemCard/AudienceCard with a
 * slightly richer resting shadow and a contained Flight Blue line icon,
 * for the section's more premium trust-building treatment.
 */
export default function DifferentiatorCard({
  title,
  lead,
  icon,
  children,
}: DifferentiatorCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.iconContainer} aria-hidden="true">
        <svg
          className={styles.icon}
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {GLYPHS[icon]}
        </svg>
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.lead}>{lead}</p>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
