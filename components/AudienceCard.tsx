import styles from "./AudienceCard.module.css";

export type AudienceIconName = "service" | "trades" | "product";

/* Premium layered illustrations (refinement pass on issue #11): each
   icon composes a light back panel, a gradient Flight Blue foreground
   object, and a small badge, with a soft ground shadow for depth —
   echoing the dimensional look of the Services icons while staying
   crisp, transparent, and zero-asset as inline SVG. All three share
   the 64px grid, the same blue ramp, and consistent stroke weights.
   Decorative — the card titles carry the meaning. */

const BLUE_RAMP = {
  panel: "#e3eefb",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
};

/* CRM contact card over a calendar, linked by workflow nodes. */
function ServiceIllustration() {
  return (
    <svg className={styles.icon} width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="nwSvcCard" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={BLUE_RAMP.bright} />
          <stop offset="1" stopColor={BLUE_RAMP.deep} />
        </linearGradient>
      </defs>
      {/* calendar */}
      <rect x="22" y="6" width="36" height="30" rx="5" fill={BLUE_RAMP.panel} stroke={BLUE_RAMP.panelStroke} strokeWidth="1.5" />
      <path d="M22 16v-5a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v5z" fill="#b7d6f5" />
      <path d="M30 3.5v5M50 3.5v5" stroke={BLUE_RAMP.primary} strokeWidth="2.4" strokeLinecap="round" />
      <g fill={BLUE_RAMP.soft}>
        <circle cx="30" cy="23" r="1.8" />
        <circle cx="38" cy="23" r="1.8" />
        <circle cx="46" cy="23" r="1.8" />
        <circle cx="52" cy="23" r="1.8" />
        <circle cx="30" cy="29" r="1.8" />
        <circle cx="38" cy="29" r="1.8" />
      </g>
      <circle cx="46" cy="29" r="2.6" fill={BLUE_RAMP.primary} />
      {/* ground shadow + CRM contact card */}
      <ellipse cx="23" cy="53.5" rx="15" ry="2.4" fill="#0b1e42" opacity="0.08" />
      <rect x="6" y="22" width="34" height="30" rx="6" fill="url(#nwSvcCard)" />
      <path d="M9.5 24.6h27" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16.5" cy="33" r="4.4" fill="#fff" opacity="0.95" />
      <path
        d="M10.6 45.2c1-4.4 3.2-6.6 5.9-6.6s4.9 2.2 5.9 6.6a1 1 0 0 1-1 1.2h-9.8a1 1 0 0 1-1-1.2z"
        fill="#fff"
        opacity="0.95"
      />
      <rect x="26.5" y="30" width="9" height="2.6" rx="1.3" fill="#fff" opacity="0.9" />
      <rect x="26.5" y="35" width="6.5" height="2.6" rx="1.3" fill="#fff" opacity="0.55" />
      {/* workflow nodes */}
      <path d="M40 46h7" stroke={BLUE_RAMP.panelStroke} strokeWidth="2" />
      <circle cx="49.5" cy="46" r="2.8" fill="#fff" stroke={BLUE_RAMP.primary} strokeWidth="2" />
      <path d="M52.5 46h4" stroke={BLUE_RAMP.panelStroke} strokeWidth="2" />
      <circle cx="59" cy="46" r="3.4" fill="url(#nwSvcCard)" />
    </svg>
  );
}

