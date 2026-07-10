import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import ServiceCard from "./ServiceCard";
import SecondaryButton from "./SecondaryButton";
import styles from "./ServicesOverview.module.css";

/* Approved production copy from docs/WEBSITE-CONTENT.md §4 and approved
   service icons from ASSET-MANIFEST §3 — do not edit. */
const SERVICES = [
  {
    title: "Custom Software",
    icon: "/brand/icons/services/custom-software.png",
    copy: "Software built around your workflow, data, customers, and operational needs.",
  },
  {
    title: "AI Tools",
    icon: "/brand/icons/services/ai-tools.png",
    copy: "Practical AI assistants and tools that help your team work faster, organize information, and make better use of business knowledge.",
  },
  {
    title: "Business Automation",
    icon: "/brand/icons/services/business-automation.png",
    copy: "Connected workflows that reduce repetitive tasks, improve follow-up, and keep information moving between systems.",
  },
  {
    title: "Mobile Apps",
    icon: "/brand/icons/services/mobile-apps.png",
    copy: "Purpose-built mobile experiences for customers, employees, field teams, and business operations.",
  },
  {
    title: "SaaS Development",
    icon: "/brand/icons/services/saas-development.png",
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
              <ServiceCard title={service.title} icon={service.icon}>
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
