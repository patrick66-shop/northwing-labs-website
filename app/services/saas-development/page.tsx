import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SaaSDevelopmentIllustration from "@/components/SaaSDevelopmentIllustration";
import ServiceProblemGrid from "@/components/ServiceProblemGrid";
import CapabilityCardGrid, {
  type CapabilityCard,
} from "@/components/CapabilityCardGrid";
import WhatWeCanBuild from "@/components/WhatWeCanBuild";
import PlatformShowcase from "@/components/PlatformShowcase";
import MultiTenantIllustration from "@/components/MultiTenantIllustration";
import MiniProcessTimeline, {
  type ProcessStepItem,
} from "@/components/MiniProcessTimeline";
import ServicesOutcomes, { type OutcomeItem } from "@/components/ServicesOutcomes";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* SEO metadata per docs/SERVICE-PAGES-CONTENT.md (SaaS Development —
   drafted copy, pending Product Owner approval). The layout template
   appends "| NorthWing Labs". */
const PAGE_TITLE = "SaaS Development for Founders and Small Businesses";
const PAGE_DESCRIPTION =
  "NorthWing Labs turns software product ideas into working SaaS products — scoping the right first version, then designing, building, and launching it in clear, reviewable stages.";
const SOCIAL_DESCRIPTION =
  "Practical SaaS product development: scope the smallest version worth building, develop it in reviewable stages, and launch a product customers can use.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/saas-development",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: SOCIAL_DESCRIPTION,
    url: "/services/saas-development",
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

/* All section copy from docs/SERVICE-PAGES-CONTENT.md — SaaS
   Development draft (Claude Code, 2026-07-12), pending Product Owner
   approval. Written to the brand voice: no metrics, no unsupported
   claims, no startup hype. */

const PROBLEMS = [
  {
    title: "The Idea Is Stuck in Your Head",
    copy: "You can describe the product in conversation, but turning it into screens, features, and a plan feels out of reach.",
  },
  {
    title: "No Technical Co-Founder",
    copy: "You know the industry and the problem — but nobody on the team builds software.",
  },
  {
    title: "Quotes That Make No Sense",
    copy: "Development estimates range from a few thousand to a few hundred thousand, with no way to tell what is realistic.",
  },
  {
    title: "The Feature List Keeps Growing",
    copy: "Every conversation adds another must-have, and the product gets bigger, more expensive, and further away.",
  },
  {
    title: "Afraid of Building the Wrong Thing",
    copy: "The real risk is not bad code — it is spending months building something customers never asked for.",
  },
  {
    title: "The Manual Version Is Straining",
    copy: "The service you deliver by hand today could be a product — but it cannot scale the way it runs now.",
  },
];

const CAPABILITIES: CapabilityCard[] = [
  {
    icon: "spark",
    title: "Product Definition & MVP Scoping",
    copy: "Turn the idea into a focused first version that proves demand without over-building.",
  },
  {
    icon: "drafting",
    title: "User Experience & Interface Design",
    copy: "Screens your customers understand the first time — designed before code is written.",
  },
  {
    icon: "customers",
    title: "Accounts & Onboarding",
    copy: "Sign-up, subscriptions, and self-serve account management built in from day one.",
  },
  {
    icon: "estimating",
    title: "Subscriptions & Billing",
    copy: "Recurring payments, plans, and invoicing handled by proven billing infrastructure.",
  },
  {
    icon: "portal",
    title: "Customer Workspaces",
    copy: "Secure multi-tenant spaces where every customer sees only their own data.",
  },
  {
    icon: "employee",
    title: "Roles & Permissions",
    copy: "Owners, admins, and team members each get the right level of access.",
  },
  {
    icon: "reporting",
    title: "Admin & Analytics Dashboards",
    copy: "See sign-ups, usage, and revenue — and what customers actually do inside the product.",
  },
  {
    icon: "workflow",
    title: "Integrations & APIs",
    copy: "Connect your product to the tools your customers already use.",
  },
  {
    icon: "mobile",
    title: "Web & Mobile Experiences",
    copy: "A product that works wherever your customers are.",
  },
  {
    icon: "sync",
    title: "Launch & Continuous Improvement",
    copy: "Hosting, monitoring, updates — and a partner after version one ships.",
  },
];

/* Product-type chips (the Custom Software chip pattern — project
   types rather than scenarios, since visitors arrive with a product
   category in mind). */
