/* Hero illustration for the Mobile Apps page: a field-team phone
   showing a live job card — checklist, photo capture, sync state —
   with the customer and office ends it keeps in step, in the
   established layered illustration style: light tint panels, gradient
   Flight Blue objects, restrained gold sparks, soft ground shadows.
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

export default function MobileAppsIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="maScreen" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#12315e" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <linearGradient id="maBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="280" cy="396" rx="210" ry="15" fill="#020a1e" opacity="0.35" />

      {/* --- the field phone: live job card --- */}
      <rect x="196" y="40" width="168" height="330" rx="24" fill="url(#maScreen)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      {/* speaker notch */}
      <rect x="258" y="52" width="44" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      {/* app bar: job title + sync state */}
      <rect x="212" y="72" width="82" height="9" rx="4.5" fill="rgba(255,255,255,0.45)" />
      <circle cx="340" cy="76" r="6" fill={RAMP.gold} opacity="0.95" />
      <path d="M212 92h136" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      {/* job checklist */}
      <rect x="212" y="104" width="136" height="72" rx="10" fill="rgba(127,176,232,0.12)" stroke="rgba(127,176,232,0.35)" strokeWidth="1" />
      <path d="m222 122 4 4 7-8" stroke={RAMP.bright} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="240" y="117" width="86" height="7" rx="3.5" fill="rgba(255,255,255,0.42)" />
      <path d="m222 144 4 4 7-8" stroke={RAMP.bright} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="240" y="139" width="70" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="227" cy="163" r="5.5" stroke={RAMP.gold} strokeWidth="1.8" />
      <rect x="240" y="159" width="78" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
      {/* photo capture row */}
      <rect x="212" y="188" width="64" height="48" rx="8" fill="rgba(127,176,232,0.2)" />
      <path d="M228 214l8-9 7 8 5-5 8 10" stroke={RAMP.soft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="230" cy="200" r="3" fill={RAMP.soft} />
      <rect x="284" y="188" width="64" height="48" rx="8" fill="rgba(127,176,232,0.12)" stroke="rgba(127,176,232,0.35)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M316 202v16M308 210h16" stroke={RAMP.soft} strokeWidth="2" strokeLinecap="round" />
      {/* signature strip */}
      <rect x="212" y="248" width="136" height="34" rx="8" fill="rgba(127,176,232,0.12)" stroke="rgba(127,176,232,0.35)" strokeWidth="1" />
      <path d="M224 268c8-9 12 4 19-4s10 3 17-3 12 4 20-2 12 2 18-2" stroke={RAMP.gold} strokeWidth="1.8" strokeLinecap="round" />
      {/* primary action */}
      <rect x="212" y="296" width="136" height="30" rx="15" fill="url(#maBadge)" />
      <rect x="252" y="308" width="56" height="6" rx="3" fill="#fff" opacity="0.9" />
      {/* home indicator */}
      <rect x="256" y="348" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />

      {/* --- customer end: booking/status card --- */}
      <ellipse cx="94" cy="252" rx="52" ry="6" fill="#0b1e42" opacity="0.25" />
      <rect x="34" y="112" width="120" height="132" rx="10" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx="54" cy="134" r="8" fill="url(#maBadge)" />
      <rect x="68" y="129" width="60" height="8" rx="4" fill={RAMP.soft} />
      <rect x="48" y="152" width="92" height="10" rx="5" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1" />
      <rect x="48" y="170" width="92" height="10" rx="5" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1" />
      {/* status track: two done, one gold current */}
      <path d="M52 200h84" stroke={RAMP.panelStroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="56" cy="200" r="6" fill={RAMP.primary} />
      <circle cx="94" cy="200" r="6" fill={RAMP.primary} />
      <circle cx="132" cy="200" r="6" fill="#fff" stroke={RAMP.gold} strokeWidth="2" />
      <rect x="48" y="216" width="64" height="14" rx="7" fill="url(#maBadge)" />

      {/* --- office end: dashboard rows --- */}
      <ellipse cx="472" cy="270" rx="56" ry="6" fill="#0b1e42" opacity="0.25" />
      <rect x="408" y="120" width="128" height="140" rx="10" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="420" y="134" width="70" height="8" rx="4" fill={RAMP.soft} />
      <circle cx="522" cy="138" r="4" fill={RAMP.gold} opacity="0.9" />
      <rect x="420" y="152" width="104" height="22" rx="6" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1" />
      <path d="m427 163 3 3 5-6" stroke={RAMP.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="442" y="160" width="56" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="420" y="180" width="104" height="22" rx="6" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1" />
      <path d="m427 191 3 3 5-6" stroke={RAMP.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="442" y="188" width="48" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="420" y="208" width="104" height="22" rx="6" fill="#fff" stroke={RAMP.gold} strokeWidth="1.2" />
      <circle cx="430" cy="219" r="3.5" fill={RAMP.gold} />
      <rect x="442" y="216" width="62" height="6" rx="3" fill={RAMP.gold} opacity="0.85" />
      <rect x="420" y="238" width="66" height="8" rx="4" fill={RAMP.panelStroke} />

      {/* connectors: customer ↔ phone ↔ office */}
      <path d="M154 178c16 0 26 2 42 6" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M364 186c16 0 28-2 44-4" stroke={RAMP.panelStroke} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />

      {/* gold sparks */}
      <path d="m124 62 2 4.8 4.8 2-4.8 2-2 4.8-2-4.8-4.8-2 4.8-2 2-4.8z" fill={RAMP.gold} opacity="0.85" />
      <circle cx="508" cy="72" r="4" fill={RAMP.soft} opacity="0.55" />
      <circle cx="52" cy="316" r="4" fill={RAMP.soft} opacity="0.55" />
    </svg>
  );
}
