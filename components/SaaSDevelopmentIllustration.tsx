/* Hero illustration for the SaaS Development page: an idea sketch
   becoming a working product — a browser-window app with customers
   arriving, beside the subscription and growth signals that make it a
   business — in the established layered illustration style: light
   tint panels, gradient Flight Blue objects, restrained gold sparks,
   soft ground shadows. Decorative: the hero copy carries the
   meaning. */

const RAMP = {
  panel: "#e8f1fc",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
  gold: "#edb743",
};

export default function SaaSDevelopmentIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sdScreen" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#12315e" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <linearGradient id="sdBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="280" cy="394" rx="215" ry="16" fill="#020a1e" opacity="0.35" />

      {/* --- the idea: sketch card --- */}
      <ellipse cx="86" cy="234" rx="50" ry="6" fill="#0b1e42" opacity="0.25" />
      <rect x="28" y="104" width="116" height="126" rx="10" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      {/* lightbulb sketch */}
      <circle cx="66" cy="136" r="13" stroke={RAMP.gold} strokeWidth="1.8" />
      <path d="M61 148h10M62.5 153h7" stroke={RAMP.gold} strokeWidth="1.8" strokeLinecap="round" />
      <path d="m66 116 0-5M50 124l-3.5-3.5M82 124l3.5-3.5" stroke={RAMP.gold} strokeWidth="1.8" strokeLinecap="round" />
      {/* scribbled notes */}
      <path d="M92 130h38M92 142h30" stroke={RAMP.soft} strokeWidth="2" strokeLinecap="round" />
      <path d="M42 172c10-5 16 4 26-1s16 3 26-1 16 2 24-1" stroke={RAMP.panelStroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M42 188c10-5 16 4 26-1s16 3 24-1" stroke={RAMP.panelStroke} strokeWidth="2" strokeLinecap="round" />
      {/* rough screen thumbnails */}
      <rect x="42" y="200" width="26" height="18" rx="3" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="76" y="200" width="26" height="18" rx="3" stroke={RAMP.panelStroke} strokeWidth="1.5" strokeDasharray="3 3" />

      {/* --- the product: browser app --- */}
      <rect x="176" y="56" width="240" height="292" rx="14" fill="url(#sdScreen)" stroke="rgba(255,255,255,0.24)" strokeWidth="1.5" />
      {/* browser chrome */}
      <path d="M176 86h240" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      <circle cx="192" cy="71" r="4" fill={RAMP.soft} opacity="0.8" />
      <circle cx="205" cy="71" r="4" fill={RAMP.soft} opacity="0.5" />
      <circle cx="218" cy="71" r="4" fill={RAMP.gold} opacity="0.9" />
      <rect x="234" y="64" width="128" height="14" rx="7" fill="rgba(127,176,232,0.18)" />
      <rect x="244" y="69" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.35)" />
      {/* sidebar */}
      <rect x="190" y="100" width="54" height="234" rx="8" fill="rgba(127,176,232,0.1)" stroke="rgba(127,176,232,0.25)" strokeWidth="1" />
      <circle cx="217" cy="118" r="8" fill="url(#sdBadge)" />
      <rect x="200" y="138" width="34" height="7" rx="3.5" fill="rgba(255,255,255,0.4)" />
      <rect x="200" y="154" width="34" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
      <rect x="200" y="170" width="34" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
      <rect x="200" y="186" width="34" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
      {/* main: customer rows arriving */}
      <rect x="254" y="100" width="148" height="9" rx="4.5" fill="rgba(255,255,255,0.42)" />
      <rect x="254" y="120" width="148" height="30" rx="8" fill="rgba(127,176,232,0.14)" stroke="rgba(127,176,232,0.3)" strokeWidth="1" />
      <circle cx="270" cy="135" r="7" fill={RAMP.soft} opacity="0.7" />
      <rect x="284" y="131" width="70" height="7" rx="3.5" fill="rgba(255,255,255,0.35)" />
      <rect x="254" y="158" width="148" height="30" rx="8" fill="rgba(127,176,232,0.14)" stroke="rgba(127,176,232,0.3)" strokeWidth="1" />
      <circle cx="270" cy="173" r="7" fill={RAMP.soft} opacity="0.7" />
      <rect x="284" y="169" width="58" height="7" rx="3.5" fill="rgba(255,255,255,0.35)" />
      {/* gold: newest customer signing up */}
      <rect x="254" y="196" width="148" height="30" rx="8" fill="rgba(237,183,67,0.14)" stroke={RAMP.gold} strokeWidth="1.2" />
      <circle cx="270" cy="211" r="7" fill={RAMP.gold} opacity="0.9" />
      <rect x="284" y="207" width="78" height="7" rx="3.5" fill={RAMP.gold} opacity="0.8" />
      {/* usage chart */}
      <rect x="254" y="238" width="148" height="72" rx="8" fill="rgba(127,176,232,0.1)" stroke="rgba(127,176,232,0.25)" strokeWidth="1" />
      <path d="M266 292l24-16 20 8 26-20 20 8 24-24" stroke={RAMP.bright} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M364 248h16v16" stroke={RAMP.bright} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* --- the business: subscriptions + customers --- */}
      <ellipse cx="482" cy="258" rx="50" ry="6" fill="#0b1e42" opacity="0.25" />
      {/* subscription card */}
      <rect x="436" y="104" width="96" height="64" rx="10" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="448" y="118" width="42" height="10" rx="5" fill="url(#sdBadge)" />
      <rect x="448" y="138" width="72" height="7" rx="3.5" fill={RAMP.panelStroke} />
      <rect x="448" y="151" width="52" height="7" rx="3.5" fill={RAMP.panelStroke} />
      {/* recurring arrows */}
      <path d="M508 116a9 9 0 1 0 4 8" stroke={RAMP.primary} strokeWidth="1.8" strokeLinecap="round" />
      <path d="m509 112 3.5 4.5-5.5 1.5" stroke={RAMP.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* customers card */}
      <rect x="436" y="184" width="96" height="70" rx="10" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx="456" cy="204" r="6.5" fill={RAMP.soft} />
      <circle cx="472" cy="204" r="6.5" fill={RAMP.bright} />
      <circle cx="488" cy="204" r="6.5" fill={RAMP.deep} />
      <circle cx="504" cy="204" r="6.5" fill="#fff" stroke={RAMP.gold} strokeWidth="1.8" />
      <path d="M501.6 204h4.8M504 201.6v4.8" stroke={RAMP.gold} strokeWidth="1.4" strokeLinecap="round" />
      <rect x="448" y="222" width="72" height="7" rx="3.5" fill={RAMP.panelStroke} />
      <rect x="448" y="236" width="56" height="7" rx="3.5" fill={RAMP.panelStroke} />

      {/* connectors: idea → product → business */}
      <path d="M144 166c12 0 20 2 32 6" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M416 140c8 0 12-2 20-4" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M416 210c8 0 12 2 20 4" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />

      {/* gold sparks */}
      <path d="m152 52 2 4.8 4.8 2-4.8 2-2 4.8-2-4.8-4.8-2 4.8-2 2-4.8z" fill={RAMP.gold} opacity="0.85" />
      <circle cx="512" cy="66" r="4" fill={RAMP.soft} opacity="0.55" />
      <circle cx="46" cy="312" r="4" fill={RAMP.soft} opacity="0.55" />
    </svg>
  );
}
