import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import MobileAppsIllustration from "@/components/MobileAppsIllustration";
import ServiceProblemGrid from "@/components/ServiceProblemGrid";
import CapabilityCardGrid, {
  type CapabilityCard,
} from "@/components/CapabilityCardGrid";
import WhatWeCanBuild from "@/components/WhatWeCanBuild";
import PlatformShowcase from "@/components/PlatformShowcase";
import FieldToOfficeIllustration from "@/components/FieldToOfficeIllustration";
import MiniProcessTimeline, {
  type ProcessStepItem,
} from "@/components/MiniProcessTimeline";
import ServicesOutcomes, { type OutcomeItem } from "@/components/ServicesOutcomes";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* SEO metadata per docs/SERVICE-PAGES-CONTENT.md (Mobile Apps —
   drafted copy, pending Product Owner approval). The layout template
   appends "| NorthWing Labs". */
const PAGE_TITLE = "Mobile App Development for Small Businesses";
const PAGE_DESCRIPTION =
  "NorthWing Labs designs mobile apps for field teams, employees, and customers — connected to your business systems, so work captured on site reaches the office without retyping.";
const SOCIAL_DESCRIPTION =
  "Practical mobile apps for field teams, employees, and customers — connected to the systems your business already runs on.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/mobile-apps",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: SOCIAL_DESCRIPTION,
    url: "/services/mobile-apps",
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

/* All section copy from docs/SERVICE-PAGES-CONTENT.md — Mobile Apps
   draft (Claude Code, 2026-07-12), pending Product Owner approval.
   Written to the brand voice: no metrics, no unsupported claims. */

const PROBLEMS = [
  {
    title: "Paper in the Field",
    copy: "Job details, checklists, and forms ride around on clipboards — then get retyped, or lost, back at the office.",
  },
  {
    title: "Double Data Entry",
    copy: "What gets written down on site has to be entered again into office systems, hours or days later.",
  },
  {
    title: "Out-of-Date Job Information",
    copy: "Crews work from this morning's printout while the schedule, scope, or address changed at noon.",
  },
  {
    title: "Phone Tag with Customers",
    copy: "Updates, approvals, and questions bounce through calls and voicemails instead of getting answered once.",
  },
  {
    title: "Scattered Photos and Paperwork",
    copy: "Job photos live on personal phones, and signed documents surface weeks later — if they surface at all.",
  },
  {
    title: "No Field Visibility",
    copy: "The office cannot see job progress without calling someone who is trying to work.",
  },
];

const CAPABILITIES: CapabilityCard[] = [
  {
    icon: "mobile",
    title: "Field Team Apps",
    copy: "Give crews the job details, checklists, and updates they need on site.",
  },
  {
    icon: "customers",
    title: "Customer Apps",
    copy: "A simple place for customers to book, approve, pay, and check progress.",
  },
  {
    icon: "extract",
    title: "Mobile Forms & Data Capture",
    copy: "Replace paper forms with structured capture that lands in the right system.",
  },
  {
    icon: "camera",
    title: "Photo & Signature Capture",
    copy: "Attach photos, notes, and signatures to the job while you are still on site.",
  },
  {
    icon: "scheduling",
    title: "Scheduling & Dispatch",
    copy: "See today's schedule, get new assignments, and adjust plans from anywhere.",
  },
  {
    icon: "estimating",
    title: "On-Site Quotes & Approvals",
    copy: "Price the work, collect the approval, and send the paperwork before leaving the driveway.",
  },
  {
    icon: "sync",
    title: "Offline-Ready Tools",
    copy: "Keep working without a signal — everything syncs when coverage returns.",
  },
  {
    icon: "bell",
    title: "Notifications & Alerts",
    copy: "Route the updates people need to the device already in their pocket.",
  },
  {
    icon: "tracking",
    title: "Time & Job Tracking",
    copy: "Log hours, materials, and progress at the source instead of at the office.",
  },
  {
    icon: "workflow",
    title: "Connected to Your Systems",
    copy: "Apps that talk to the software, records, and workflows you already run.",
  },
];

/* Scenario chips (the AI Tools refinement pattern: day-to-day verb
   phrases, not capability-card echoes). */
