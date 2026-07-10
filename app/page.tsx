import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProblemRecognition from "@/components/ProblemRecognition";
import ServicesOverview from "@/components/ServicesOverview";

/*
 * Homepage — built in approved stages (docs/CLAUDE-IMPLEMENTATION-BRIEF.md §17).
 * Current stage: Header + Hero + Problem Recognition + Services Overview.
 * Remaining sections (Outcomes, Process, Featured Work, Why NorthWing,
 * Results, Final CTA, Footer) arrive in later issues.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <ProblemRecognition />
      <ServicesOverview />
    </>
  );
}
