import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import styles from "./ServiceSelection.module.css";

/* Approved copy and routes from GitHub issue #16 — do not edit.
   iconDisplay values are the homepage-approved per-icon presentation
   numbers (see ServiceCard) so both pages render the icons at the
   same perceived size. */
type ServiceOverviewItem = {
  title: string;
  tagline: string;
  description: string;
  bestFit: string;
  icon: string;
  iconDisplay: { width: number; left: number; top: number };
  href: string;
  ctaLabel: string;
};

const SERVICES: ServiceOverviewItem[] = [
  {
    title: "Custom Software",
    tagline: "Software designed around your workflow.",
    description:
      "Build internal tools, customer portals, management systems, dashboards, and business applications that fit the way your company actually operates.",
    bestFit:
      "Best when spreadsheets or generic software can no longer support the workflow.",
    icon: "/brand/icons/services/custom-software.png",
    iconDisplay: { width: 309, left: -106, top: -28 },
    href: "/services/custom-software",
    ctaLabel: "Explore Custom Software →",
  },
  {
    title: "AI Tools",
    tagline: "Put business knowledge to work.",
    description:
      "Create practical AI assistants and tools that organize information, support decisions, improve customer response, and help teams work faster.",
    bestFit:
      "Best when your team spends too much time searching, summarizing, organizing, or answering the same questions.",
    icon: "/brand/icons/services/ai-tools.png",
    iconDisplay: { width: 214, left: -54, top: -12 },
    href: "/services/ai-tools",
    ctaLabel: "Explore AI Tools →",
  },
  {
    title: "Business Automation",
    tagline: "Reduce repetitive work and missed follow-up.",
    description:
      "Connect tools and workflows so information moves automatically between forms, email, customer records, scheduling, quotes, orders, and reporting.",
    bestFit:
      "Best when people repeatedly copy information, send routine updates, or move work manually between systems.",
    icon: "/brand/icons/services/business-automation.png",
    iconDisplay: { width: 202, left: -32, top: 3 },
    href: "/services/business-automation",
    ctaLabel: "Explore Business Automation →",
  },
  {
    title: "Mobile Apps",
    tagline: "Give customers and teams access anywhere.",
    description:
      "Build purpose-designed mobile experiences for customers, employees, field teams, scheduling, communication, data collection, and business operations.",
    bestFit:
      "Best when important work happens away from a desk or customers need a simpler way to interact with the business.",
    icon: "/brand/icons/services/mobile-apps.png",
    iconDisplay: { width: 194, left: -45, top: -10 },
    href: "/services/mobile-apps",
    ctaLabel: "Explore Mobile Apps →",
  },
  {
    title: "SaaS Development",
    tagline: "Turn a software idea into a working product.",
    description:
      "Move from product concept to requirements, user experience, architecture, development, testing, launch, and continued improvement.",
    bestFit:
      "Best for entrepreneurs and small teams building a software product that will serve multiple customers.",
    icon: "/brand/icons/services/saas-development.png",
    iconDisplay: { width: 186, left: -42, top: -9 },
    href: "/services/saas-development",
    ctaLabel: "Explore SaaS Development →",
  },
];

/**
 * Service selection — services page section 3 (GitHub issue #16).
 * Five ServiceCards extended with tagline, best-fit statement, and an
 * explicit CTA link to each future service-detail route. 3 + 2
 * centered on desktop, 2 columns tablet, 1 column mobile — the same
 * flex-wrap approach as the homepage ServicesOverview.
 */
export default function ServiceSelection() {
  return (
    <SectionWrapper
      variant="light"
      id="what-we-build"
      aria-labelledby="service-selection-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="WHAT WE BUILD"
          heading="Choose the capability that best matches your business need."
          headingId="service-selection-heading"
          align="center"
          animate
        >
          <SupportingCopy>
            Each service can stand alone or become part of a larger connected
            solution. NorthWing Labs will help determine the simplest approach
            that delivers meaningful value.
          </SupportingCopy>
        </SectionHeader>

        <ul className={styles.grid}>
          {SERVICES.map((service, index) => (
            <Reveal
              as="li"
              variant="up"
              delay={index * 90}
              key={service.title}
              className={styles.cell}
            >
              <ServiceCard
                title={service.title}
                icon={service.icon}
                iconDisplay={service.iconDisplay}
                tagline={service.tagline}
                bestFit={service.bestFit}
                cta={{ label: service.ctaLabel, href: service.href }}
              >
                {service.description}
              </ServiceCard>
            </Reveal>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
