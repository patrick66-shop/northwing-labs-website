import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ServicesHero from "@/components/ServicesHero";
import ServiceNarrative from "@/components/ServiceNarrative";
import SolutionGrid, { type SolutionItem } from "@/components/SolutionGrid";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* SEO metadata per docs/SOLUTIONS-PAGE-CONTENT.md (drafted copy,
   pending Product Owner approval). The layout template appends
   "| NorthWing Labs". */
const PAGE_TITLE = "Small Business Technology Solutions";
const PAGE_DESCRIPTION =
  "Start with the business problem — manual work, slow customer response, disconnected systems, limited visibility, fragile spreadsheets, or a product idea — and NorthWing Labs will design the right technology response.";
const SOCIAL_DESCRIPTION =
  "You know the problem. We design the technology response. Six problems NorthWing Labs solves again and again.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: SOCIAL_DESCRIPTION,
    url: "/solutions",
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
    description: SOCIAL_DESCRIPTION,
    images: ["/images/social/northwing-social-share-default.png"],
  },
};

/* Solution category titles are the approved SITEMAP §5 set, verbatim.
   Problem, outcome, and routing copy per docs/SOLUTIONS-PAGE-CONTENT.md
   (Claude Code draft, 2026-07-12), pending Product Owner approval. */
const SOLUTIONS: SolutionItem[] = [
  {
    title: "Save Time and Reduce Manual Work",
    problem:
      "Hours disappear into retyping, copying between systems, formatting documents, and chasing routine follow-up — work that repeats every week and never gets easier.",
    outcome: "Routine work runs itself; people do the work only people can do.",
    links: [
      { label: "Business Automation", href: "/services/business-automation" },
      { label: "Custom Software", href: "/services/custom-software" },
    ],
  },
  {
    title: "Improve Customer Response",
    problem:
      "Inquiries sit unanswered, quotes go out days late, and follow-up depends on someone remembering — while customers quietly compare you to whoever answered first.",
    outcome: "Customers hear back fast, every time, without heroics.",
    links: [
      { label: "Business Automation", href: "/services/business-automation" },
      { label: "AI Tools", href: "/services/ai-tools" },
    ],
  },
  {
    title: "Connect Disconnected Systems",
    problem:
      "Email, spreadsheets, calendars, accounting, job boards — each tool works, but nothing talks to anything, so your people have become the integration.",
    outcome: "Information moves between systems on its own.",
    links: [
      { label: "Business Automation", href: "/services/business-automation" },
      { label: "Custom Software", href: "/services/custom-software" },
    ],
  },
  {
    title: "Improve Business Visibility",
    problem:
      "Job status lives in people's heads, the numbers arrive after the month is over, and questions get answered by walking around and asking.",
    outcome:
      "One glance shows what is happening, what is waiting, and what is slipping.",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "AI Tools", href: "/services/ai-tools" },
    ],
  },
  {
    title: "Modernize Spreadsheet Processes",
    problem:
      "The business runs on a heroic spreadsheet only one person fully understands — growing more fragile with every row, formula, and copy saved to a desktop.",
    outcome:
      "A real system: multi-user, reliable, and built for how the work flows.",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Business Automation", href: "/services/business-automation" },
    ],
  },
  {
    title: "Build New Digital Products",
    problem:
      "You understand an industry problem deeply and can picture the product — but there is no path from the idea in your head to software customers can use.",
    outcome: "A focused first version, launched and learning.",
    links: [
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
    ],
  },
];

/*
 * Solutions page — copy per docs/SOLUTIONS-PAGE-CONTENT.md (draft
 * pending Product Owner approval; category titles are approved
 * SITEMAP §5 copy verbatim). Problem-first hub per the approved
 * positioning principle: Hero → Problem First → The Solutions →
 * Final CTA.
 */
export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <ServicesHero
        headingId="solutions-hero-heading"
        eyebrow="SOLUTIONS"
        heading="Start with the problem. We’ll find the right technology."
        copy="Most owners can describe exactly what is slowing the business down — not which technology fixes it. That is our job. Find your problem below, and we will show you where it leads."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Find Your Problem", href: "#the-solutions" }}
        trust="If we are not the right fit for yours, we will say so — and point you somewhere useful."
      />
      <ServiceNarrative
        eyebrow="PROBLEM FIRST"
        heading="You don’t need a technology shopping list."
        headingId="problem-first-heading"
        paragraphs={[
          "Nobody runs a business thinking “we should buy some workflow automation.” They think: quotes go out late, the schedule lives on a whiteboard, and Friday disappears into copying numbers between spreadsheets.",
          <>
            So this page is organized the way owners actually talk. Each
            problem below maps to the services we would draw on — and every
            engagement starts the same way regardless:{" "}
            <Link href="/process">understanding the workflow first</Link>.
          </>,
        ]}
      />
      <SolutionGrid
        id="the-solutions"
        eyebrow="THE SOLUTIONS"
        heading="Six problems we solve again and again."
        headingId="the-solutions-heading"
        copy="The problem in your words, the change you should expect, and where it usually leads."
        solutions={SOLUTIONS}
      />
      <FinalCTA
        eyebrow="DON’T SEE YOUR PROBLEM?"
        heading="Every business has one workflow everyone complains about."
        copy="Tell us about yours. If technology is the answer, we will design the simplest version of it. If it is not, we will tell you that too."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Explore Our Services", href: "/services" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
