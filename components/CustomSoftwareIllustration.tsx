/* Hero illustration for the Custom Software page (GitHub issue #18):
   a dashboard interface with a connected workflow strip and satellite
   system panels, drawn in the established layered illustration style —
   light tint panels, gradient Flight Blue objects, restrained gold
   details, soft ground shadows (see AudienceCard for the recipe).
   Decorative: the hero copy carries the meaning. */

const RAMP = {
  panel: "#e8f1fc",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
  gold: "#edb743",
};

export default function CustomSoftwareIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="csHeroScreen" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#12315e" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <linearGradient id="csHeroBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
        <linearGradient id="csHeroBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="280" cy="392" rx="220" ry="16" fill="#020a1e" opacity="0.35" />

      {/* --- main dashboard window --- */}
      <rect x="70" y="40" width="330" height="240" rx="14" fill="url(#csHeroScreen)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      {/* window chrome */}
      <path d="M70 72h330" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      <circle cx="92" cy="56" r="4" fill={RAMP.soft} opacity="0.7" />
      <circle cx="108" cy="56" r="4" fill={RAMP.soft} opacity="0.45" />
      <circle cx="124" cy="56" r="4" fill={RAMP.gold} opacity="0.8" />
      {/* sidebar */}
      <rect x="86" y="88" width="66" height="176" rx="8" fill="rgba(127,176,232,0.12)" />
      <rect x="96" y="100" width="46" height="7" rx="3.5" fill={RAMP.bright} />
      <rect x="96" y="118" width="46" height="7" rx="3.5" fill="rgba(255,255,255,0.28)" />
      <rect x="96" y="136" width="46" height="7" rx="3.5" fill="rgba(255,255,255,0.28)" />
      <rect x="96" y="154" width="46" height="7" rx="3.5" fill="rgba(255,255,255,0.28)" />
      {/* KPI tiles */}
      <rect x="166" y="88" width="102" height="44" rx="8" fill="rgba(127,176,232,0.14)" />
      <rect x="176" y="98" width="40" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      <rect x="176" y="112" width="58" height="10" rx="4" fill={RAMP.bright} />
      <rect x="282" y="88" width="102" height="44" rx="8" fill="rgba(127,176,232,0.14)" />
      <rect x="292" y="98" width="40" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      <rect x="292" y="112" width="46" height="10" rx="4" fill={RAMP.gold} />
      {/* bar chart */}
      <rect x="166" y="146" width="118" height="118" rx="8" fill="rgba(127,176,232,0.12)" />
      <rect x="180" y="216" width="14" height="34" rx="3" fill={RAMP.soft} />
      <rect x="202" y="196" width="14" height="54" rx="3" fill="url(#csHeroBar)" />
      <rect x="224" y="206" width="14" height="44" rx="3" fill={RAMP.soft} />
      <rect x="246" y="176" width="14" height="74" rx="3" fill="url(#csHeroBar)" />
      <path d="M180 168h60" stroke="rgba(255,255,255,0.35)" strokeWidth="6" strokeLinecap="round" />
      {/* line chart */}
      <rect x="298" y="146" width="86" height="118" rx="8" fill="rgba(127,176,232,0.12)" />
      <path
        d="M308 240c10-8 16-28 26-30s14 12 22 6 10-32 20-38"
        stroke={RAMP.bright}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="376" cy="178" r="4" fill={RAMP.gold} />

      {/* --- workflow strip below the dashboard --- */}
      <rect x="106" y="300" width="258" height="64" rx="12" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx="146" cy="332" r="14" fill="url(#csHeroBadge)" />
      <path d="m140.5 332 4 4 7-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M162 332h34" stroke={RAMP.panelStroke} strokeWidth="2.4" strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx="212" cy="332" r="14" fill="#fff" stroke={RAMP.primary} strokeWidth="2.4" />
      <rect x="205" y="327" width="14" height="10" rx="2" stroke={RAMP.primary} strokeWidth="2" fill="none" />
      <path d="M228 332h34" stroke={RAMP.panelStroke} strokeWidth="2.4" strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx="278" cy="332" r="14" fill="#fff" stroke={RAMP.primary} strokeWidth="2.4" />
      <path d="M271 332h14M278 325v14" stroke={RAMP.primary} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M294 332h34" stroke={RAMP.panelStroke} strokeWidth="2.4" strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx="340" cy="332" r="14" fill={RAMP.gold} />
      <path d="m334 332 4.2 4.2 7.5-8.4" stroke="#0b1e42" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* --- satellite system panels, connected --- */}
      {/* customer record card */}
      <path d="M430 150v36" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M400 120h30a10 10 0 0 1 10 10v20" stroke="none" />
      <rect x="404" y="76" width="116" height="86" rx="12" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx="430" cy="104" r="12" fill="url(#csHeroBadge)" />
      <circle cx="430" cy="100" r="4" fill="#fff" opacity="0.95" />
      <path d="M422.5 111.5c1.4-4 4.2-6 7.5-6s6.1 2 7.5 6" fill="#fff" opacity="0.95" />
      <rect x="450" y="94" width="54" height="7" rx="3.5" fill={RAMP.soft} />
      <rect x="450" y="108" width="38" height="7" rx="3.5" fill={RAMP.panelStroke} />
      <rect x="418" y="132" width="86" height="7" rx="3.5" fill={RAMP.panelStroke} />
      <rect x="418" y="146" width="62" height="7" rx="3.5" fill={RAMP.panelStroke} opacity="0.7" />

      {/* documents / data card */}
      <rect x="418" y="196" width="102" height="118" rx="12" fill="url(#csHeroScreen)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <rect x="432" y="212" width="52" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
      <rect x="432" y="230" width="74" height="8" rx="4" fill={RAMP.soft} />
      <rect x="432" y="248" width="74" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <rect x="432" y="266" width="74" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <rect x="432" y="284" width="46" height="14" rx="7" fill={RAMP.gold} />

      {/* connectors from dashboard to satellites */}
      <path d="M400 128h4" stroke="none" />
      <path d="M400 120c14 0 18 0 30 0" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" opacity="0.9" />
      <path d="M400 240c16 0 8 14 18 14" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" opacity="0.9" />
      <path d="M364 332c40 0 52-8 54-18" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" opacity="0.9" />

      {/* small floating nodes */}
      <circle cx="52" cy="120" r="5" fill={RAMP.soft} opacity="0.55" />
      <circle cx="44" cy="250" r="4" fill={RAMP.gold} opacity="0.7" />
      <circle cx="530" cy="52" r="5" fill={RAMP.soft} opacity="0.55" />
    </svg>
  );
}
