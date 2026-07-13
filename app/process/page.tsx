import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ServicesHero from "@/components/ServicesHero";
import ServiceNarrative from "@/components/ServiceNarrative";
import ProcessDetailTimeline, {
  type ProcessDetailStep,
} from "@/components/ProcessDetailTimeline";
import ProblemChecklist from "@/components/ProblemChecklist";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* SEO metadata per docs/PROCESS-PAGE-CONTENT.md (drafted copy,
   pending Product Owner approval). The layout template appends
   "| NorthWing Labs". */
const PAGE_TITLE = "Our Seven-Step Development Process";
const PAGE_DESCRIPTION =
  "NorthWing Labs runs every project through seven reviewable steps — Discover, Define, Design, Build, Test, Launch, Improve — so you always know where your project stands and what comes next.";
const SOCIAL_DESCRIPTION =
  "Seven reviewable steps from business problem to working solution — with something to see and react to at every stage.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: SOCIAL_DESCRIPTION,
    url: "/process",
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

/* Step definition sentences are approved copy from docs/SITEMAP.md §7
   (Process Definitions) — used verbatim. All other copy is from
   docs/PROCESS-PAGE-CONTENT.md (Claude Code draft, 2026-07-12),
   pending Product Owner approval. */

const STEPS: ProcessDetailStep[] = [
  {
    title: "Discover",
    definition:
      "Understand the business, workflow, problem, users, current tools, and desired outcome.",
    bullets: [
      "Walk through how the work actually happens today.",
      "Identify where time, information, or follow-up gets lost.",
      "Understand the tools and systems already in place.",
    ],
    outcome: "A plain-language summary of the problem and the opportunity.",
  },
  {
    title: "Define",
    definition:
      "Clarify requirements, priorities, scope, constraints, and success criteria.",
    bullets: [
      "Separate what the solution must do from what can wait.",
      "Set the constraints: budget, timeline, and systems it must work with.",
      "Agree on what success looks like in business terms.",
    ],
    outcome: "A clear scope and a realistic picture of the investment.",
  },
  {
    title: "Design",
    definition:
      "Plan the user experience, workflows, screens, system behavior, and technical direction.",
    bullets: [
      "Map the screens and workflows people will actually use.",
      "Plan how information moves through the system.",
      "Choose the simplest technical approach that fits.",
    ],
    outcome: "Designs you can see and react to before code is written.",
  },
  {
    title: "Build",
    definition:
      "Develop the solution in controlled, reviewable phases.",
    bullets: [
      "Working software early — not a big reveal at the end.",
      "Regular reviews as capabilities come online.",
      "Adjustments made while they are still easy to make.",
    ],
    outcome: "Visible progress you can click through, stage by stage.",
  },
  {
    title: "Test",
    definition:
      "Validate functionality, usability, responsiveness, accessibility, and reliability.",
    bullets: [
      "Real scenarios, real data, real devices.",
      "Usability checks with the people who will use it.",
      "Accessibility and reliability treated as requirements, not extras.",
    ],
    outcome: "A solution your business can rely on from day one.",
  },
  {
    title: "Launch",
    definition: "Deploy the solution and confirm production readiness.",
    bullets: [
      "Deployment, data migration, and cutover handled carefully.",
      "Training for the people who will live in it.",
      "Support standing by while it enters daily use.",
    ],
    outcome: "A live system doing real work.",
  },
  {
    title: "Improve",
    definition:
      "Measure results, gather feedback, and identify opportunities for refinement.",
    bullets: [
      "Review what real usage says about the solution.",
      "Refine where it adds value.",
      "Grow the system as the business grows.",
    ],
    outcome: "A solution that keeps earning its place.",
  },
];

