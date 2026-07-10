import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import ServiceCard from "./ServiceCard";
import SecondaryButton from "./SecondaryButton";
import styles from "./ServicesOverview.module.css";

/* Approved production copy from docs/WEBSITE-CONTENT.md §4 and approved
   service icons from ASSET-MANIFEST §3 — do not edit.
   iconDisplay values are computed from each source file's visible-artwork
   bounding box so all five icons render at consistent perceived size,
   centered in the shared icon area (see ServiceCard). */
const SERVICES = [
  {
    title: "Custom Software",
    icon: "/brand/icons/services/custom-software.png",
    iconDisplay: { width: 210, left: -54, top: -12 },
    copy: "Software built around your workflow, data, customers, and operational needs.",
  },
  {
    title: "AI Tools",
    icon: "/brand/icons/services/ai-tools.png",
    iconDisplay: { width: 140, left: -15, top: 5 },
    copy: "Practical AI assistants and tools that help your team work faster, organize information, and make better use of business knowledge.",
  },
  {
    title: "Business Automation",
    icon: "/brand/icons/services/business-automation.png",
    iconDisplay: { width: 157, left: -22, top: 0 },
    copy: "Connected workflows that reduce repetitive tasks, improve follow-up, and keep information moving between systems.",
  },
  {
    title: "Mobile Apps",
    icon: "/brand/icons/services/mobile-apps.png",
    iconDisplay: { width: 129, left: -10, top: 4 },
    copy: "Purpose-built mobile experiences for customers, employees, field teams, and business operations.",
  },
  {
    title: "SaaS Development",
    icon: "/brand/icons/services/saas-development.png",
    iconDisplay: { width: 124, left: -7, top: 6 },
    copy: "From concept to working product, NorthWing Labs helps design and build software products that can serve customers at scale.",
  },
];

/**
 * Services Overview — homepage section 4 (HOMEPAGE-DESIGN-SPEC §8).
 * Clean Wing White section; 3 + 2 centered card layout on desktop,
 * 2 columns tablet, 1 column mobile; navigational CTA below the grid.
 */
export default function ServicesOverview() {
  return (
    <SectionWrapper variant="light" aria-labelledby="services-heading">
      <SiteContainer>
        <SectionHeader
          eyebrow="WHAT WE BUILD"
          heading="Technology that fits the way your business actually works."
          headingId="services-heading"
        >
          <SupportingCopy>
            Every business has different workflows, customers, systems, and
            constraints.
          </SupportingCopy>
          <SupportingCopy>
            NorthWing Labs designs practical solutions around the real problem
            instead of forcing the business into a generic tool.
          </SupportingCopy>
        </SectionHeader>
        <ul className={styles.grid}>
          {SERVICES.map((service) => (
            <li key={service.title} className={styles.cell}>
              <ServiceCard
                title={service.title}
                icon={service.icon}
                iconDisplay={service.iconDisplay}
              >
                {service.copy}
              </ServiceCard>
            </li>
          ))}
        </ul>
        <div className={styles.ctaRow}>
          <SecondaryButton variant="on-light" href="/services">
            Explore Our Services
          </SecondaryButton>
        </div>
      </SiteContainer>
    </SectionWrapper>
  );
}
