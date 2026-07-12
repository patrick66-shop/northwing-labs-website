import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./WhatWeCanBuild.module.css";

/* Approved capability examples from GitHub issue #16 — do not edit. */
const CAPABILITIES = [
  "Customer and Lead Management",
  "Pricing and Quoting Systems",
  "Order and Project Tracking",
  "Scheduling and Field Workflows",
  "Customer Portals",
  "Business Dashboards and Reporting",
  "AI Knowledge Assistants",
  "Document and Data Automation",
  "Mobile Tools for Teams",
  "SaaS Products",
];

/**
 * What We Can Build — services page section 4 (GitHub issue #16).
 * A deliberately concise pill grid on the tinted band: broadens the
 * visitor's sense of what is possible without becoming a feature
 * inventory.
 */
export default function WhatWeCanBuild() {
  return (
    <SectionWrapper
      variant="tinted"
      id="what-we-can-build"
      aria-labelledby="capabilities-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="EXAMPLES OF WHAT IS POSSIBLE"
          heading="From focused workflow improvements to complete business platforms."
          headingId="capabilities-heading"
          align="center"
          animate
        >
          <SupportingCopy>
            A NorthWing Labs solution may be a small automation, a custom
            dashboard, a customer portal, a mobile application, or a
            connected platform that supports the entire business.
          </SupportingCopy>
        </SectionHeader>

        <ul className={styles.pillList}>
          {CAPABILITIES.map((capability, index) => (
            <Reveal as="li" variant="up" delay={index * 50} key={capability}>
              <span className={styles.pill}>
                <span className={styles.dot} aria-hidden="true" />
                {capability}
              </span>
            </Reveal>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
