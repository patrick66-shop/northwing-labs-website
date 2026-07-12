/* Showcase illustration for the SaaS Development page: one product
   platform serving every customer their own secure workspace — with
   subscriptions and growth working from launch. Same presentation
   language as the other service-page showcase artwork. Decorative:
   the section copy carries the meaning. */

const RAMP = {
  panel: "#e8f1fc",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
  gold: "#edb743",
};

/* One customer workspace card. Coordinates are the card's top-left. */
function WorkspaceCard({
  x,
  y,
  accent,
}: {
  x: number;
  y: number;
  accent: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width="188" height="118" rx="10" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx={x + 22} cy={y + 22} r="8" fill={accent} />
      <rect x={x + 38} y={y + 17} width="76" height="9" rx="4.5" fill={RAMP.soft} />
      {/* lock: each workspace sees only its own data */}
      <rect x={x + 156} y={y + 16} width="16" height="12" rx="3" stroke={accent} strokeWidth="1.6" />
      <path d={`M${x + 159} ${y + 16}v-3a5 5 0 0 1 10 0v3`} stroke={accent} strokeWidth="1.6" />
      <rect x={x + 14} y={y + 42} width="160" height="14" rx="4" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1" />
      <rect x={x + 14} y={y + 62} width="160" height="14" rx="4" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1" />
      <rect x={x + 14} y={y + 86} width="70" height="16" rx="8" fill={accent} opacity="0.9" />
      <rect x={x + 92} y={y + 90} width="60" height="7" rx="3.5" fill={RAMP.panelStroke} />
    </g>
  );
}

export default function MultiTenantIllustration() {
  return (
    <svg
      viewBox="0 0 960 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mtScreen" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#12315e" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <linearGradient id="mtBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
      </defs>

      {/* ground shadows */}
      <ellipse cx="300" cy="416" rx="180" ry="12" fill="#020a1e" opacity="0.3" />
      <ellipse cx="770" cy="416" rx="150" ry="12" fill="#020a1e" opacity="0.3" />

      {/* --- the platform: one product --- */}
      <rect x="150" y="44" width="300" height="352" rx="14" fill="url(#mtScreen)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <path d="M150 78h300" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      <circle cx="170" cy="61" r="4" fill={RAMP.soft} opacity="0.8" />
      <circle cx="183" cy="61" r="4" fill={RAMP.soft} opacity="0.5" />
      <rect x="200" y="54" width="150" height="14" rx="7" fill="rgba(127,176,232,0.18)" />
      <rect x="212" y="59" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.35)" />
      <circle cx="428" cy="61" r="5" fill={RAMP.gold} opacity="0.9" />
      {/* product identity */}
      <circle cx="186" cy="104" r="10" fill="url(#mtBadge)" />
      <rect x="204" y="99" width="96" height="9" rx="4.5" fill="rgba(255,255,255,0.45)" />
      {/* module blocks */}
      <rect x="170" y="126" width="126" height="64" rx="8" fill="rgba(127,176,232,0.14)" stroke="rgba(127,176,232,0.3)" strokeWidth="1" />
      <rect x="182" y="138" width="60" height="7" rx="3.5" fill="rgba(255,255,255,0.4)" />
      <rect x="182" y="154" width="102" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
      <rect x="182" y="168" width="84" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
      <rect x="304" y="126" width="126" height="64" rx="8" fill="rgba(127,176,232,0.14)" stroke="rgba(127,176,232,0.3)" strokeWidth="1" />
      <rect x="316" y="138" width="66" height="7" rx="3.5" fill="rgba(255,255,255,0.4)" />
      <rect x="316" y="154" width="102" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
      <rect x="316" y="168" width="72" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
      {/* subscriptions band */}
      <rect x="170" y="202" width="260" height="56" rx="8" fill="rgba(237,183,67,0.12)" stroke={RAMP.gold} strokeWidth="1" />
      <rect x="184" y="216" width="46" height="12" rx="6" fill="url(#mtBadge)" />
      <rect x="184" y="236" width="90" height="7" rx="3.5" fill="rgba(255,255,255,0.35)" />
      <path d="M400 216a11 11 0 1 0 5 10" stroke={RAMP.gold} strokeWidth="2" strokeLinecap="round" />
      <path d="m401 211 4.5 5.5-6.5 2" stroke={RAMP.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="300" y="216" width="72" height="7" rx="3.5" fill={RAMP.gold} opacity="0.75" />
      <rect x="300" y="232" width="56" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
      {/* growth chart */}
      <rect x="170" y="270" width="260" height="106" rx="8" fill="rgba(127,176,232,0.1)" stroke="rgba(127,176,232,0.25)" strokeWidth="1" />
      <rect x="184" y="282" width="70" height="7" rx="3.5" fill="rgba(255,255,255,0.4)" />
      <rect x="188" y="330" width="26" height="34" rx="4" fill="rgba(127,176,232,0.35)" />
      <rect x="224" y="318" width="26" height="46" rx="4" fill="rgba(127,176,232,0.5)" />
      <rect x="260" y="324" width="26" height="40" rx="4" fill="rgba(127,176,232,0.4)" />
      <rect x="296" y="304" width="26" height="60" rx="4" fill={RAMP.gold} opacity="0.75" />
      <path d="m336 342 26-22 20 10 32-26" stroke={RAMP.bright} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M398 304h16v16" stroke={RAMP.bright} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* --- customer workspaces, each its own --- */}
      <WorkspaceCard x={620} y={58} accent={RAMP.bright} />
      <WorkspaceCard x={680} y={196} accent={RAMP.primary} />
      <WorkspaceCard x={620} y={306} accent={RAMP.gold} />

      {/* connectors: one platform → every workspace */}
      <path d="M450 128c70-6 110-6 168-8" stroke={RAMP.panelStroke} strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
      <path d="M450 232c80 6 130 10 228 16" stroke={RAMP.panelStroke} strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
      <path d="M450 340c60 8 100 12 168 18" stroke={RAMP.panelStroke} strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />

      {/* gold sparks */}
      <path d="m92 108 2.2 5.2 5.2 2.2-5.2 2.2-2.2 5.2-2.2-5.2-5.2-2.2 5.2-2.2 2.2-5.2z" fill={RAMP.gold} opacity="0.85" />
      <circle cx="540" cy="60" r="4" fill={RAMP.soft} opacity="0.5" />
      <circle cx="80" cy="330" r="4" fill={RAMP.soft} opacity="0.5" />
    </svg>
  );
}
