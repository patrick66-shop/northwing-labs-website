/* Hero illustration for the AI Tools page (GitHub issue #20): an
   assistant conversation panel drawing on connected knowledge sources,
   in the established layered illustration style — light tint panels,
   gradient Flight Blue objects, restrained gold sparks, soft ground
   shadows. Decorative: the hero copy carries the meaning. */

const RAMP = {
  panel: "#e8f1fc",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
  gold: "#edb743",
};

export default function AIToolsIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aiScreen" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#12315e" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <linearGradient id="aiBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="270" cy="392" rx="215" ry="16" fill="#020a1e" opacity="0.35" />

      {/* --- assistant conversation window --- */}
      <rect x="120" y="48" width="320" height="300" rx="16" fill="url(#aiScreen)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <path d="M120 84h320" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      {/* assistant identity */}
      <circle cx="148" cy="66" r="9" fill="url(#aiBadge)" />
      <path d="m144.6 66 1.4-3.4 1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4z" fill="#fff" transform="scale(0.62) translate(90 40)" opacity="0.95" />
      <rect x="164" y="60" width="86" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="424" cy="66" r="5" fill={RAMP.gold} opacity="0.9" />
      {/* user question bubble (right) */}
      <rect x="236" y="100" width="182" height="42" rx="12" fill="rgba(127,176,232,0.2)" />
      <rect x="250" y="113" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.45)" />
      <rect x="250" y="126" width="86" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
      {/* assistant answer bubble (left, with spark) */}
      <rect x="142" y="156" width="220" height="88" rx="12" fill="rgba(127,176,232,0.12)" stroke="rgba(127,176,232,0.35)" strokeWidth="1" />
      <circle cx="164" cy="178" r="10" fill="url(#aiBadge)" />
      <path d="m164 172 1.5 3.6 3.6 1.5-3.6 1.5-1.5 3.6-1.5-3.6-3.6-1.5 3.6-1.5 1.5-3.6z" fill="#fff" opacity="0.95" transform="scale(0.9) translate(18 19)" />
      <rect x="184" y="172" width="160" height="7" rx="3.5" fill="rgba(255,255,255,0.42)" />
      <rect x="184" y="186" width="140" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
      <rect x="184" y="200" width="150" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
      {/* cited source chip inside the answer */}
      <rect x="184" y="216" width="96" height="16" rx="8" fill="rgba(237,183,67,0.2)" stroke={RAMP.gold} strokeWidth="1" />
      <circle cx="194" cy="224" r="3" fill={RAMP.gold} />
      <rect x="202" y="221" width="66" height="6" rx="3" fill={RAMP.gold} opacity="0.85" />
      {/* second user bubble */}
      <rect x="258" y="258" width="160" height="36" rx="12" fill="rgba(127,176,232,0.2)" />
      <rect x="272" y="270" width="104" height="7" rx="3.5" fill="rgba(255,255,255,0.4)" />
      {/* typing indicator */}
      <rect x="142" y="306" width="76" height="26" rx="13" fill="rgba(127,176,232,0.14)" />
      <circle cx="164" cy="319" r="3.4" fill={RAMP.soft} />
      <circle cx="178" cy="319" r="3.4" fill={RAMP.bright} />
      <circle cx="192" cy="319" r="3.4" fill={RAMP.soft} />

      {/* --- knowledge sources feeding the assistant --- */}
      {/* document stack */}
      <ellipse cx="63" cy="215" rx="42" ry="6" fill="#0b1e42" opacity="0.25" />
      <rect x="30" y="120" width="66" height="86" rx="8" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="24" y="128" width="66" height="86" rx="8" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="34" y="142" width="46" height="6" rx="3" fill={RAMP.soft} />
      <rect x="34" y="156" width="46" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="34" y="170" width="34" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="34" y="190" width="28" height="12" rx="6" fill="url(#aiBadge)" />
      {/* data / records card */}
      <ellipse cx="490" cy="196" rx="40" ry="6" fill="#0b1e42" opacity="0.25" />
      <rect x="456" y="110" width="72" height="78" rx="8" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx="472" cy="128" r="7" fill="url(#aiBadge)" />
      <rect x="484" y="124" width="34" height="7" rx="3.5" fill={RAMP.soft} />
      <rect x="466" y="144" width="52" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="466" y="157" width="52" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="466" y="170" width="36" height="6" rx="3" fill={RAMP.gold} opacity="0.9" />
      {/* procedures checklist */}
      <ellipse cx="474" cy="330" rx="38" ry="6" fill="#0b1e42" opacity="0.25" />
      <rect x="446" y="248" width="66" height="76" rx="8" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <path d="m456 266 3 3 5.4-6" stroke={RAMP.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="470" y="263" width="32" height="6" rx="3" fill={RAMP.soft} />
      <path d="m456 284 3 3 5.4-6" stroke={RAMP.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="470" y="281" width="32" height="6" rx="3" fill={RAMP.panelStroke} />
      <path d="m456 302 3 3 5.4-6" stroke={RAMP.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="470" y="299" width="32" height="6" rx="3" fill={RAMP.panelStroke} />

      {/* connectors from sources into the assistant */}
      <path d="M96 168c14 0 12 8 24 10" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M456 150c-8 0-10 6-16 8" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M446 286c-4 0-4-2-6-4" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />

      {/* gold sparks */}
      <path d="m88 66 2 4.8 4.8 2-4.8 2-2 4.8-2-4.8-4.8-2 4.8-2 2-4.8z" fill={RAMP.gold} opacity="0.85" />
      <circle cx="516" cy="64" r="4" fill={RAMP.soft} opacity="0.55" />
      <circle cx="52" cy="300" r="4" fill={RAMP.soft} opacity="0.55" />
    </svg>
  );
}
