import Image from "next/image";
import SiteContainer from "@/components/SiteContainer";
import SectionWrapper from "@/components/SectionWrapper";
import SectionEyebrow from "@/components/SectionEyebrow";
import SectionHeading from "@/components/SectionHeading";
import SupportingCopy from "@/components/SupportingCopy";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import CTAGroup from "@/components/CTAGroup";
import styles from "./page.module.css";

/*
 * TEMPORARY FOUNDATION TEST PAGE (Issue #1)
 * Verifies fonts, color tokens, spacing, radii, buttons, section variants,
 * container behavior, and asset paths. Replaced by the real homepage
 * starting with Issue #2 (Header + Hero).
 */

const brandColors = [
  { name: "NorthWing Midnight", token: "--color-midnight", hex: "#051231" },
  { name: "NorthWing Navy", token: "--color-navy", hex: "#052862" },
  { name: "NorthWing Blue", token: "--color-blue", hex: "#033F91" },
  { name: "Flight Blue", token: "--color-flight-blue", hex: "#0D69CE" },
  { name: "Flight Gold", token: "--color-flight-gold", hex: "#EDB743" },
  { name: "NorthWing Slate", token: "--color-slate", hex: "#5D6981" },
  { name: "Steel Gray", token: "--color-steel", hex: "#95979C" },
  { name: "Cloud Gray", token: "--color-cloud", hex: "#CED3DB" },
  { name: "Wing White", token: "--color-white", hex: "#FFFFFF" },
];

const spacingScale = [
  { token: "--space-1", px: 4 },
  { token: "--space-2", px: 8 },
  { token: "--space-3", px: 12 },
  { token: "--space-4", px: 16 },
  { token: "--space-5", px: 24 },
  { token: "--space-6", px: 32 },
  { token: "--space-7", px: 48 },
  { token: "--space-8", px: 64 },
  { token: "--space-9", px: 96 },
  { token: "--space-10", px: 128 },
];

const radiusScale = [
  { token: "--radius-button", label: "Buttons", px: 10 },
  { token: "--radius-card-sm", label: "Small Cards", px: 14 },
  { token: "--radius-card-lg", label: "Large Cards", px: 18 },
  { token: "--radius-mockup", label: "Mockup Containers", px: 22 },
];

const assetChecks = [
  { src: "/brand/logos/Logo_Header.png", label: "/public/brand/logos/" },
  { src: "/brand/favicons/northwing-favicon-192x192.png", label: "/public/brand/favicons/" },
  { src: "/brand/icons/services/custom-software.png", label: "/public/brand/icons/services/" },
  { src: "/images/backgrounds/northwing-radial-glow-blue.png", label: "/public/images/backgrounds/" },
  { src: "/images/social/northwing-social-share-default.png", label: "/public/images/social/" },
];