const TYPICAL_PROJECTS = [
  "Industry-specific management platforms",
  "Booking and scheduling products",
  "Quoting and estimating tools",
  "Client portal products",
  "Field and trade service platforms",
  "Membership and subscription products",
  "Marketplace platforms",
  "Data and reporting products",
  "Internal tools turned into products",
  "Niche tools for underserved industries",
];

/* Approved step titles; sentences tailored for product building
   (market fit, scope discipline, real-user validation). */
const SAAS_PROCESS_STEPS: ProcessStepItem[] = [
  {
    title: "Discover",
    copy: "Understand the problem the product solves, who pays for it, and what already exists in the market.",
  },
  {
    title: "Define",
    copy: "Scope the smallest version that proves the idea — and consciously park everything else.",
  },
  {
    title: "Design",
    copy: "Design the experience your first customers see: clear screens, honest flows, no bloat.",
  },
  {
    title: "Build",
    copy: "Develop the product in controlled, reviewable stages.",
  },
  {
    title: "Test",
    copy: "Validate with real users before real customers depend on it.",
  },
  {
    title: "Launch",
    copy: "Ship the first version, set up hosting and monitoring, and start learning.",
  },
  {
    title: "Improve",
    copy: "Let real usage — not guesses — decide what gets built next.",
  },
];

const OUTCOMES: OutcomeItem[] = [
  {
    title: "From Idea to Working Product",
    icon: "flow",
    copy: "A concept becomes something customers can sign up for and use.",
  },
  {
    title: "Confidence Before Big Investment",
    icon: "shield-check",
    copy: "Prove the idea with a focused first version before betting the budget.",
  },
  {
    title: "Faster Time to First Customer",
    icon: "clock",
    copy: "Scope discipline gets a real product into real hands sooner.",
  },
  {
    title: "Clarity at Every Stage",
    icon: "eye",
    copy: "You always know what is being built, why, and what it costs.",
  },
  {
    title: "Ready for More Than Ten Users",
    icon: "people",
    copy: "Accounts, billing, and support designed for a growing customer base.",
  },
  {
    title: "Built to Scale When It Works",
    icon: "growth",
    copy: "An architecture that welcomes success instead of buckling under it.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "I'm not technical. Can I still build a software product?",
    answer:
      "Yes — that is exactly who this service is for. You bring deep knowledge of the industry and the problem; we handle requirements, design, architecture, and development, and keep every decision in plain business language.",
  },
  {
    question: "I only have an idea. Is that enough to start?",
    answer:
      "Yes. Most products start as a conversation, not a specification. The Discover and Define steps exist to turn what is in your head into requirements, screens, and a plan you can react to.",
  },
  {
    question: "What happens to my idea if I share it with you?",
    answer:
      "It stays yours. We treat product conversations as confidential, we are happy to sign an NDA, and everything we build — the product, the code, the accounts — belongs to you.",
  },
  {
    question: "How much does it cost to build a SaaS product?",
    answer: (
      <>
        It depends on scope, and scope is where we earn our keep. Every
        engagement starts by defining the smallest version that proves the
        idea, so you see a clear picture of the investment before build work
        begins — and you never pay for features the market has not asked for
        yet. The fastest way to get a real answer is to{" "}
        <Link href="/contact">start a conversation</Link>.
      </>
    ),
  },
  {
    question: "How long until launch?",
    answer: (
      <>
        Focused first versions launch in months, not years. After the{" "}
        <Link href="/process">Discover and Define steps</Link> you get a
        realistic timeline broken into reviewable stages, so progress is
        visible from the start.
      </>
    ),
  },
  {
    question: "Do I own the product and the code?",
    answer:
      "Yes — fully. The product, the source code, and the accounts it runs on belong to you. We are happy to keep hosting, supporting, and improving it, but you are never locked in.",
  },
  {
    question: "Can the product include AI features?",
    answer: (
      <>
        Yes, where they earn their place.{" "}
        <Link href="/services/ai-tools">Practical AI tools</Link> —
        assistants, document processing, intelligent workflows — can be
        built into the product from day one or added once the core has
        proven itself.
      </>
    ),
  },
  {
    question: "What if the idea changes after launch?",
    answer:
      "It probably will — that is a sign customers are using it. The staged approach is designed for learning: the Improve stage reads real usage and feedback, and the product evolves toward what the market actually rewards.",
  },
];