const EXPECTATIONS = [
  "Plain business language — no jargon walls.",
  "Reviewable stages with something to see at each one.",
  'Honest recommendations, including "you don’t need this."',
  "A clear picture of cost before build work begins.",
  "Direct access to the people doing the work.",
  "No lock-in — you own what we build.",
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How long does the whole process take?",
    answer:
      "It scales with the project. Focused tools and automations can move from Discover to Launch in weeks; connected platforms and products take longer. After the Define step you get a realistic timeline broken into reviewable stages, so the schedule is visible from the start.",
  },
  {
    question: "How involved do I need to be?",
    answer:
      "Most of your time is spent early — Discover and Define are conversations about your business — and at stage reviews, which are short and concrete: look at working software, tell us what is right and what is not. We design the rhythm around your schedule.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A conversation about the problem. You do not need a specification, a feature list, or technical vocabulary — Discover and Define exist to build those with you.",
  },
  {
    question: "Can the plan change once the project is underway?",
    answer:
      "Yes — the staged approach is designed for it. When reviews surface a better idea or a new priority, we talk through the impact on scope, cost, and timeline before anything changes. Course corrections are expected; surprises are not.",
  },
  {
    question: "What if we stop after Discover or Define?",
    answer:
      "Then you stop with something valuable: a clear understanding of the problem, a defined scope, and a realistic picture of the investment. There is no obligation to continue, and what we produce together is yours to keep.",
  },
  {
    question: "Who am I actually working with?",
    answer:
      "NorthWing Labs directly — the people scoping the work are the people building it. Questions get answered by someone who knows your project, not relayed through an account manager.",
  },
];

/*
 * Process page — copy per docs/PROCESS-PAGE-CONTENT.md (draft pending
 * Product Owner approval; step definitions are approved SITEMAP §7
 * copy). Structure: Hero → Why a Process → The Seven Steps →
 * What to Expect → One Process, Every Service → FAQ → Final CTA.
 */
export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <ServicesHero
        headingId="process-hero-heading"
        eyebrow="OUR PROCESS"
        heading="Seven clear steps from business problem to working solution."
        copy="Custom software does not have to feel like a leap of faith. NorthWing Labs runs every project through the same structured process, so you always know what is happening, what comes next, and what you will have at the end."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "See the Seven Steps", href: "#the-seven-steps" }}
        trust="The same process behind every NorthWing Labs project—software, AI, automation, mobile, and SaaS."
      />
      <ServiceNarrative
        eyebrow="WHY A PROCESS"
        heading="Most projects don’t go wrong at the code."
        headingId="why-a-process-heading"
        paragraphs={[
          "Software projects go wrong when requirements stay fuzzy, scope grows quietly, progress becomes invisible, and the people paying for the work are the last to know. A clear process prevents that.",
          "Every NorthWing Labs engagement moves through seven reviewable steps. Each one ends with something you can see and react to — so decisions get made with the project in front of you, not after the budget is spent.",
        ]}
      />
      <ProcessDetailTimeline
        id="the-seven-steps"
        eyebrow="THE SEVEN STEPS"
        heading="From first conversation to a solution that keeps improving."
        headingId="the-seven-steps-heading"
        copy="Each step ends with something concrete. Nothing moves forward until you have seen it."
        steps={STEPS}
      />
      <ProblemChecklist
        id="what-to-expect"
        headingId="what-to-expect-heading"
        eyebrow="WHAT TO EXPECT"
        heading="Working with NorthWing Labs, in practice."
        copy="Whatever the project, every engagement includes:"
        items={EXPECTATIONS}
      />
      <ServiceNarrative
        eyebrow="ONE PROCESS, EVERY SERVICE"
        heading="The same seven steps, tuned to the work."
        headingId="one-process-heading"
        paragraphs={[
          <>
            The process does not change with the technology — the emphasis
            does. <Link href="/services/ai-tools">AI tools</Link> add
            knowledge-source boundaries and response-quality testing.{" "}
            <Link href="/services/mobile-apps">Mobile apps</Link> add real
            devices and offline behavior.{" "}
            <Link href="/services/saas-development">SaaS products</Link> add
            market scoping and real-user validation.
          </>,
          "Whatever you are building, the steps stay reviewable and the decisions stay yours.",
        ]}
      />
      <FAQAccordion
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        heading="Questions we hear most often."
        headingId="process-faq-heading"
        copy="Straight answers about how the process actually runs."
        items={FAQ_ITEMS}
        cta={{
          text: "Still have questions?",
          label: "Contact Us",
          href: "/contact",
        }}
      />
      <FinalCTA
        eyebrow="LET’S START WITH STEP ONE"
        heading="The first step is a conversation."
        copy="Tell us about the business, the workflow, and where the friction is. We will help you understand what is worth building — and what it will take — before you commit to anything."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Explore Our Services", href: "/services" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
