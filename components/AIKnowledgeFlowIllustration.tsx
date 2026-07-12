/* Example-solution illustration for the AI Tools page (GitHub issue
   #20): business files, customer data, and procedures flow into one
   secure AI knowledge layer, which powers an employee assistant, a
   customer assistant, and workflow actions. Original composition in
   the established layered style (not the Custom Software artwork).
   Decorative — the section copy names the parts. */

const RAMP = {
  panel: "#e8f1fc",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
  gold: "#edb743",
};

export default function AIKnowledgeFlowIllustration() {
  return (
    <svg
      viewBox="0 0 960 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="akCore" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
        <linearGradient id="akDark" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#13335f" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <radialGradient id="akGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="rgba(47,138,232,0.35)" />
          <stop offset="1" stopColor="rgba(47,138,232,0)" />
        </radialGradient>
      </defs>

      {/* --- left: source panels --- */}
      {/* business files */}
      <rect x="48" y="44" width="150" height="92" rx="12" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="66" y="62" width="34" height="42" rx="4" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="72" y="70" width="22" height="4" rx="2" fill={RAMP.soft} />
      <rect x="72" y="79" width="22" height="4" rx="2" fill={RAMP.panelStroke} />
      <rect x="72" y="88" width="16" height="4" rx="2" fill={RAMP.panelStroke} />
      <rect x="112" y="62" width="34" height="42" rx="4" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <rect x="118" y="70" width="22" height="4" rx="2" fill={RAMP.soft} />
      <rect x="118" y="79" width="22" height="4" rx="2" fill={RAMP.panelStroke} />
      <rect x="118" y="88" width="16" height="4" rx="2" fill={RAMP.panelStroke} />
      <rect x="66" y="112" width="80" height="12" rx="6" fill="url(#akCore)" />
      {/* customer data */}
      <rect x="48" y="168" width="150" height="92" rx="12" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx="84" cy="200" r="12" fill="url(#akCore)" />
      <circle cx="84" cy="196" r="4" fill="#fff" opacity="0.95" />
      <path d="M76.5 207.5c1.4-4 4.2-6 7.5-6s6.1 2 7.5 6" fill="#fff" opacity="0.95" />
      <rect x="104" y="190" width="72" height="7" rx="3.5" fill={RAMP.soft} />
      <rect x="104" y="204" width="52" height="7" rx="3.5" fill={RAMP.panelStroke} />
      <rect x="66" y="228" width="112" height="7" rx="3.5" fill={RAMP.panelStroke} />
      <rect x="66" y="241" width="84" height="7" rx="3.5" fill={RAMP.panelStroke} opacity="0.7" />
      {/* procedures */}
      <rect x="48" y="292" width="150" height="92" rx="12" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <path d="m70 316 3.4 3.4 6-6.8" stroke={RAMP.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="88" y="312" width="84" height="7" rx="3.5" fill={RAMP.soft} />
      <path d="m70 340 3.4 3.4 6-6.8" stroke={RAMP.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="88" y="336" width="84" height="7" rx="3.5" fill={RAMP.panelStroke} />
      <path d="m70 364 3.4 3.4 6-6.8" stroke={RAMP.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="88" y="360" width="66" height="7" rx="3.5" fill={RAMP.panelStroke} />

      {/* connectors: sources → core */}
      <path d="M198 90c80 0 120 60 190 96" stroke={RAMP.soft} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.85" />
      <path d="M198 214c70 0 110 0 186 0" stroke={RAMP.soft} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.85" />
      <path d="M198 338c80 0 120-60 190-96" stroke={RAMP.soft} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.85" />

      {/* --- center: secure AI knowledge layer --- */}
      <circle cx="480" cy="214" r="130" fill="url(#akGlow)" />
      <ellipse cx="480" cy="330" rx="80" ry="9" fill="#020a1e" opacity="0.35" />
      <rect x="404" y="132" width="152" height="164" rx="20" fill="url(#akDark)" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
      {/* big spark core */}
      <path d="m480 168 8.4 25 25 8.4-25 8.4-8.4 25-8.4-25-25-8.4 25-8.4 8.4-25z" fill="url(#akCore)" stroke={RAMP.bright} strokeWidth="1.5" />
      <path d="m480 186 4.6 13.8 13.8 4.6-13.8 4.6-4.6 13.8-4.6-13.8-13.8-4.6 13.8-4.6 4.6-13.8z" fill="#fff" opacity="0.35" />
      {/* lock badge: approved information only */}
      <circle cx="544" cy="148" r="17" fill={RAMP.gold} stroke="#0b1e42" strokeWidth="1.5" />
      <rect x="537" y="146" width="14" height="11" rx="2.5" fill="#0b1e42" />
      <path d="M540 146v-3.4a4 4 0 0 1 8 0V146" stroke="#0b1e42" strokeWidth="2.2" fill="none" />
      {/* control rows inside the core panel */}
      <rect x="424" y="248" width="112" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
      <rect x="424" y="264" width="84" height="8" rx="4" fill="rgba(127,176,232,0.6)" />

      {/* connectors: core → outputs */}
      <path d="M556 178c70-20 100-40 160-52" stroke={RAMP.soft} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.85" />
      <path d="M556 214c70 0 110 0 160 0" stroke={RAMP.soft} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.85" />
      <path d="M556 250c70 20 100 40 160 52" stroke={RAMP.soft} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.85" />

      {/* --- right: outputs --- */}
      {/* employee assistant */}
      <rect x="726" y="76" width="186" height="88" rx="12" fill="url(#akDark)" stroke="rgba(255,255,255,0.24)" strokeWidth="1.5" />
      <circle cx="754" cy="104" r="12" fill="url(#akCore)" />
      <path d="m754 97 1.8 4.4 4.4 1.8-4.4 1.8-1.8 4.4-1.8-4.4-4.4-1.8 4.4-1.8 1.8-4.4z" fill="#fff" opacity="0.95" />
      <rect x="774" y="96" width="92" height="7" rx="3.5" fill="rgba(255,255,255,0.45)" />
      <rect x="774" y="110" width="66" height="6" rx="3" fill="rgba(255,255,255,0.28)" />
      <rect x="742" y="130" width="128" height="18" rx="9" fill="rgba(127,176,232,0.18)" />
      <rect x="752" y="136" width="80" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      {/* customer assistant */}
      <rect x="726" y="180" width="186" height="88" rx="12" fill="#fff" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <path d="M770 208c0 8-8 14-18 14-2 0-4-.3-5.8-.8l-6.2 2.4 1.9-5.2c-3.4-2.5-5.9-6.2-5.9-10.4 0-8 8-14 17-14s17 6 17 14z" fill="url(#akCore)" transform="translate(6 -4)" />
      <rect x="786" y="200" width="92" height="7" rx="3.5" fill={RAMP.soft} />
      <rect x="786" y="214" width="66" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="742" y="234" width="128" height="18" rx="9" fill={RAMP.panel} />
      <rect x="752" y="240" width="80" height="6" rx="3" fill={RAMP.panelStroke} />
      {/* workflow actions */}
      <rect x="726" y="284" width="186" height="88" rx="12" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx="756" cy="312" r="12" fill="#fff" stroke={RAMP.primary} strokeWidth="2" />
      <path d="m750.5 312 3.6 3.6 6.6-7.4" stroke={RAMP.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M772 312h30" stroke={RAMP.panelStroke} strokeWidth="2.4" strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx="812" cy="312" r="12" fill="#fff" stroke={RAMP.primary} strokeWidth="2" />
      <path d="M806 312h12M812 306v12" stroke={RAMP.primary} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M828 312h30" stroke={RAMP.panelStroke} strokeWidth="2.4" strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx="868" cy="312" r="12" fill={RAMP.gold} />
      <path d="m862.5 312 3.6 3.6 6.6-7.4" stroke="#0b1e42" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="742" y="340" width="128" height="8" rx="4" fill={RAMP.panelStroke} opacity="0.8" />

      {/* floating nodes */}
      <circle cx="320" cy="60" r="5" fill={RAMP.soft} opacity="0.5" />
      <circle cx="640" cy="392" r="5" fill={RAMP.soft} opacity="0.5" />
      <circle cx="300" cy="380" r="4" fill={RAMP.gold} opacity="0.7" />
    </svg>
  );
}
