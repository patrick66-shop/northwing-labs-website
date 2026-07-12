/* Hero illustration for the Business Automation page (GitHub issue
   #22): a form-submission trigger feeding an automation panel that
   applies the rules and completes connected actions — message sent,
   document created, task scheduled — in the established layered
   illustration style: light tint panels, gradient Flight Blue objects,
   restrained gold sparks, soft ground shadows. Decorative: the hero
   copy carries the meaning. */

const RAMP = {
  panel: "#e8f1fc",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
  gold: "#edb743",
};

export default function BusinessAutomationIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="baScreen" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#12315e" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <linearGradient id="baBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="280" cy="392" rx="215" ry="16" fill="#020a1e" opacity="0.35" />

      {/* --- trigger: submitted form --- */}
      <ellipse cx="84" cy="292" rx="50" ry="6" fill="#0b1e42" opacity="0.25" />
      <rect x="24" y="140" width="120" height="140" rx="10" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="38" y="156" width="64" height="8" rx="4" fill={RAMP.soft} />
      <rect x="38" y="174" width="92" height="14" rx="4" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1" />
      <rect x="38" y="196" width="92" height="14" rx="4" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1" />
      <rect x="38" y="218" width="92" height="24" rx="4" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1" />
      <rect x="38" y="252" width="52" height="16" rx="8" fill="url(#baBadge)" />
      <rect x="48" y="258.5" width="32" height="3.5" rx="1.75" fill="#fff" opacity="0.85" />

      {/* --- automation panel: the system applies the rules --- */}
      <rect x="190" y="70" width="200" height="270" rx="16" fill="url(#baScreen)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <path d="M190 106h200" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      {/* automation identity: gear badge */}
      <circle cx="214" cy="88" r="9" fill="url(#baBadge)" />
      <circle cx="214" cy="88" r="3.2" stroke="#fff" strokeWidth="1.6" />
      <path
        d="M214 81.5v2.4M214 92.1v2.4M220.5 88h-2.4M209.9 88h-2.4M218.6 83.4l-1.7 1.7M210.1 91.9l-1.7 1.7M218.6 92.6l-1.7-1.7M210.1 84.1l-1.7-1.7"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="230" y="84" width="86" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="374" cy="88" r="5" fill={RAMP.gold} opacity="0.9" />

      {/* incoming trigger chip */}
      <rect x="250" y="122" width="80" height="26" rx="9" fill="rgba(127,176,232,0.2)" />
      <rect x="262" y="131" width="56" height="7" rx="3.5" fill="rgba(255,255,255,0.45)" />
      {/* connector to the rules */}
      <path d="M290 148v16" stroke={RAMP.soft} strokeWidth="2" strokeLinecap="round" />
      <path d="m286 160 4 5 4-5" stroke={RAMP.soft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* rules diamond */}
      <path d="M290 170 316 196 290 222 264 196z" fill="rgba(237,183,67,0.14)" stroke={RAMP.gold} strokeWidth="1.5" />
      <path d="m283.5 196 4.5 4.5 8-9" stroke={RAMP.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* branch connectors */}
      <path d="M290 222v10M290 232h-28v10M290 232h28v10" stroke={RAMP.soft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* next-step nodes */}
      <rect x="234" y="246" width="56" height="24" rx="8" fill="rgba(127,176,232,0.16)" stroke="rgba(127,176,232,0.35)" strokeWidth="1" />
      <rect x="245" y="255" width="34" height="6" rx="3" fill="rgba(255,255,255,0.42)" />
      <rect x="290" y="246" width="56" height="24" rx="8" fill="rgba(127,176,232,0.16)" stroke="rgba(127,176,232,0.35)" strokeWidth="1" />
      <rect x="301" y="255" width="34" height="6" rx="3" fill="rgba(255,255,255,0.42)" />
      {/* completion row */}
      <circle cx="252" cy="304" r="9" fill="rgba(127,176,232,0.14)" stroke={RAMP.soft} strokeWidth="1.5" />
      <path d="m248 304 3 3 5-6" stroke={RAMP.soft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="290" cy="304" r="9" fill="rgba(127,176,232,0.14)" stroke={RAMP.soft} strokeWidth="1.5" />
      <path d="m286 304 3 3 5-6" stroke={RAMP.soft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="328" cy="304" r="9" fill="rgba(237,183,67,0.16)" stroke={RAMP.gold} strokeWidth="1.5" />
      <path d="m324 304 3 3 5-6" stroke={RAMP.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* --- completed actions --- */}
      <ellipse cx="482" cy="330" rx="54" ry="6" fill="#0b1e42" opacity="0.25" />
      {/* message sent */}
      <rect x="432" y="108" width="100" height="56" rx="8" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="444" y="122" width="26" height="18" rx="3" fill="#fff" stroke={RAMP.primary} strokeWidth="1.5" />
      <path d="m444 124 13 9 13-9" stroke={RAMP.primary} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="480" y="122" width="38" height="6" rx="3" fill={RAMP.soft} />
      <rect x="480" y="134" width="30" height="6" rx="3" fill={RAMP.panelStroke} />
      <circle cx="518" cy="152" r="4" fill={RAMP.gold} opacity="0.9" />
      {/* document created */}
      <rect x="432" y="182" width="100" height="56" rx="8" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="444" y="194" width="20" height="30" rx="3" fill={RAMP.panel} stroke={RAMP.primary} strokeWidth="1.5" />
      <path d="M449 203h10M449 209h10M449 215h7" stroke={RAMP.primary} strokeWidth="1.4" strokeLinecap="round" />
      <rect x="474" y="196" width="44" height="6" rx="3" fill={RAMP.soft} />
      <rect x="474" y="208" width="36" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="474" y="220" width="28" height="6" rx="3" fill={RAMP.panelStroke} />
      {/* task scheduled */}
      <rect x="432" y="256" width="100" height="56" rx="8" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="444" y="268" width="24" height="22" rx="3" fill="#fff" stroke={RAMP.primary} strokeWidth="1.5" />
      <path d="M444 275h24M450 265.5v5M462 265.5v5" stroke={RAMP.primary} strokeWidth="1.4" strokeLinecap="round" />
      <path d="m451 282 3 3 5-6" stroke={RAMP.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="476" y="270" width="42" height="6" rx="3" fill={RAMP.soft} />
      <rect x="476" y="282" width="32" height="6" rx="3" fill={RAMP.panelStroke} />

      {/* connectors: trigger in, actions out */}
      <path d="M144 208c18 0 26-2 46-2" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M390 150c16 0 24-6 42-11" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M390 208h42" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M390 266c16 0 24 6 42 11" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />

      {/* gold sparks */}
      <path d="m168 52 2 4.8 4.8 2-4.8 2-2 4.8-2-4.8-4.8-2 4.8-2 2-4.8z" fill={RAMP.gold} opacity="0.85" />
      <circle cx="520" cy="70" r="4" fill={RAMP.soft} opacity="0.55" />
      <circle cx="44" cy="330" r="4" fill={RAMP.soft} opacity="0.55" />
    </svg>
  );
}
