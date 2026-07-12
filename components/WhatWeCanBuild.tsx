import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./WhatWeCanBuild.module.css";

/* Approved capability examples from GitHub issue #16 — do not edit. */
const SERVICES_PAGE_CAPABILITIES = [
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

type WhatWeCanBuildProps = {
  /** All content defaults to the services overview page (issue #16);
   * other pages pass their own examples (e.g. the Custom Software
   * page's typical-projects chips). */
  eyebrow?: string;
  heading?: string;
  headingId?: string;
  copy?: React.ReactNode;
  items?: string[];
};

/**
 * WhatWeCanBuild — concise pill-cloud section on the tinted band,
 * shared by the services pages: broadens the visitor's sense of what
 * is possible without becoming a feature inventory.
 */
export default function WhatWeCanBuild({
  eyebrow = "EXAMPLES OF WHAT IS POSSIBLE",
  heading = "From focused workflow improvements to complete business platforms.",
  headingId = "capabilities-heading",
  copy = "A NorthWing Labs solution may be a small automation, a custom dashboard, a customer portal, a mobile application, or a connected platform that supports the entire business.",
  items = SERVICES_PAGE_CAPABILITIES,
}: WhatWeCanBuildProps) {
  return (
    <SectionWrapper
      variant="tinted"
      id="what-we-can-build"
      aria-labelledby={headingId}
    >
      <SiteContainer>
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          headingId={headingId}
          align="center"
          animate
        >
          <SupportingCopy>{copy}</SupportingCopy>
        </SectionHeader>

        <ul className={styles.pillList}>
          {items.map((item, index) => (
            <Reveal as="li" variant="up" delay={index * 50} key={item}>
              <span className={styles.pill}>
                <span className={styles.dot} aria-hidden="true" />
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