const TYPICAL_PROJECTS = [
  "Update job status from the work site",
  "Collect photos and signatures on site",
  "Give customers live order or project status",
  "Fill out inspections and checklists on a phone",
  "Log hours and materials as work happens",
  "Send quotes and collect approvals in the field",
  "See the day's schedule and assignments",
  "Book and confirm appointments",
  "Look up customer and job history anywhere",
  "Keep field and office working from the same information",
];

/* Approved step titles; sentences tailored for mobile (real devices,
   offline behavior, store distribution). */
const MOBILE_PROCESS_STEPS: ProcessStepItem[] = [
  {
    title: "Discover",
    copy: "Learn where work happens away from the desk and what information the field and office trade today.",
  },
  {
    title: "Define",
    copy: "Clarify who uses the app, what they need in hand, and which moments it must survive without a signal.",
  },
  {
    title: "Design",
    copy: "Plan screens for on-site use: quick to read, simple to tap, hard to get wrong.",
  },
  {
    title: "Build",
    copy: "Develop the solution in controlled, reviewable stages.",
  },
  {
    title: "Test",
    copy: "Test on real phones and tablets, in the conditions your team actually works in.",
  },
  {
    title: "Launch",
    copy: "Handle distribution — app stores or private installs — and confirm production readiness.",
  },
  {
    title: "Improve",
    copy: "Watch real usage, refine the screens people live in, and expand where it adds value.",
  },
];

const OUTCOMES: OutcomeItem[] = [
  {
    title: "Information Captured Once",
    icon: "flow",
    copy: "What gets recorded on site lands in the office systems without retyping.",
  },
  {
    title: "Fewer Trips and Callbacks",
    icon: "clock",
    copy: "Crews have what they need in hand instead of driving back for it.",
  },
  {
    title: "Faster Field-to-Office Updates",
    icon: "bolt",
    copy: "Status, photos, and paperwork arrive while the job is still fresh.",
  },
  {
    title: "Better Customer Experience",
    icon: "people",
    copy: "Customers see progress and respond in taps, not phone tag.",
  },
  {
    title: "Clearer View of Field Work",
    icon: "eye",
    copy: "The office sees every job as it happens — without interrupting anyone.",
  },
  {
    title: "A More Professional Impression",
    icon: "shield-check",
    copy: "Quotes, approvals, and updates handled on the spot, not next week.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you build for both iPhone and Android?",
    answer:
      "Yes. Most business apps are built from a single codebase that runs on both platforms, so you are not paying for the same app twice — and everyone gets the same experience regardless of what is in their pocket.",
  },
  {
    question: "Do we actually need an app, or is a mobile-friendly website enough?",
    answer:
      "Honest answer: sometimes a mobile-friendly web tool is the right call, and we will tell you so. A native app earns its place when the work needs offline access, the camera, notifications, or one-tap speed for people who use it all day. We recommend the simplest solution that fits the workday.",
  },
  {
    question: "Can the app work without cell service?",
    answer:
      "Yes. Job sites, basements, and rural routes are exactly where field apps earn their keep, so offline behavior is designed in from the start — work continues without a signal and syncs when coverage returns.",
  },
  {
    question: "Can it connect to the software we already use?",
    answer: (
      <>
        Yes — that is usually the point. Mobile apps work best as the field
        end of your{" "}
        <Link href="/services/custom-software">existing systems</Link>, often
        with{" "}
        <Link href="/services/business-automation">business automation</Link>{" "}
        moving what gets captured into records, schedules, and follow-up.
      </>
    ),
  },
  {
    question: "How do employees or customers get the app?",
    answer:
      "Customer apps are published to the App Store and Google Play. Internal team apps can be distributed privately, without a public listing. We handle the setup, review process, and updates either way.",
  },
  {
    question: "How much does a mobile app cost?",
    answer: (
      <>
        It depends on scope, and we keep the scope honest. Every engagement
        starts by defining the smallest app that solves the real problem, so
        you see a clear picture of the investment before any build work
        begins. The fastest way to get a real answer is to{" "}
        <Link href="/contact">start a conversation</Link>.
      </>
    ),
  },
  {
    question: "How long does a mobile app take?",
    answer: (
      <>
        Focused field tools can ship in weeks; customer-facing apps with
        store review take longer. After the{" "}
        <Link href="/process">Discover and Define steps</Link> you get a
        realistic timeline broken into reviewable stages.
      </>
    ),
  },
  {
    question: "Who owns the app, and what happens after launch?",
    answer:
      "You own it — the app, the code, and the accounts it is published under. After launch, the Improve stage watches real usage and refines where it adds value, and we can keep handling updates, store requirements, and new capabilities as your business grows.",
  },
];