/* Clipboard checklist over a blueprint, with a hard-hat badge. */
function TradesIllustration() {
  return (
    <svg className={styles.icon} width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="nwTrdBlueprint" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#1178e2" />
          <stop offset="1" stopColor="#0a3f8f" />
        </linearGradient>
        <linearGradient id="nwTrdBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={BLUE_RAMP.bright} />
          <stop offset="1" stopColor={BLUE_RAMP.deep} />
        </linearGradient>
      </defs>
      {/* blueprint sheet */}
      <rect x="20" y="7" width="38" height="28" rx="3.5" fill="url(#nwTrdBlueprint)" />
      <path
        d="M37 13.5h14M45 13.5v9h6"
        stroke="rgba(255, 255, 255, 0.75)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="37" y="26" width="8" height="5.5" rx="1" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.4" fill="none" />
      <circle cx="52.5" cy="28.5" r="2.6" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="1.4" fill="none" />
      {/* ground shadow + clipboard */}
      <ellipse cx="19" cy="53.5" rx="12" ry="2.4" fill="#0b1e42" opacity="0.08" />
      <rect x="6" y="16" width="26" height="36" rx="4.5" fill="#e8f1fc" stroke={BLUE_RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="12.5" y="12.5" width="13" height="7" rx="2.5" fill="url(#nwTrdBadge)" />
      <path d="m11.5 30 2.6 2.6 4.6-5.2" stroke={BLUE_RAMP.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 30.5h5.5" stroke={BLUE_RAMP.soft} strokeWidth="2.2" strokeLinecap="round" />
      <path d="m11.5 40 2.6 2.6 4.6-5.2" stroke={BLUE_RAMP.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 40.5h5.5" stroke={BLUE_RAMP.soft} strokeWidth="2.2" strokeLinecap="round" />
      {/* hard-hat badge */}
      <circle cx="44" cy="45" r="10.5" fill="url(#nwTrdBadge)" />
      <path d="M37.8 47.2c0-3.9 2.8-6.8 6.2-6.8s6.2 2.9 6.2 6.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M36.8 47.2h14.4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 40.4v-2.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Dimensional parcel in front of a dashboard, with a production gear. */
function ProductIllustration() {
  return (
    <svg className={styles.icon} width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="nwPrdBox" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={BLUE_RAMP.bright} />
          <stop offset="1" stopColor={BLUE_RAMP.primary} />
        </linearGradient>
        <linearGradient id="nwPrdBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={BLUE_RAMP.bright} />
          <stop offset="1" stopColor={BLUE_RAMP.deep} />
        </linearGradient>
      </defs>
      {/* dashboard */}
      <rect x="20" y="6" width="38" height="26" rx="4" fill={BLUE_RAMP.panel} stroke={BLUE_RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="26" y="20" width="4.5" height="7" rx="1" fill={BLUE_RAMP.soft} />
      <rect x="33.5" y="16" width="4.5" height="11" rx="1" fill={BLUE_RAMP.primary} />
      <rect x="41" y="12" width="4.5" height="15" rx="1" fill={BLUE_RAMP.bright} />
      <rect x="48.5" y="18" width="4.5" height="9" rx="1" fill={BLUE_RAMP.soft} />
      {/* ground shadow + parcel (light top, gradient left, deep right) */}
      <ellipse cx="20" cy="55.5" rx="13" ry="2.4" fill="#0b1e42" opacity="0.08" />
      <path d="M20 26 34 32.4 20 38.8 6 32.4z" fill="#5ea3e8" />
      <path d="M34 32.4v15.2L20 54V38.8z" fill={BLUE_RAMP.deep} />
      <path d="M6 32.4v15.2L20 54V38.8z" fill="url(#nwPrdBox)" />
      <path d="m13 29.2 14 6.4" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M27 35.6v15.2" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2.2" strokeLinecap="round" />
      {/* production gear badge */}
      <circle cx="50" cy="45" r="10" fill="url(#nwPrdBadge)" />
      <circle cx="50" cy="45" r="3.1" stroke="#fff" strokeWidth="2.2" fill="none" />
      <path
        d="M55.2 45h2M42.8 45h2M50 39.8v-2M50 50.2v2M53.7 41.3l1.4-1.4M46.3 41.3l-1.4-1.4M53.7 48.7l1.4 1.4M46.3 48.7l-1.4 1.4"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ILLUSTRATIONS: Record<AudienceIconName, () => React.ReactElement> = {
  service: ServiceIllustration,
  trades: TradesIllustration,
  product: ProductIllustration,
};

type AudienceCardProps = {
  title: string;
  icon: AudienceIconName;
  /** Business types the card speaks to, rendered as one muted line. */
  examples: string[];
  children: React.ReactNode;
};

/**
 * AudienceCard — one "Who We Work With" audience (GitHub issue #11 +
 * refinement pass). Same light-card family as ProblemCard/ServiceCard:
 * Wing White surface, Cloud Gray border, slight hover lift, with a
 * layered Flight Blue illustration and a problem-focused description.
 */
export default function AudienceCard({
  title,
  icon,
  examples,
  children,
}: AudienceCardProps) {
  const Illustration = ILLUSTRATIONS[icon];
  return (
    <article className={styles.card}>
      <Illustration />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.examples}>{examples.join(" · ")}</p>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
