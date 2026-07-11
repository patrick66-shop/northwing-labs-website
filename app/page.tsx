import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProblemRecognition from "@/components/ProblemRecognition";
import ServicesOverview from "@/components/ServicesOverview";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import HowWeWork from "@/components/HowWeWork";
import CaseStudySection from "@/components/CaseStudySection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhyNorthWing from "@/components/WhyNorthWing";

/* Approved case study copy from GitHub issue #8 + the visual polish
 * pass (Results rename, tightened Challenge copy, solution lead,
 * CTA wording) — do not edit.
 * First instance of the reusable CaseStudySection; future projects
 * (HVAC, construction, inventory, …) supply their own props. */
const WOODWORKING_CASE_STUDY = {
  eyebrow: "CASE STUDY",
  title: "Custom Business Management Platform",
  description:
    "See how NorthWing Labs partnered with a custom woodworking business to replace disconnected spreadsheets and manual workflows with an integrated business management platform.",
  showcaseImage: {
    src: "/images/case-studies/woodworking-toolkit-showcase.webp",
    alt: "Custom business management platform case study, built for a custom woodworking business: a dashboard with revenue, profit, and order charts on a laptop, a quote and proposal builder on a tablet, and an order tracker on a phone, connected by a settings-to-dashboard workflow.",
    width: 1536,
    height: 1024,
  },
  challenge:
    "Manual spreadsheets, disconnected information, and repetitive workflows slowed down pricing, quoting, reporting, and order management.",
  solutionLead: "One connected business platform.",
  solution:
    "NorthWing Labs designed an integrated platform connecting pricing, quotes, orders, dashboards, and business settings into one workflow.",
  businessOutcomes: [
    "Accurate Pricing",
    "Professional Quotes",
    "Connected Workflow",
    "Order Tracking",
    "Profit Visibility",
    "Better Business Decisions",
  ],
  buttonText: "View the Complete Case Study →",
  buttonLink: "#", // dedicated Case Study page arrives in a future sprint
};

/*
 * Homepage — built in approved stages (docs/CLAUDE-IMPLEMENTATION-BRIEF.md §17).
 * Current stage: sections 1–7 plus Who We Work With (issue #11) and Why
 * NorthWing Labs (issue #13). Remaining sections (Results, Final CTA,
 * Footer) arrive in later issues.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <ProblemRecognition />
      <ServicesOverview />
      <BusinessOutcomes />
      <HowWeWork />
      <CaseStudySection {...WOODWORKING_CASE_STUDY} id="work" />
      <WhoWeWorkWith />
      <WhyNorthWing />
    </>
  );
}
