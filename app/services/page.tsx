import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ServicesHero from "@/components/ServicesHero";
import ProblemChecklist from "@/components/ProblemChecklist";
import ServiceSelection from "@/components/ServiceSelection";
import WhatWeCanBuild from "@/components/WhatWeCanBuild";
import ServiceFitSteps from "@/components/ServiceFitSteps";
import ServicesOutcomes from "@/components/ServicesOutcomes";
import ServiceComparison from "@/components/ServiceComparison";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* Approved SEO metadata from GitHub issue #16. The layout template
   appends "| NorthWing Labs" to the title. */
const PAGE_TITLE = "Custom Software, AI & Automation Services";
const PAGE_DESCRIPTION =
  "NorthWing Labs helps growing small businesses reduce manual work and improve operations through custom software, AI tools, automation, mobile apps, and SaaS development.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: PAGE_DESCRIPTION,
    url: "/services",
    images: [
      {
        url: "/images/social/northwing-social-share-default.png",
        width: 1536,
        height: 1024,
        alt: "NorthWing Labs — Software, AI, and Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: PAGE_DESCRIPTION,
    images: ["/images/social/northwing-social-share-default.png"],
  },
};

/*
 * Services Overview page — GitHub issue #16.
 * Narrative: Hero → Recognize the Problem → Choose the Right Service →
 * What We Can Build → How We Determine What Fits → Business Outcomes →
 * Final CTA → Footer. Service-detail routes linked from the cards are
 * built in later issues.
 */
export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <ServicesHero />
      <ProblemChecklist />
      <ServiceSelection />
      <WhatWeCanBuild />
      <ServiceFitSteps />
      <ServicesOutcomes />
      <ServiceComparison />
      <FinalCTA
        heading="Start with the problem. We will help define what comes next."
        copy="Tell us what is slowing your business down, what you wish worked better, or what you are ready to build. NorthWing Labs will help turn that need into a practical path forward."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "See How We Work", href: "/process" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