/*
 * Mobile Apps service page — copy per docs/SERVICE-PAGES-CONTENT.md
 * (draft pending Product Owner approval), on the Custom Software /
 * AI Tools template: Hero → Problems → Capabilities → Typical
 * Projects → Example Solution → Process → Outcomes → FAQ → Final CTA.
 */
export default function MobileAppsPage() {
  return (
    <>
      <SiteHeader />
      <ServiceDetailHero
        eyebrow="MOBILE APPS"
        heading="Mobile apps built for where the work actually happens."
        copy="NorthWing Labs designs mobile apps for field teams, employees, and customers — connected to the systems your business already runs on, so information captured on site never has to be retyped at the office."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Explore Our Process", href: "/process" }}
        trust="Built for the way your team works—online, offline, and on the move."
        illustration={<MobileAppsIllustration />}
      />
      <ServiceProblemGrid
        eyebrow="WHY MOBILE APPS?"
        heading="When the work leaves the office but the systems stay behind."
        headingId="why-mobile-apps-heading"
        copy="Most business software assumes someone is sitting at a desk. These are the signs your business needs tools that travel."
        problems={PROBLEMS}
      />
      <CapabilityCardGrid
        eyebrow="WHAT WE BUILD"
        heading="Purpose-built apps for customers, employees, and field teams."
        headingId="mobile-capabilities-heading"
        copy={
          <>
            Every app is designed around a real workday — and connects to
            the <Link href="/services/custom-software">custom software</Link>{" "}
            and{" "}
            <Link href="/services/business-automation">
              business automation
            </Link>{" "}
            your business already relies on.
          </>
        }
        capabilities={CAPABILITIES}
      />
      <WhatWeCanBuild
        eyebrow="TYPICAL MOBILE PROJECTS"
        heading="What a business mobile app handles day to day."
        headingId="typical-mobile-projects-heading"
        copy={
          <>
            Less about the phone, more about the workday. If the gap between
            your field and your office is not listed,{" "}
            <Link href="/contact">start a conversation</Link> — these are
            examples, not limits.
          </>
        }
        items={TYPICAL_PROJECTS}
      />
      <PlatformShowcase
        eyebrow="EXAMPLE MOBILE SOLUTION"
        heading="The job site and the office, finally on the same page."
        headingId="mobile-solution-heading"
        copy={
          <>
            A field app can capture job progress, photos, forms, and
            approvals where the work happens — and deliver them instantly to
            the office systems that run scheduling, invoicing, and
            reporting. See how connected systems come together in{" "}
            <Link href="/work">our featured work</Link>.
          </>
        }
        emphasis="One system — in the office, in the truck, and on the job."
        footnote={{
          prompt: "Need the office side too?",
          label: "Explore Custom Software",
          href: "/services/custom-software",
        }}
        illustration={<FieldToOfficeIllustration />}
      />
      <MiniProcessTimeline
        eyebrow="OUR PROCESS"
        heading="The same clear process, built for the field."
        headingId="mobile-process-heading"
        copy="Seven reviewable steps — with real devices, real job sites, and offline behavior treated as first-class requirements."
        steps={MOBILE_PROCESS_STEPS}
      />
      <ServicesOutcomes
        eyebrow="BUSINESS OUTCOMES"
        heading="Less distance between the work and the business."
        headingId="mobile-outcomes-heading"
        copy="A business mobile app is measured by what stops falling through the cracks between the field and the office."
        outcomes={OUTCOMES}
      />
      <FAQAccordion
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        heading="Questions we hear most often."
        headingId="mobile-faq-heading"
        copy="Straight answers about how business mobile app projects actually work."
        items={FAQ_ITEMS}
        cta={{
          text: "Still have questions?",
          label: "Contact Us",
          href: "/contact",
        }}
      />
      <FinalCTA
        eyebrow="LET’S TALK ABOUT MOBILE"
        heading="What does your team need in hand when they’re not at a desk?"
        copy="Tell us where work happens away from the office — and where information gets lost between the field, the customer, and the back office. NorthWing Labs will help determine whether a mobile app is the simplest way to improve it."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "View Our Process", href: "/process" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
