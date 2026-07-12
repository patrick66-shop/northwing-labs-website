import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import WhatWeCanBuild from "@/components/WhatWeCanBuild";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import CustomSoftwareIllustration from "@/components/CustomSoftwareIllustration";
import ServiceProblemGrid from "@/components/ServiceProblemGrid";
import CapabilityCardGrid, {
  type CapabilityCard,
} from "@/components/CapabilityCardGrid";
import PlatformShowcase from "@/components/PlatformShowcase";
import PlatformShowcaseIllustration from "@/components/PlatformShowcaseIllustration";
import MiniProcessTimeline from "@/components/MiniProcessTimeline";
import ServicesOutcomes, { type OutcomeItem } from "@/components/ServicesOutcomes";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* SEO metadata (GitHub issue #18): the issue's "Primary H1" phrase is
   used as the page title; the visible H1 is the approved hero
   headline. The layout template appends "| NorthWing Labs". */
const PAGE_TITLE = "Custom Software Development for Small Businesses";
const PAGE_DESCRIPTION =
  "NorthWing Labs designs custom business software for growing small businesses — workflow software, business management systems, dashboards, and custom business applications that reduce manual work and support growth.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/custom-software",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: PAGE_DESCRIPTION,
    url: "/services/custom-software",
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

/* Section copy: headings marked "issue #18" are approved verbatim;
   card copy, descriptions, and FAQ answers are new copy written to
   the brand voice (no metrics, no unsupported claims). */

const PROBLEMS = [
  {
    title: "Too Many Spreadsheets",
    copy: "Critical information lives in files only one person understands, and every update risks quietly breaking a formula somewhere else.",
  },
  {
    title: "Duplicate Data Entry",
    copy: "The same customer, quote, or order gets typed into two or three different systems — and none of them quite match.",
  },
  {
    title: "Manual Approvals",
    copy: "Work sits waiting for someone to notice an email, sign off, or hand the job to the next person.",
  },
  {
    title: "Disconnected Software",
    copy: "Each tool does one job, but nothing talks to anything else — so your people become the integration.",
  },
  {
    title: "Growing Administrative Work",
    copy: "Every new customer adds more office work, and adding admin help only moves the bottleneck.",
  },
  {
    title: "Outgrown Current Tools",
    copy: "What worked at five customers strains at fifty. The business changed; the systems did not keep up.",
  },
];

const CAPABILITIES: CapabilityCard[] = [
  {
    icon: "customers",
    title: "Customer Management",
    copy: "Keep every customer, contact, and conversation in one organized place.",
  },
  {
    icon: "tracking",
    title: "Job & Project Tracking",
    copy: "See the status of every job from first call to final invoice.",
  },
  {
    icon: "estimating",
    title: "Estimating & Quotes",
    copy: "Price work consistently and send professional quotes in minutes.",
  },
  {
    icon: "scheduling",
    title: "Scheduling",
    copy: "Plan crews, appointments, and deadlines without the whiteboard.",
  },
  {
    icon: "inventory",
    title: "Inventory",
    copy: "Know what is on hand, what is committed, and what to reorder.",
  },
  {
    icon: "reporting",
    title: "Reporting Dashboards",
    copy: "Turn day-to-day activity into clear numbers you can act on.",
  },
  {
    icon: "portal",
    title: "Client Portals",
    copy: "Give customers a simple place to approve, pay, and check progress.",
  },
  {
    icon: "employee",
    title: "Employee Tools",
    copy: "Purpose-built screens for the people doing the work.",
  },
  {
    icon: "documents",
    title: "Document Management",
    copy: "Generate, organize, and find contracts, forms, and files instantly.",
  },
  {
    icon: "workflow",
    title: "Workflow Automation",
    copy: "Let routine handoffs, updates, and follow-up happen automatically.",
  },
];

/* Typical-projects chips (chat-approved refinement). */
const TYPICAL_PROJECTS = [
  "CRM Systems",
  "Customer Portals",
  "Estimating & Proposal Systems",
  "Order Tracking",
  "Project Management",
  "Inventory Management",
  "Scheduling Systems",
  "Reporting Dashboards",
  "Employee Portals",
  "Workflow Automation",
  "Business Management Platforms",
  "Membership Systems",
];

const OUTCOMES: OutcomeItem[] = [
  {
    title: "Save Hours Every Week",
    icon: "clock",
    copy: "Hand repetitive work to the system and get real hours back.",
  },
  {
    title: "Reduce Errors",
    icon: "shield-check",
    copy: "Consistent workflows replace fragile copy-and-paste steps.",
  },
  {
    title: "Increase Visibility",
    icon: "eye",
    copy: "Live dashboards show what is happening without asking around.",
  },
  {
    title: "Improve Customer Experience",
    icon: "people",
    copy: "Faster responses and fewer dropped handoffs at every touchpoint.",
  },
  {
    title: "Scale More Easily",
    icon: "growth",
    copy: "Take on more customers without adding administrative weight.",
  },
  {
    title: "Make Better Decisions",
    icon: "bolt",
    copy: "Decide on current numbers instead of month-old guesses.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "Growing small businesses and owner-led teams — service companies, trades and contractors, and product businesses. If your business runs on spreadsheets, disconnected tools, or manual follow-up, you are exactly who we build for.",
  },
  {
    question: "How much does custom software cost?",
    answer: (
      <>
        It depends on scope, and we keep the scope honest. Every engagement
        starts by defining the smallest solution that solves the real problem,
        so you see a clear picture of the investment before any build work
        begins — and you never pay for features that do not earn their place.
        The fastest way to get a real answer is to{" "}
        <Link href="/contact">start a conversation</Link>.
      </>
    ),
  },
  {
    question: "Can you improve software we already have?",
    answer:
      "Often, yes. Sometimes the right answer is extending or connecting what you already use rather than replacing it. We start by understanding your current tools and only recommend rebuilding when it genuinely serves the business.",
  },
  {
    question: "How long does a project take?",
    answer: (
      <>
        Focused tools and automations can ship in weeks; connected business
        platforms take longer. After the{" "}
        <Link href="/process">Discover and Define steps</Link> you get a
        realistic timeline broken into reviewable stages, so progress is
        visible from the start.
      </>
    ),
  },
  {
    question: "Do you build mobile apps too?",
    answer:
      "Yes. When important work happens away from a desk, we design mobile experiences for customers, employees, and field teams — either as part of your custom software or as a standalone project.",
  },
  {
    question: "Can AI be included?",
    answer: (
      <>
        Yes, where it earns its place.{" "}
        <Link href="/services/ai-tools">Practical AI tools</Link> — assistants
        that organize information, summarize records, or draft responses —
        can be built into custom software from day one or added later as your
        needs grow.
      </>
    ),
  },
  {
    question: "Will I own the software?",
    answer:
      "Yes. Software built for your business belongs to your business. We are happy to keep hosting, supporting, and improving it, but you are never locked in.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Launch is a step, not the finish line. The Improve stage measures results, gathers feedback, and refines where it adds value — and we can provide ongoing support, maintenance, and new capabilities as your business grows.",
  },
];

/*
 * Custom Software service page — GitHub issue #18.
 * Master template for the individual service pages: Hero → Why →
 * What We Build → Example Platform → Process → Outcomes → FAQ →
 * Final CTA → Footer.
 */
export default function CustomSoftwarePage() {
  return (
    <>
      <SiteHeader />
      <ServiceDetailHero
        eyebrow="CUSTOM SOFTWARE"
        heading="Custom software built around your business—not someone else’s."
        copy="Every business has unique workflows. NorthWing Labs designs custom software that fits the way your business already works, eliminating manual processes, disconnected spreadsheets, and repetitive tasks."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Explore Our Process", href: "/process" }}
        trust="Designed for growing businesses—not enterprise complexity."
        illustration={<CustomSoftwareIllustration />}
      />
      <ServiceProblemGrid
        eyebrow="WHY CUSTOM SOFTWARE?"
        heading="When off-the-shelf software isn’t enough."
        headingId="why-custom-software-heading"
        copy="Generic tools force your business to work their way. These are the signs it is time for business software that works yours."
        problems={PROBLEMS}
      />
      <CapabilityCardGrid
        eyebrow="WHAT WE BUILD"
        heading="Software designed specifically for your workflow."
        headingId="what-we-build-heading"
        copy={
          <>
            Start with one focused tool or grow into a connected business
            management system — often alongside{" "}
            <Link href="/services/business-automation">
              business automation
            </Link>{" "}
            and <Link href="/services/ai-tools">AI tools</Link>. Every piece
            is designed around how your business actually runs.
          </>
        }
        capabilities={CAPABILITIES}
      />
      <WhatWeCanBuild
        eyebrow="TYPICAL PROJECTS"
        heading="Typical Custom Software Projects"
        headingId="typical-projects-heading"
        copy="If you can describe how the work should flow, we can usually build it. These are the kinds of systems growing businesses ask for most."
        items={TYPICAL_PROJECTS}
      />
      <PlatformShowcase
        eyebrow="EXAMPLE BUSINESS PLATFORM"
        heading="Everything your business runs on, working together."
        headingId="platform-showcase-heading"
        copy={
          <>
            A custom business application can bring quoting, scheduling,
            orders, customers, and reporting into one system — on the desktop
            in the office, the tablet in the shop, and the phone in the
            field. See how one came together in{" "}
            <Link href="/work">our featured work</Link>.
          </>
        }
        emphasis="One connected business platform."
        illustration={<PlatformShowcaseIllustration />}
      />
      <MiniProcessTimeline
        eyebrow="OUR DEVELOPMENT PROCESS"
        heading="A clear, reviewable path from idea to working software."
        headingId="development-process-heading"
        copy="The same seven-step process behind every NorthWing Labs project keeps you involved at every stage."
      />
      <ServicesOutcomes
        eyebrow="BUSINESS OUTCOMES"
        heading="Technology should improve the way your business operates."
        headingId="custom-software-outcomes-heading"
        copy="Custom software is measured by what it changes in the day-to-day running of the business."
        outcomes={OUTCOMES}
      />
      <FAQAccordion
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        heading="Questions we hear most often."
        headingId="faq-heading"
        copy="Straight answers about how custom software projects actually work."
        items={FAQ_ITEMS}
        cta={{
          text: "Still have questions?",
          label: "Contact Us",
          href: "/contact",
        }}
      />
      <FinalCTA
        heading="Let’s build software that works the way your business works."
        copy="Tell us where the manual work, workarounds, and bottlenecks are. A discovery conversation is the fastest way to find out what custom software could do for your business."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "View Our Process", href: "/process" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
