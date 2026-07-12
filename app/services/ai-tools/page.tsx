import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import AIToolsIllustration from "@/components/AIToolsIllustration";
import ServiceProblemGrid from "@/components/ServiceProblemGrid";
import CapabilityCardGrid, {
  type CapabilityCard,
} from "@/components/CapabilityCardGrid";
import WhatWeCanBuild from "@/components/WhatWeCanBuild";
import PlatformShowcase from "@/components/PlatformShowcase";
import AIKnowledgeFlowIllustration from "@/components/AIKnowledgeFlowIllustration";
import MiniProcessTimeline, {
  type ProcessStepItem,
} from "@/components/MiniProcessTimeline";
import ServicesOutcomes, { type OutcomeItem } from "@/components/ServicesOutcomes";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* Approved SEO metadata from GitHub issue #20. The layout template
   appends "| NorthWing Labs". */
const PAGE_TITLE = "AI Tools for Small Business";
const PAGE_DESCRIPTION =
  "NorthWing Labs builds practical AI tools for growing small businesses, including knowledge assistants, document automation, customer support tools, and workflow intelligence.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/ai-tools",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: PAGE_DESCRIPTION,
    url: "/services/ai-tools",
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

/* Section copy: headings and lists marked "issue #20" are approved
   verbatim; problem bodies, capability descriptions, tailored process
   sentences, outcome one-liners, and FAQ answers are new copy written
   to the brand voice (no metrics, no unsupported claims). */

const PROBLEMS = [
  {
    title: "Scattered Information",
    copy: "Answers live across files, emails, and systems — finding the right one means knowing where to look.",
  },
  {
    title: "Repeated Questions",
    copy: "Employees answer the same questions again and again instead of doing the work only they can do.",
  },
  {
    title: "Slow Customer Responses",
    copy: "Customers wait while someone tracks down the right detail, document, or answer.",
  },
  {
    title: "Knowledge in One Person's Head",
    copy: "Critical know-how depends on a single person — and is unavailable whenever they are.",
  },
  {
    title: "Repetitive Document Review",
    copy: "Contracts, forms, and reports get read, summarized, and re-keyed by hand, one at a time.",
  },
  {
    title: "Too Much Time Searching",
    copy: "Teams lose hours locating, organizing, and re-creating information the business already has.",
  },
];

const CAPABILITIES: CapabilityCard[] = [
  {
    icon: "assistant",
    title: "Internal Knowledge Assistants",
    copy: "Give your team one place to ask and get answers from approved company knowledge.",
  },
  {
    icon: "customers",
    title: "Customer Support Assistants",
    copy: "Answer common customer questions consistently — and hand off to a person when it matters.",
  },
  {
    icon: "documents",
    title: "Document Search & Summarization",
    copy: "Find the right document and get the short version in seconds.",
  },
  {
    icon: "drafting",
    title: "Proposal & Content Drafting",
    copy: "Start proposals, descriptions, and updates from a solid draft instead of a blank page.",
  },
  {
    icon: "extract",
    title: "Data Extraction",
    copy: "Pull the details that matter out of invoices, forms, and paperwork automatically.",
  },
  {
    icon: "workflow",
    title: "Workflow Recommendations",
    copy: "Surface the next step, the missing detail, or the job that needs attention.",
  },
  {
    icon: "tracking",
    title: "Intelligent Intake Forms",
    copy: "Ask the right follow-up questions and route requests to the right place.",
  },
  {
    icon: "reporting",
    title: "AI-Enhanced Business Dashboards",
    copy: "Plain-language summaries of what the numbers actually say.",
  },
  {
    icon: "email",
    title: "Email & Response Assistance",
    copy: "Draft consistent replies in your voice, ready to review and send.",
  },
  {
    icon: "spark",
    title: "Custom AI Tools",
    copy: "Purpose-built AI for the workflow problem generic tools cannot solve.",
  },
];