/*
 * SaaS Development service page — copy per docs/SERVICE-PAGES-CONTENT.md
 * (draft pending Product Owner approval), on the Custom Software /
 * AI Tools template: Hero → Problems → Capabilities → Typical
 * Projects → Example Product → Process → Outcomes → FAQ → Final CTA.
 */
export default function SaaSDevelopmentPage() {
  return (
    <>
      <SiteHeader />
      <ServiceDetailHero
        eyebrow="SAAS DEVELOPMENT"
        heading="Turn your software idea into a product customers can use."
        copy="NorthWing Labs takes software products from concept to launch — requirements, user experience, architecture, development, and testing — starting with the focused first version that proves the idea before you over-invest."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Explore Our Process", href: "/process" }}
        trust="For founders and small teams building their first software product—or their next one."
        illustration={<SaaSDevelopmentIllustration />}
      />
      <ServiceProblemGrid
        eyebrow="WHY SAAS DEVELOPMENT?"
        heading="The idea is not the hard part. Becoming a product is."
        headingId="why-saas-heading"
        copy="Most software products start with someone who understands a real problem deeply. These are the walls they hit between the idea and the launch."
        problems={PROBLEMS}
      />
      <CapabilityCardGrid
        eyebrow="WHAT WE BUILD"
        heading="Everything a software product needs to earn its first customers."
        headingId="saas-capabilities-heading"
        copy={
          <>
            The product is more than its features — accounts, billing, and
            administration decide whether it can grow.{" "}
            <Link href="/services/ai-tools">AI capability</Link> and{" "}
            <Link href="/services/mobile-apps">mobile experiences</Link> can
            be part of the product where they earn their place.
          </>
        }
        capabilities={CAPABILITIES}
      />
      <WhatWeCanBuild
        eyebrow="TYPICAL SAAS PRODUCTS"
        heading="The products founders and operators bring to us."
        headingId="typical-saas-products-heading"
        copy={
          <>
            Most begin as deep knowledge of one industry&rsquo;s problem. If
            yours is not listed,{" "}
            <Link href="/contact">start a conversation</Link> — these are
            examples, not limits.
          </>
        }
        items={TYPICAL_PROJECTS}
      />
      <PlatformShowcase
        eyebrow="EXAMPLE SAAS PRODUCT"
        heading="One product, serving every customer their own workspace."
        headingId="saas-product-heading"
        copy={
          <>
            A SaaS product gives each customer their own secure workspace on
            one platform you own — with sign-up, subscriptions, and
            administration working from launch, and an architecture that
            welcomes growth instead of collapsing under it. See how we put
            complete systems together in{" "}
            <Link href="/work">our featured work</Link>.
          </>
        }
        emphasis="Built once. Sold to many. Owned by you."
        footnote={{
          prompt: "Not sure it needs to be a product yet?",
          label: "Explore Custom Software",
          href: "/services/custom-software",
        }}
        illustration={<MultiTenantIllustration />}
      />
      <MiniProcessTimeline
        eyebrow="OUR PROCESS"
        heading="The same clear process, tuned for product building."
        headingId="saas-process-heading"
        copy="Seven reviewable steps — with market fit, scope discipline, and real-user validation treated as first-class requirements."
        steps={SAAS_PROCESS_STEPS}
      />
      <ServicesOutcomes
        eyebrow="BUSINESS OUTCOMES"
        heading="A working product — and proof the idea holds."
        headingId="saas-outcomes-heading"
        copy="SaaS development is measured by the distance from idea to paying customer, and by what the product can carry after that."
        outcomes={OUTCOMES}
      />
      <FAQAccordion
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        heading="Questions we hear most often."
        headingId="saas-faq-heading"
        copy="Straight answers about how SaaS product projects actually work."
        items={FAQ_ITEMS}
        cta={{
          text: "Still have questions?",
          label: "Contact Us",
          href: "/contact",
        }}
      />
      <FinalCTA
        eyebrow="LET’S BUILD YOUR PRODUCT"
        heading="What’s the product you’ve been thinking about?"
        copy="Tell us the problem it solves and who it is for. NorthWing Labs will help you find the smallest version worth building — and a realistic path to launching it."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "View Our Process", href: "/process" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
