import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ServicesHero from "@/components/ServicesHero";
import ServiceNarrative from "@/components/ServiceNarrative";
import CaseStudySection from "@/components/CaseStudySection";
import ProblemChecklist from "@/components/ProblemChecklist";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* SEO metadata per docs/WORK-PAGE-CONTENT.md (drafted copy, pending
   Product Owner approval). The layout template appends
   "| NorthWing Labs". */
const PAGE_TITLE = "Our Work";
const PAGE_DESCRIPTION =
  "Real NorthWing Labs work, honestly labeled — a connected business management platform built for a custom woodworking business, and the systems behind this website.";
const SOCIAL_DESCRIPTION =
  "Real work, honestly labeled — no fictional clients, no invented results. See what NorthWing Labs actually builds.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: SOCIAL_DESCRIPTION,
    url: "/work",
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

/* Approved case study copy from GitHub issue #8 + the visual polish
   pass — identical to the homepage instance (do not edit); only the
   transparency label (SITEMAP §6) and CTA are page-specific, per
   docs/WORK-PAGE-CONTENT.md. */
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
  label: "Internal product — built for our founder’s woodworking business",
  buttonText: "Start a Conversation →",
  buttonLink: "/contact",
};

/*
 * Work page — copy per docs/WORK-PAGE-CONTENT.md (draft pending
 * Product Owner approval; the featured case study reuses the approved
 * homepage copy verbatim). Structure per SITEMAP §6: Hero → How to
 * Read This Page → Featured Case Study (labeled) → Inside the Build →
 * This Website → What This Work Shows → Final CTA.
 */
export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <ServicesHero
        headingId="work-hero-heading"
        eyebrow="OUR WORK"
        heading="Real work, honestly labeled."
        copy="NorthWing Labs shows working software, not borrowed logos. Everything on this page is something we actually built — and each example is labeled for exactly what it is."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "See the Featured Build", href: "#woodworking-toolkit" }}
        trust="No fictional clients. No invented results. As new work ships, it appears here the same way."
      />
      <ServiceNarrative
        eyebrow="HOW TO READ THIS PAGE"
        heading="Every example is labeled for what it is."
        headingId="how-to-read-heading"
        paragraphs={[
          "Some studios fill this page with embellished case studies and logos you cannot verify. We would rather show you fewer things that are real. Each item here carries a label: an internal product we built and run, a demonstration we created to show an approach, or a client project.",
          "As client work ships, it will appear here the same way — real, specific, and labeled.",
        ]}
      />
      <CaseStudySection
        {...WOODWORKING_CASE_STUDY}
        id="woodworking-toolkit"
        headingId="woodworking-toolkit-heading"
      />
      <ServiceNarrative
        eyebrow="INSIDE THE BUILD"
        heading="From spreadsheet chaos to one connected platform."
        headingId="inside-the-build-heading"
        paragraphs={[
          "The platform connects the numbers a small shop lives on: pricing that accounts for materials, labor, and overhead; a quote and proposal builder that turns pricing into professional paperwork; order tracking from deposit to delivery; and dashboards that show revenue, profit, and what deserves attention — all driven by one set of business settings.",
          "It began inside our founder’s own custom woodworking business, which means it was built by someone who had to live with the results. That is the standard we bring to client work.",
        ]}
      />
      <ServiceNarrative
        eyebrow="THIS WEBSITE"
        heading="You are looking at one of our builds right now."
        headingId="this-website-heading"
        variant="light"
        paragraphs={[
          <>
            This website is a NorthWing Labs project like any other: a
            documented brand system, a reusable component library, and the
            same <Link href="/process">seven-step process</Link> we run for
            client work — designed, built, reviewed, and improved in stages.
          </>,
          <>
            It also runs on what we sell. The{" "}
            <Link href="/contact">contact workflow</Link> that receives your
            inquiry — validation, delivery, confirmation — is the same kind
            of practical automation we build for customers.
          </>,
        ]}
      />
      <ProblemChecklist
        id="what-this-work-shows"
        headingId="what-this-work-shows-heading"
        eyebrow="WHAT THIS WORK SHOWS"
        heading="Capabilities you can see for yourself."
        copy="Between the platform and this site, the work demonstrates:"
        items={[
          "Connected business platforms, not isolated tools.",
          "Pricing, quoting, and order workflows.",
          "Dashboards and profit visibility.",
          "Design systems built from a brand foundation.",
          "Responsive, accessible implementation.",
          "A staged, reviewable build process.",
        ]}
      />
      <FinalCTA
        eyebrow="LET’S BUILD THE NEXT ONE"
        heading="Your project could be the next thing on this page."
        copy="Tell us about the workflow, the product idea, or the manual process that needs to become software. We would rather show real work than talk about hypothetical work — and that starts with yours."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Explore Our Services", href: "/services" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