/* Typical AI projects (approved list, issue #20). */
const TYPICAL_PROJECTS = [
  "Company Knowledge Assistant",
  "Customer FAQ Assistant",
  "Document Review Tool",
  "Proposal Drafting Assistant",
  "Email Response Assistant",
  "AI Search Across Business Files",
  "Lead Qualification Assistant",
  "Reporting Summary Tool",
  "Data Extraction Workflow",
  "Internal Training Assistant",
];

/* Approved step titles; sentences tailored per issue #20 (knowledge
   sources, AI boundaries, response quality, privacy and accuracy,
   ongoing refinement). */
const AI_PROCESS_STEPS: ProcessStepItem[] = [
  {
    title: "Discover",
    copy: "Learn the workflow and identify which knowledge sources — documents, records, procedures — are worth putting to work.",
  },
  {
    title: "Define",
    copy: "Set clear boundaries for what the AI should use, what it should answer, and when it hands off to a person.",
  },
  {
    title: "Design",
    copy: "Plan the tool's role in the workflow, the approved sources it draws from, and how people interact with it.",
  },
  {
    title: "Build",
    copy: "Develop the tool in controlled, reviewable stages.",
  },
  {
    title: "Test",
    copy: "Test response quality against real questions and validate privacy, accuracy, and tone before anyone relies on it.",
  },
  {
    title: "Launch",
    copy: "Deploy the tool and confirm production readiness.",
  },
  {
    title: "Improve",
    copy: "Review real usage, refine responses, and expand the approved sources where it adds value.",
  },
];

const OUTCOMES: OutcomeItem[] = [
  {
    title: "Faster Access to Information",
    icon: "bolt",
    copy: "Answers in seconds from knowledge that used to live in ten places.",
  },
  {
    title: "More Consistent Responses",
    icon: "shield-check",
    copy: "Customers and teammates get the same right answer every time.",
  },
  {
    title: "Less Repetitive Work",
    icon: "clock",
    copy: "Summaries, drafts, and lookups stop consuming skilled people.",
  },
  {
    title: "Better Use of Business Knowledge",
    icon: "eye",
    copy: "Experience captured in documents finally gets used, not just stored.",
  },
  {
    title: "Faster Customer Support",
    icon: "people",
    copy: "Common questions get handled immediately; complex ones reach a person sooner.",
  },
  {
    title: "More Time for Higher-Value Work",
    icon: "growth",
    copy: "Your team spends its time on judgment, not lookup.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What types of AI tools can you build?",
    answer: (
      <>
        Knowledge assistants, customer support assistants, document search
        and summarization, drafting and data-extraction tools, and
        AI-enhanced dashboards. They can stand alone or be built into{" "}
        <Link href="/services/custom-software">custom software</Link> your
        business already relies on.
      </>
    ),
  },
  {
    question: "Is this just a chatbot?",
    answer:
      "No. A chat interface is one option, but most of the value comes from tools working behind the scenes — summarizing documents, extracting data, drafting responses, routing requests, and keeping information organized.",
  },
  {
    question: "Can AI use our existing business documents?",
    answer:
      "Yes — that is usually the point. We connect the tool to the sources you approve, such as procedures, product information, and past project records, so answers reflect how your business actually works.",
  },
  {
    question: "How accurate will the responses be?",
    answer:
      "Accuracy is designed in, not assumed. Tools draw only from your approved information, are tested against real questions before launch, and are built to say so — or hand off to a person — rather than guess when they do not know.",
  },
  {
    question: "Is our business data secure?",
    answer:
      "Security boundaries are defined before anything is built: which information the tool may use, who can access it, and where it is processed. The tool uses only the sources you approve, and privacy requirements are validated during testing.",
  },
  {
    question: "Can AI connect with our existing software?",
    answer: (
      <>
        Yes. AI tools work best connected to the systems you already use —
        often alongside{" "}
        <Link href="/services/business-automation">business automation</Link>{" "}
        that moves the results into your workflow, records, and follow-up.
      </>
    ),
  },
  {
    question: "How long does an AI project take?",
    answer: (
      <>
        Focused assistants and document tools can ship in weeks. After the{" "}
        <Link href="/process">Discover and Define steps</Link> you get a
        realistic timeline broken into reviewable stages, with response
        quality tested before launch.
      </>
    ),
  },
  {
    question: "What happens after launch?",
    answer:
      "AI tools improve with use. The Improve stage reviews real questions and results, refines responses, and expands the approved knowledge sources where it adds value — with support continuing as your business grows.",
  },
];

