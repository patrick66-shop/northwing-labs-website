/* Showcase illustration for the Mobile Apps page: work captured on
   the job site — photos, checklists, approvals — flowing through one
   connected sync layer into the office systems that run scheduling,
   invoicing, and reporting. Same presentation language as the other
   service-page showcase artwork. Decorative: the section copy carries
   the meaning. */

const RAMP = {
  panel: "#e8f1fc",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
  gold: "#edb743",
};

export default function FieldToOfficeIllustration() {
  return (
    <svg
      viewBox="0 0 960 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="foScreen" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#12315e" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <linearGradient id="foBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
      </defs>

      {/* ground shadows */}
      <ellipse cx="190" cy="404" rx="130" ry="13" fill="#020a1e" opacity="0.3" />
      <ellipse cx="760" cy="404" rx="170" ry="13" fill="#020a1e" opacity="0.3" />

      {/* --- field phone: capture on site --- */}
      <rect x="118" y="56" width="150" height="340" rx="22" fill="url(#foScreen)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
      <rect x="172" y="68" width="42" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="132" y="86" width="76" height="9" rx="4.5" fill="rgba(255,255,255,0.45)" />
      <circle cx="250" cy="90" r="5.5" fill={RAMP.gold} opacity="0.95" />
      <path d="M132 106h122" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      {/* photo tile */}
      <rect x="132" y="118" width="122" height="66" rx="9" fill="rgba(127,176,232,0.2)" />
      <path d="M146 172l18-20 14 15 10-10 20 22" stroke={RAMP.soft} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="152" cy="134" r="4" fill={RAMP.soft} />
      {/* checklist */}
      <path d="m142 208 4.5 4.5 8-9" stroke={RAMP.bright} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="162" y="203" width="80" height="7" rx="3.5" fill="rgba(255,255,255,0.42)" />
      <path d="m142 232 4.5 4.5 8-9" stroke={RAMP.bright} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="162" y="227" width="64" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="148" cy="256" r="5.5" stroke={RAMP.gold} strokeWidth="1.8" />
      <rect x="162" y="251" width="72" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
      {/* approval chip */}
      <rect x="132" y="278" width="122" height="30" rx="8" fill="rgba(237,183,67,0.16)" stroke={RAMP.gold} strokeWidth="1" />
      <path d="m142 293 4 4 7-8" stroke={RAMP.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="160" y="289" width="72" height="7" rx="3.5" fill={RAMP.gold} opacity="0.85" />
      {/* send action */}
      <rect x="132" y="322" width="122" height="28" rx="14" fill="url(#foBadge)" />
      <rect x="168" y="333" width="50" height="6" rx="3" fill="#fff" opacity="0.9" />
      <rect x="172" y="372" width="42" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />

      {/* --- sync layer --- */}
      <circle cx="450" cy="222" r="46" fill="rgba(127,176,232,0.1)" stroke={RAMP.panelStroke} strokeWidth="1.5" />
      <circle cx="450" cy="222" r="30" fill="url(#foBadge)" />
      {/* two-way sync arrows */}
      <path d="M438 214a14 14 0 0 1 22-3" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m458 204 3.5 7.5-8 .5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M462 230a14 14 0 0 1-22 3" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m442 240-3.5-7.5 8-.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* connectors */}
      <path d="M268 208c60-14 108-6 136 6" stroke={RAMP.panelStroke} strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
      <path d="M496 216c40-8 76-10 116-6" stroke={RAMP.panelStroke} strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
      <path d="M268 252c60 16 108 10 136-12" stroke="rgba(156,195,239,0.5)" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
      <path d="M496 236c40 12 76 14 116 10" stroke="rgba(156,195,239,0.5)" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />

      {/* --- office desktop: schedule, invoice, reporting --- */}
      <rect x="612" y="72" width="296" height="256" rx="14" fill="url(#foScreen)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <path d="M612 104h296" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      <circle cx="632" cy="88" r="5" fill={RAMP.soft} />
      <rect x="646" y="84" width="96" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="888" cy="88" r="5" fill={RAMP.gold} opacity="0.9" />
      {/* schedule column */}
      <rect x="628" y="118" width="128" height="90" rx="9" fill="rgba(127,176,232,0.12)" stroke="rgba(127,176,232,0.35)" strokeWidth="1" />
      <rect x="640" y="130" width="60" height="7" rx="3.5" fill="rgba(255,255,255,0.42)" />
      <rect x="640" y="146" width="104" height="12" rx="4" fill="rgba(127,176,232,0.25)" />
      <rect x="640" y="164" width="104" height="12" rx="4" fill="rgba(127,176,232,0.25)" />
      <rect x="640" y="182" width="104" height="12" rx="4" fill="rgba(237,183,67,0.3)" stroke={RAMP.gold} strokeWidth="1" />
      {/* job feed column: fresh from the field */}
      <rect x="768" y="118" width="128" height="90" rx="9" fill="rgba(127,176,232,0.12)" stroke="rgba(127,176,232,0.35)" strokeWidth="1" />
      <rect x="780" y="130" width="66" height="7" rx="3.5" fill="rgba(255,255,255,0.42)" />
      <rect x="780" y="146" width="30" height="22" rx="4" fill="rgba(127,176,232,0.3)" />
      <path d="m785 160 6-7 5 5 3-3 7 8" stroke={RAMP.soft} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="818" y="150" width="66" height="6" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="818" y="162" width="50" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      <path d="m782 184 3.5 3.5 6-7" stroke={RAMP.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="796" y="180" width="76" height="7" rx="3.5" fill={RAMP.gold} opacity="0.8" />
      {/* reporting band */}
      <rect x="628" y="220" width="268" height="90" rx="9" fill="rgba(127,176,232,0.1)" stroke="rgba(127,176,232,0.3)" strokeWidth="1" />
      <rect x="640" y="232" width="70" height="7" rx="3.5" fill="rgba(255,255,255,0.42)" />
      <rect x="644" y="272" width="26" height="26" rx="4" fill="rgba(127,176,232,0.35)" />
      <rect x="678" y="258" width="26" height="40" rx="4" fill="rgba(127,176,232,0.5)" />
      <rect x="712" y="266" width="26" height="32" rx="4" fill="rgba(127,176,232,0.4)" />
      <rect x="746" y="248" width="26" height="50" rx="4" fill={RAMP.gold} opacity="0.75" />
      <path d="m790 288 24-20 20 12 34-28" stroke={RAMP.bright} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M852 252h16v16" stroke={RAMP.bright} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* desk stand */}
      <path d="M736 328v22M700 350h72" stroke="rgba(255,255,255,0.28)" strokeWidth="3" strokeLinecap="round" />

      {/* gold sparks */}
      <path d="m332 96 2.2 5.2 5.2 2.2-5.2 2.2-2.2 5.2-2.2-5.2-5.2-2.2 5.2-2.2 2.2-5.2z" fill={RAMP.gold} opacity="0.85" />
      <circle cx="560" cy="330" r="4" fill={RAMP.soft} opacity="0.5" />
      <circle cx="72" cy="150" r="4" fill={RAMP.soft} opacity="0.5" />
    </svg>
  );
}
