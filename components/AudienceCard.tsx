import styles from "./AudienceCard.module.css";

export type AudienceIconName = "service" | "trades" | "product";

/* Restrained single-weight line icons on the shared 24px grid with the
   same 1.8 stroke as OutcomeIcon, so both families read at identical
   visual weight. Decorative — the card titles carry the meaning. */
const PATHS: Record<AudienceIconName, React.ReactNode> = {
  /* clipboard holding a customer roster — people + proposals + scheduling */
  service: (
    <>
      <path d="M8.6 4.4H7a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.4a2 2 0 0 0-2-2h-1.6" />
      <rect x="8.6" y="2.8" width="6.8" height="3.2" rx="1.1" />
      <circle cx="12" cy="11.2" r="2.2" />
      <path d="M8.7 17.6c.6-2.1 1.8-3.2 3.3-3.2s2.7 1.1 3.3 3.2" />
    </>
  ),
  /* blueprint floor plan with a drafted detail — plans + build workflow */
  trades: (
    <>
      <rect x="3.2" y="4.2" width="17.6" height="15.6" rx="2" />
      <path d="M3.2 12.6h6.2v7.2" />
      <path d="M14.6 4.2v5h6.2" />
      <circle cx="15.6" cy="14.8" r="2.2" />
    </>
  ),
  /* sealed parcel — inventory, orders, production */
  product: (
    <>
      <path d="M12 2.8 20 7.3v9.4L12 21.2 4 16.7V7.3L12 2.8z" />
      <path d="m4 7.3 8 4.5 8-4.5" />
      <path d="M12 11.8v9.4" />
    </>
  ),
};

function AudienceIcon({ name }: { name: AudienceIconName }) {
  return (
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
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

type AudienceCardProps = {
  title: string;
  icon: AudienceIconName;
  /** Business types the card speaks to, rendered as one muted line. */
  examples: string[];
  children: React.ReactNode;
};

/**
 * AudienceCard — one "Who We Work With" audience (GitHub issue #11).
 * Same light-card family as ProblemCard/ServiceCard: Wing White surface,
 * Cloud Gray border, Flight Blue line icon, slight hover lift.
 */
export default function AudienceCard({
  title,
  icon,
  examples,
  children,
}: AudienceCardProps) {
  return (
    <article className={styles.card}>
      <AudienceIcon name={icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.examples}>{examples.join(" · ")}</p>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
