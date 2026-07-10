import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import SiteContainer from "@/components/SiteContainer";
import SupportingCopy from "@/components/SupportingCopy";

/*
 * Homepage — built in approved stages (docs/CLAUDE-IMPLEMENTATION-BRIEF.md §17).
 * Stage 2: Header + Hero. Sections below the hero arrive in later issues;
 * the placeholder below exists only to allow scroll-state verification.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <SectionWrapper variant="light" aria-label="Placeholder for upcoming sections">
        <SiteContainer>
          <SupportingCopy>
            Homepage sections continue in upcoming implementation stages.
          </SupportingCopy>
        </SiteContainer>
      </SectionWrapper>
    </>
  );
}
