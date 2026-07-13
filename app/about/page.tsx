import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ServicesHero from "@/components/ServicesHero";
import ServiceNarrative from "@/components/ServiceNarrative";
import ProblemChecklist from "@/components/ProblemChecklist";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* SEO metadata per docs/ABOUT-PAGE-CONTENT.md (drafted copy, pending
   Product Owner approval). The layout template appends
   "| NorthWing Labs". */
const PAGE_TITLE = "About Us";
const PAGE_DESCRIPTION =
  "NorthWing Labs was founded on thirty years of business-systems experience and the firsthand reality of running a small business. Business understanding first, technology second.";
const SOCIAL_DESCRIPTION =
  "Business understanding first, technology second — built by someone who has lived on both sides of the desk.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: SOCIAL_DESCRIPTION,
    url: "/about",
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

/*
 * About page — copy per docs/ABOUT-PAGE-CONTENT.md (draft pending
 * Product Owner approval; Mission and Vision are approved
 * 01_Brand_Foundation.md copy verbatim). Structure per SITEMAP §8:
 * Hero → Why NorthWing Labs Exists → Mission → Who We Help →
 * Our Approach → What We Believe → Founder Story → Final CTA.
 */
export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <ServicesHero
        headingId="about-hero-heading"
        eyebrow="ABOUT NORTHWING LABS"
        heading="The business came first. The technology followed."
        copy="NorthWing Labs was founded on thirty years of business-systems consulting and the hands-on reality of running a small business. We build practical software because we have been the ones who needed it."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Meet the Founder", href: "#founder-story" }}
        trust="Not a large agency. Not a generic dev shop. A practical technology partner."
      />
      <ServiceNarrative
        eyebrow="WHY NORTHWING LABS EXISTS"
        heading="Small businesses deserve better than enterprise leftovers."
        headingId="why-we-exist-heading"
        paragraphs={[
          "Most business technology is built for companies with IT departments, procurement processes, and six-figure budgets. Small businesses get the leftovers: generic tools that almost fit, spreadsheets stretched past their limits, and manual work filling every gap.",
          "NorthWing Labs exists to close that gap — building practical software, AI tools, and automation around the way small businesses actually operate.",
        ]}
      />
      <ServiceNarrative
        eyebrow="OUR MISSION"
        heading="Help small businesses harness software and AI through practical, affordable, results-driven solutions."
        headingId="mission-heading"
        variant="dark"
        paragraphs={[
          "Become a trusted technology partner for small businesses by making software, AI, and automation practical, accessible, and valuable.",
        ]}
      />
      <ServiceNarrative
        eyebrow="WHO WE HELP"
        heading="Growing small businesses and the people who run them."
        headingId="who-we-help-heading"
        variant="light"
        paragraphs={[
          <>
            Service businesses, trades and contractors, and product
            businesses — owner-led teams dealing with manual work,
            disconnected tools, slow follow-up, and limited visibility.{" "}
            <Link href="/services">Our services</Link> are built around
            those problems.
          </>,
          <>
            We also work with entrepreneurs and small teams turning deep
            industry knowledge into a{" "}
            <Link href="/services/saas-development">software product</Link>.
            Either way, you will find the work honestly documented on{" "}
            <Link href="/work">our Work page</Link>.
          </>,
        ]}
      />
      <ProblemChecklist
        id="our-approach"
        headingId="our-approach-heading"
        eyebrow="OUR APPROACH"
        heading="What working with us is designed around."
        copy="Six commitments, every engagement:"
        items={[
          "Direct access — you work with the people doing the work.",
          "Clear communication in plain business language.",
          "Practical problem solving over impressive technology.",
          "Real understanding of small-business operations.",
          "Responsible technology choices you can actually maintain.",
          "A long-term partnership mindset, not a one-off transaction.",
        ]}
      />
      <ServiceNarrative
        eyebrow="WHAT WE BELIEVE"
        heading="Start before perfect. Learn by building. Never quit."
        headingId="what-we-believe-heading"
        paragraphs={[
          "We believe you can accomplish almost anything with steady work, a positive outlook, and a refusal to quit. And we believe the best way to start is to start — not to wait for perfect requirements, perfect timing, or a perfect plan.",
          "That is how we build software, too: begin with the smallest version that solves the real problem, put it to work, and improve it with what reality teaches.",
        ]}
      />
      <ServiceNarrative
        id="founder-story"
        eyebrow="FOUNDER STORY"
        heading="From the boardroom to the workshop to NorthWing Labs."
        headingId="founder-story-heading"
        variant="light"
        paragraphs={[
          "Patrick Nichols spent thirty years as a business-systems consultant, helping companies untangle how work gets done. When he retired from corporate life, he did what he had always wanted to do: opened a custom woodworking shop, Nichols Woodworking Co.",
          <>
            Running a small business made the problems personal. Pricing
            meant guessing. Quoting meant spreadsheets. Every order meant
            retyping the same information somewhere else. So he did what
            thirty years of systems thinking taught him to do — he{" "}
            <Link href="/work#woodworking-toolkit">
              built the tool he needed
            </Link>
            : a platform that replaced guesswork with real costs, real
            margins, and confident quotes.
          </>,
          "NorthWing Labs is that story, turned into a company: business understanding first, technology second, built by someone who has lived on both sides of the desk.",
        ]}
      />
      <FinalCTA
        eyebrow="LET’S TALK"
        heading="Let’s talk about your business."
        copy="Whether it starts as a question, an idea, or a workflow that is quietly eating your week — a conversation costs nothing and usually helps."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "See Our Work", href: "/work" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