export default function FoundationTestPage() {
  return (
    <>
      <SectionWrapper variant="tinted" aria-labelledby="intro-heading">
        <SiteContainer>
          <div className={styles.headerGroup}>
            <SectionEyebrow>Issue 1 — Project Foundation</SectionEyebrow>
            <SectionHeading as="h1" id="intro-heading">
              Foundation Test Page
            </SectionHeading>
            <SupportingCopy size="large">
              Temporary verification page for typography, brand tokens, spacing,
              buttons, and container behavior. This page is replaced by the
              homepage build in later issues.
            </SupportingCopy>
          </div>
        </SiteContainer>
      </SectionWrapper>

      <SectionWrapper variant="light" aria-labelledby="type-heading">
        <SiteContainer>
          <div className={styles.headerGroup}>
            <SectionEyebrow>Typography</SectionEyebrow>
            <SectionHeading id="type-heading">
              Manrope carries the brand voice.
            </SectionHeading>
            <SupportingCopy>
              Inter carries functional clarity. This paragraph is Inter 400 at
              body size with a controlled line length, sitting on a 1.6 line
              height for comfortable reading.
            </SupportingCopy>
          </div>
          <div className={styles.typeSamples}>
            <h3>H3 subsection heading — Manrope 600</h3>
            <p className={styles.bodyEmphasis}>
              Body emphasis uses Inter 600 for important phrases and lead-ins.
            </p>
            <p>
              Standard body copy with a <a href="#type-heading">text link</a> in
              Flight Blue that deepens to NorthWing Blue on hover.
            </p>
            <p className={styles.caption}>
              Caption / metadata text — Inter 400 at 14px.
            </p>
          </div>
        </SiteContainer>
      </SectionWrapper>

      <SectionWrapper variant="tinted" aria-labelledby="color-heading">
        <SiteContainer>
          <div className={styles.headerGroup}>
            <SectionEyebrow>Color Tokens</SectionEyebrow>
            <SectionHeading id="color-heading">Brand color system</SectionHeading>
          </div>
          <ul className={styles.swatchGrid}>
            {brandColors.map((color) => (
              <li key={color.token} className={styles.swatchCard}>
                <div
                  className={styles.swatch}
                  style={{ backgroundColor: `var(${color.token})` }}
                />
                <p className={styles.swatchName}>{color.name}</p>
                <p className={styles.swatchMeta}>
                  {color.token} · {color.hex}
                </p>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </SectionWrapper>

      <SectionWrapper variant="light" aria-labelledby="buttons-light-heading">
        <SiteContainer>
          <div className={styles.headerGroup}>
            <SectionEyebrow>Actions on Light</SectionEyebrow>
            <SectionHeading id="buttons-light-heading">
              Buttons and CTA grouping
            </SectionHeading>
          </div>
          <CTAGroup>
            <PrimaryButton href="#buttons-light-heading">Primary Action</PrimaryButton>
            <SecondaryButton variant="on-light" href="#buttons-light-heading">
              Secondary on Light
            </SecondaryButton>
          </CTAGroup>
          <div className={styles.buttonRow}>
            <PrimaryButton disabled>Disabled Primary</PrimaryButton>
            <SecondaryButton variant="on-light" disabled>
              Disabled Secondary
            </SecondaryButton>
          </div>
        </SiteContainer>
      </SectionWrapper>

      <SectionWrapper variant="dark" aria-labelledby="dark-heading">
        <SiteContainer>
          <div className={styles.headerGroup}>
            <SectionEyebrow>Dark Section Context</SectionEyebrow>
            <SectionHeading id="dark-heading">
              Semantic tokens adapt on dark backgrounds.
            </SectionHeading>
            <SupportingCopy>
              On NorthWing Midnight, headings switch to Wing White, supporting
              copy to Cloud Gray, and the eyebrow to Flight Gold — no per-use
              overrides required.
            </SupportingCopy>
          </div>
          <CTAGroup>
            <PrimaryButton href="#dark-heading">Primary Action</PrimaryButton>
            <SecondaryButton variant="on-dark" href="#dark-heading">
              Secondary on Dark
            </SecondaryButton>
          </CTAGroup>
        </SiteContainer>
      </SectionWrapper>

      <SectionWrapper variant="light" aria-labelledby="scale-heading">
        <SiteContainer>
          <div className={styles.headerGroup}>
            <SectionEyebrow>Spacing &amp; Radius</SectionEyebrow>
            <SectionHeading id="scale-heading">Layout scales</SectionHeading>
          </div>
          <div className={styles.scaleColumns}>
            <div>
              <h3>Spacing scale</h3>
              <ul className={styles.spacingList}>
                {spacingScale.map((step) => (
                  <li key={step.token} className={styles.spacingRow}>
                    <span className={styles.scaleLabel}>
                      {step.token} · {step.px}px
                    </span>
                    <span
                      className={styles.spacingBar}
                      style={{ width: `var(${step.token})` }}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Radius scale</h3>
              <ul className={styles.radiusList}>
                {radiusScale.map((step) => (
                  <li
                    key={step.token}
                    className={styles.radiusBox}
                    style={{ borderRadius: `var(${step.token})` }}
                  >
                    <span className={styles.scaleLabel}>
                      {step.label} · {step.px}px
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SiteContainer>
      </SectionWrapper>

      <SectionWrapper variant="tinted" aria-labelledby="assets-heading">
        <SiteContainer>
          <div className={styles.headerGroup}>
            <SectionEyebrow>Asset Paths</SectionEyebrow>
            <SectionHeading id="assets-heading">
              Approved asset directories resolve.
            </SectionHeading>
          </div>
          <ul className={styles.assetGrid}>
            {assetChecks.map((asset) => (
              <li key={asset.src} className={styles.assetCard}>
                <div className={styles.assetFrame}>
                  <Image
                    src={asset.src}
                    alt={`Asset check: ${asset.label}`}
                    fill
                    sizes="200px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={styles.swatchMeta}>{asset.label}</p>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </SectionWrapper>
    </>
  );
}
