/* Showcase illustration for the Custom Software page (GitHub issue
   #18): one connected business platform across desktop, tablet, and
   phone — an original composition in the established illustration
   style (NOT the homepage case-study artwork). Decorative. */

const RAMP = {
  panel: "#e8f1fc",
  panelStroke: "#9cc3ef",
  soft: "#7fb0e8",
  primary: "#0d69ce",
  bright: "#2f8ae8",
  deep: "#0a4fa8",
  gold: "#edb743",
};

export default function PlatformShowcaseIllustration() {
  return (
    <svg
      viewBox="0 0 960 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="psScreen" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#13335f" />
          <stop offset="1" stopColor="#0a1f42" />
        </linearGradient>
        <linearGradient id="psBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
        <linearGradient id="psBadge" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={RAMP.bright} />
          <stop offset="1" stopColor={RAMP.deep} />
        </linearGradient>
      </defs>

      {/* ground shadows */}
      <ellipse cx="480" cy="452" rx="300" ry="14" fill="#020a1e" opacity="0.4" />
      <ellipse cx="150" cy="446" rx="110" ry="10" fill="#020a1e" opacity="0.35" />
      <ellipse cx="822" cy="452" rx="70" ry="9" fill="#020a1e" opacity="0.35" />

      {/* --- laptop: dashboard --- */}
      <rect x="300" y="60" width="360" height="330" rx="16" fill="#0b1e42" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
      <rect x="312" y="72" width="336" height="306" rx="8" fill="url(#psScreen)" />
      <path d="M240 390h480l-26 34a16 16 0 0 1-12.6 6H278.6a16 16 0 0 1-12.6-6l-26-34z" fill="#10294f" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      {/* top bar */}
      <rect x="326" y="86" width="120" height="10" rx="5" fill="rgba(255,255,255,0.35)" />
      <circle cx="632" cy="91" r="7" fill={RAMP.gold} opacity="0.9" />
      {/* KPI row */}
      <rect x="326" y="110" width="98" height="52" rx="8" fill="rgba(127,176,232,0.14)" />
      <rect x="336" y="122" width="36" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      <rect x="336" y="136" width="56" height="12" rx="5" fill={RAMP.bright} />
      <rect x="432" y="110" width="98" height="52" rx="8" fill="rgba(127,176,232,0.14)" />
      <rect x="442" y="122" width="36" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      <rect x="442" y="136" width="44" height="12" rx="5" fill={RAMP.gold} />
      <rect x="538" y="110" width="96" height="52" rx="8" fill="rgba(127,176,232,0.14)" />
      <rect x="548" y="122" width="36" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      <rect x="548" y="136" width="52" height="12" rx="5" fill={RAMP.soft} />
      {/* revenue chart */}
      <rect x="326" y="176" width="200" height="184" rx="8" fill="rgba(127,176,232,0.12)" />
      <rect x="340" y="190" width="72" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
      <rect x="344" y="300" width="20" height="44" rx="4" fill={RAMP.soft} />
      <rect x="374" y="276" width="20" height="68" rx="4" fill="url(#psBar)" />
      <rect x="404" y="288" width="20" height="56" rx="4" fill={RAMP.soft} />
      <rect x="434" y="252" width="20" height="92" rx="4" fill="url(#psBar)" />
      <rect x="464" y="232" width="20" height="112" rx="4" fill="url(#psBar)" />
      <path d="M344 240c26-10 40-34 66-38s44 10 74-22" stroke={RAMP.gold} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
      {/* orders list */}
      <rect x="536" y="176" width="98" height="184" rx="8" fill="rgba(127,176,232,0.12)" />
      <rect x="548" y="190" width="52" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
      <rect x="548" y="210" width="74" height="10" rx="5" fill="rgba(255,255,255,0.22)" />
      <rect x="548" y="230" width="74" height="10" rx="5" fill={RAMP.soft} />
      <rect x="548" y="250" width="74" height="10" rx="5" fill="rgba(255,255,255,0.22)" />
      <rect x="548" y="270" width="74" height="10" rx="5" fill="rgba(255,255,255,0.22)" />
      <rect x="548" y="290" width="74" height="10" rx="5" fill={RAMP.soft} />
      <rect x="548" y="318" width="50" height="16" rx="8" fill={RAMP.gold} />

      {/* --- tablet: schedule / jobs --- */}
      <rect x="60" y="150" width="200" height="290" rx="18" fill={RAMP.panel} stroke={RAMP.panelStroke} strokeWidth="2" />
      <rect x="74" y="176" width="172" height="238" rx="8" fill="#fff" />
      <rect x="120" y="160" width="80" height="7" rx="3.5" fill={RAMP.panelStroke} />
      <rect x="86" y="190" width="90" height="9" rx="4.5" fill={RAMP.primary} />
      {/* schedule rows */}
      <rect x="86" y="212" width="148" height="34" rx="6" fill={RAMP.panel} />
      <circle cx="104" cy="229" r="9" fill="url(#psBadge)" />
      <rect x="120" y="220" width="70" height="7" rx="3.5" fill={RAMP.soft} />
      <rect x="120" y="233" width="46" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="86" y="254" width="148" height="34" rx="6" fill={RAMP.panel} />
      <circle cx="104" cy="271" r="9" fill={RAMP.gold} />
      <rect x="120" y="262" width="70" height="7" rx="3.5" fill={RAMP.soft} />
      <rect x="120" y="275" width="46" height="6" rx="3" fill={RAMP.panelStroke} />
      <rect x="86" y="296" width="148" height="34" rx="6" fill={RAMP.panel} />
      <circle cx="104" cy="313" r="9" fill="url(#psBadge)" />
      <rect x="120" y="304" width="70" height="7" rx="3.5" fill={RAMP.soft} />
      <rect x="120" y="317" width="46" height="6" rx="3" fill={RAMP.panelStroke} />
      {/* progress */}
      <rect x="86" y="348" width="148" height="10" rx="5" fill={RAMP.panel} />
      <rect x="86" y="348" width="96" height="10" rx="5" fill="url(#psBar)" />
      <rect x="86" y="372" width="104" height="8" rx="4" fill={RAMP.panelStroke} />

      {/* --- phone: status card --- */}
      <rect x="760" y="200" width="124" height="244" rx="20" fill="#0b1e42" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
      <rect x="770" y="216" width="104" height="212" rx="10" fill="url(#psScreen)" />
      <rect x="800" y="206" width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
      <rect x="782" y="230" width="60" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
      <rect x="782" y="250" width="80" height="44" rx="8" fill="rgba(127,176,232,0.16)" />
      <circle cx="798" cy="272" r="9" fill={RAMP.gold} />
      <path d="m793.5 272 3.4 3.4 6-6.8" stroke="#0b1e42" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="814" y="262" width="42" height="7" rx="3.5" fill="rgba(255,255,255,0.4)" />
      <rect x="814" y="276" width="30" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="782" y="306" width="80" height="44" rx="8" fill="rgba(127,176,232,0.16)" />
      <circle cx="798" cy="328" r="9" fill="url(#psBadge)" />
      <rect x="814" y="318" width="42" height="7" rx="3.5" fill="rgba(255,255,255,0.4)" />
      <rect x="814" y="332" width="30" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="782" y="366" width="80" height="26" rx="13" fill={RAMP.gold} />
      <rect x="800" y="376" width="44" height="6" rx="3" fill="#0b1e42" opacity="0.8" />

      {/* --- connectors: one platform --- */}
      <path d="M260 260c20 0 26 6 40 6" stroke={RAMP.soft} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.9" />
      <path d="M660 300c40 0 60 14 100 16" stroke={RAMP.soft} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.9" />
      <circle cx="285" cy="264" r="5" fill={RAMP.gold} />
      <circle cx="712" cy="308" r="5" fill={RAMP.gold} />

      {/* floating nodes */}
      <circle cx="120" cy="80" r="6" fill={RAMP.soft} opacity="0.5" />
      <circle cx="880" cy="110" r="5" fill={RAMP.soft} opacity="0.5" />
      <circle cx="740" cy="70" r="4" fill={RAMP.gold} opacity="0.7" />
    </svg>
  );
}
