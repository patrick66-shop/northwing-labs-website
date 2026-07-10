import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProblemRecognition from "@/components/ProblemRecognition";
import ServicesOverview from "@/components/ServicesOverview";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import HowWeWork from "@/components/HowWeWork";

/*
 * Homepage — built in approved stages (docs/CLAUDE-IMPLEMENTATION-BRIEF.md §17).
 * Current stage: sections 1–6 (through How We Work). Remaining sections
 * (Featured Work, Why NorthWing, Results, Final CTA, Footer) arrive in
 * later issues.
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
    </>
  );
}