/*
 * AI Tools service page — GitHub issue #20, on the Custom Software
 * template: Hero → Problems → Capabilities → Typical Projects →
 * Example Solution → Process → Outcomes → FAQ → Final CTA → Footer.
 */
export default function AIToolsPage() {
  return (
    <>
      <SiteHeader />
      <ServiceDetailHero
        eyebrow="AI TOOLS"
        heading="Practical AI tools built around your business knowledge."
        copy="NorthWing Labs creates AI assistants and business tools that help your team find information faster, respond more consistently, organize knowledge, and reduce repetitive work."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Explore Our Process", href: "/process" }}
        trust="Designed to solve real workflow problems—not add AI for the sake of it."
        illustration={<AIToolsIllustration />}
      />
      <ServiceProblemGrid
        eyebrow="WHY AI TOOLS?"
        heading="When valuable business knowledge is difficult to find or use."
        headingId="why-ai-tools-heading"
        copy="Most businesses already have the answers — in files, inboxes, records, and experienced heads. The problem is putting them to work."
        problems={PROBLEMS}
      />
      <CapabilityCardGrid
        eyebrow="WHAT WE BUILD"
        heading="AI tools designed to help your team work faster and more consistently."
        headingId="ai-capabilities-heading"
        copy={
          <>
            Every tool starts from a real workflow problem — and can stand
            alone or plug into{" "}
            <Link href="/services/custom-software">custom software</Link> and{" "}
            <Link href="/services/business-automation">
              business automation
            </Link>{" "}
            you already rely on.
          </>
        }
        capabilities={CAPABILITIES}
      />
      <WhatWeCanBuild
        eyebrow="TYPICAL AI PROJECTS"
        heading="Typical AI Tool Projects"
        headingId="typical-ai-projects-heading"
        copy={
          <>
            Practical, focused, and built around your information. If the
            problem you are facing is not listed,{" "}
            <Link href="/contact">start a conversation</Link> — these are
            examples, not limits.
          </>
        }
        items={TYPICAL_PROJECTS}
      />
      <PlatformShowcase
        eyebrow="EXAMPLE AI SOLUTION"
        heading="Your business knowledge, working in one secure layer."
        headingId="ai-solution-heading"
        copy={
          <>
            Business files, customer data, and procedures feed one controlled
            AI knowledge layer — powering an employee assistant, a customer
            assistant, and workflow actions, all drawing only on information
            you approve. See how we put connected systems together in{" "}
            <Link href="/work">our featured work</Link>.
          </>
        }
        emphasis="Secure, controlled, and built on information you approve."
        illustration={<AIKnowledgeFlowIllustration />}
      />
      <MiniProcessTimeline
        eyebrow="OUR PROCESS"
        heading="The same clear process, tuned for AI."
        headingId="ai-process-heading"
        copy="Seven reviewable steps — with knowledge sources, AI boundaries, and response quality treated as first-class requirements."
        steps={AI_PROCESS_STEPS}
      />
      <ServicesOutcomes
        eyebrow="BUSINESS OUTCOMES"
        heading="Less searching. Less repeating. More time for real work."
        headingId="ai-outcomes-heading"
        copy="AI tools are measured by the time and consistency they give back to the business."
        outcomes={OUTCOMES}
      />
      <FAQAccordion
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        heading="Questions we hear most often."
        headingId="ai-faq-heading"
        copy="Straight answers about how practical AI projects actually work."
        items={FAQ_ITEMS}
        cta={{
          text: "Still have questions?",
          label: "Contact Us",
          href: "/contact",
        }}
      />
      <FinalCTA
        heading="Let’s put your business knowledge to work."
        copy="Tell us where your team loses time searching, answering, organizing, or reviewing information. We will help determine whether a practical AI tool can improve the workflow."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "View Our Process", href: "/process" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
