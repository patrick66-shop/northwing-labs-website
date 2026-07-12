import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import BusinessAutomationIllustration from "@/components/BusinessAutomationIllustration";
import ServiceProblemGrid from "@/components/ServiceProblemGrid";
import ServiceNarrative from "@/components/ServiceNarrative";
import CapabilityCardGrid, {
  type CapabilityCard,
} from "@/components/CapabilityCardGrid";
import MiniProcessTimeline, {
  type ProcessStepItem,
} from "@/components/MiniProcessTimeline";
import WorkflowExampleGrid, {
  type WorkflowExample,
} from "@/components/WorkflowExampleGrid";
import ServicesOutcomes, { type OutcomeItem } from "@/components/ServicesOutcomes";
import ProblemChecklist from "@/components/ProblemChecklist";
import WhyNorthWing, {
  type DifferentiatorItem,
} from "@/components/WhyNorthWing";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

/* Approved SEO metadata from GitHub issue #22. The layout template
   appends "| NorthWing Labs". */
const PAGE_TITLE = "Business Automation for Small Businesses";
const PAGE_DESCRIPTION =
  "Reduce repetitive work, improve follow-up, and connect your business tools with practical automation systems designed around the way your business operates.";
const SOCIAL_DESCRIPTION =
  "Practical automation systems that reduce manual work, connect tools, improve follow-up, and keep important business processes moving.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/business-automation",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: SOCIAL_DESCRIPTION,
    url: "/services/business-automation",
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

/* All section copy below is approved production copy from GitHub
   issue #22, used verbatim — do not edit. */

const PROBLEMS = [
  {
    title: "Repetitive Data Entry",
    copy: "The same customer, order, project, or transaction information is entered into multiple systems.",
  },
  {
    title: "Manual Follow-Up",
    copy: "Quotes, reminders, status updates, and customer responses depend on someone remembering to send them.",
  },
  {
    title: "Disconnected Tools",
    copy: "Information must be copied between email, spreadsheets, forms, calendars, CRM systems, and other business applications.",
  },
  {
    title: "Inconsistent Processes",
    copy: "Important work is completed differently depending on who performs it or how busy the business becomes.",
  },
];

const OPPORTUNITIES: CapabilityCard[] = [
  {
    icon: "customers",
    title: "Lead and Customer Follow-Up",
    copy: "Automatically acknowledge inquiries, create follow-up tasks, send reminders, and keep customer communication from being overlooked.",
  },
  {
    icon: "extract",
    title: "Forms and Data Entry",
    copy: "Move information from website forms, intake documents, emails, or spreadsheets into the systems where it belongs.",
  },
  {
    icon: "estimating",
    title: "Quotes and Documents",
    copy: "Create proposals, estimates, agreements, project documents, or internal records using approved business information.",
  },
  {
    icon: "tracking",
    title: "Project and Order Updates",
    copy: "Trigger tasks, notifications, status changes, and customer updates as work moves from one stage to another.",
  },
  {
    icon: "scheduling",
    title: "Scheduling and Reminders",
    copy: "Coordinate appointments, deadlines, recurring activities, and internal reminders without constant manual tracking.",
  },
  {
    icon: "reporting",
    title: "Reporting and Alerts",
    copy: "Collect information from multiple sources and surface useful dashboards, summaries, exceptions, or action alerts.",
  },
];

const HOW_IT_WORKS_STEPS: ProcessStepItem[] = [
  {
    title: "Something Happens",
    copy: "A customer submits a form, a project changes status, a payment is received, a date arrives, or a team member completes an action.",
  },
  {
    title: "The System Applies the Rules",
    copy: "The automation checks the relevant information and determines what should happen next.",
  },
  {
    title: "Connected Actions Are Completed",
    copy: "The system may create a record, update information, generate a document, send a message, schedule a task, or notify someone.",
  },
  {
    title: "People Stay in Control",
    copy: "Important decisions, approvals, exceptions, and customer-sensitive actions remain visible and manageable.",
  },
];

const WORKFLOWS: WorkflowExample[] = [
  {
    title: "New Customer Inquiry",
    steps: [
      "Website form submitted",
      "Customer record created",
      "Inquiry assigned",
      "Confirmation message sent",
      "Follow-up task scheduled",
    ],
  },
  {
    title: "Approved Quote",
    steps: [
      "Quote accepted",
      "Project created",
      "Customer notified",
      "Required tasks generated",
      "Deposit request prepared",
      "Internal schedule updated",
    ],
  },
  {
    title: "Project Status Update",
    steps: [
      "Project moves to a new stage",
      "Team members notified",
      "Customer update sent",
      "Next tasks activated",
      "Dashboard status updated",
    ],
  },
  {
    title: "Recurring Business Process",
    steps: [
      "Scheduled date arrives",
      "Required information collected",
      "Report or document generated",
      "Responsible person notified",
      "Completion tracked",
    ],
  },
];

const OUTCOMES: OutcomeItem[] = [
  {
    title: "Less Manual Work",
    icon: "clock",
    copy: "Reduce copying, re-entering information, routine communication, and repetitive administrative tasks.",
  },
  {
    title: "Faster Response",
    icon: "bolt",
    copy: "Help customers receive acknowledgements, updates, documents, and follow-up sooner.",
  },
  {
    title: "Fewer Missed Steps",
    icon: "shield-check",
    copy: "Create consistent processes that do not depend entirely on memory or handwritten reminders.",
  },
  {
    title: "Better Information Flow",
    icon: "flow",
    copy: "Keep customer, project, sales, and operational information moving between connected systems.",
  },
  {
    title: "Greater Visibility",
    icon: "eye",
    copy: "Make it easier to see what has happened, what is waiting, and what requires attention.",
  },
  {
    title: "More Capacity for Growth",
    icon: "growth",
    copy: "Support more customers and more work without increasing administrative effort at the same rate.",
  },
];

const QUALIFICATIONS = [
  "Routine work consumes too much staff or owner time.",
  "Customer follow-up is inconsistent or easily delayed.",
  "Information is copied between several tools.",
  "Important tasks depend on memory.",
  "Growth is increasing administrative pressure.",
  "The business needs more consistency without enterprise-level complexity.",
];

const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    title: "Business First",
    icon: "discovery",
    copy: "We begin with the workflow, bottleneck, people involved, and desired business result.",
  },
  {
    title: "Practical by Design",
    icon: "practical",
    copy: "We recommend the simplest dependable solution rather than adding unnecessary technology.",
  },
  {
    title: "Built Collaboratively",
    icon: "collaboration",
    copy: "You remain involved in defining how the process should work and where human decisions are required.",
  },
  {
    title: "Designed to Grow",
    icon: "growth",
    copy: "Automations are structured so they can be refined as your operations, tools, and customer volume change.",
  },
];

/*
 * Business Automation service page — GitHub issue #22, on the approved
 * service-page family (Custom Software / AI Tools): Hero → Problems →
 * What Automation Means → Opportunities → How It Works → Example
 * Workflows → Outcomes → Built Around Your Business → Who It's For →
 * Why NorthWing → Final CTA → Footer.
 */
export default function BusinessAutomationPage() {
  return (
    <>
      <SiteHeader />
      <ServiceDetailHero
        eyebrow="BUSINESS AUTOMATION"
        heading="Make routine work happen without constant manual effort."
        copy="NorthWing Labs designs practical automation systems that reduce repetitive tasks, connect the tools your business already uses, and keep important work moving without relying on someone to remember every step."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{
          label: "See What Can Be Automated",
          href: "#automation-opportunities",
        }}
        illustration={<BusinessAutomationIllustration />}
      />
      <ServiceProblemGrid
        eyebrow="WHEN MANUAL WORK BECOMES THE SYSTEM"
        heading="Your team should not have to repeat the same work every day."
        headingId="manual-work-heading"
        copy={[
          "Many small businesses depend on people copying information, sending routine messages, updating spreadsheets, creating documents, and moving work between disconnected systems.",
          "These processes may work at first, but they become slower, harder to manage, and more vulnerable to missed steps as the business grows.",
        ]}
        problems={PROBLEMS}
      />
      <ServiceNarrative
        eyebrow="PRACTICAL AUTOMATION"
        heading="Connect the steps that should already work together."
        headingId="practical-automation-heading"
        paragraphs={[
          "Business automation uses clear rules and connected systems to complete routine actions, move information, create records, notify the right people, and trigger the next step in a workflow.",
          "The goal is not to remove people from the business. The goal is to remove unnecessary administrative work so people can focus on customers, decisions, and higher-value responsibilities.",
        ]}
      />
      <CapabilityCardGrid
        id="automation-opportunities"
        columns={3}
        eyebrow="AUTOMATION OPPORTUNITIES"
        heading="Turn repetitive processes into reliable workflows."
        headingId="automation-opportunities-heading"
        capabilities={OPPORTUNITIES}
      />
      <MiniProcessTimeline
        eyebrow="FROM TRIGGER TO RESULT"
        heading="A clear action starts a predictable workflow."
        headingId="how-automation-works-heading"
        steps={HOW_IT_WORKS_STEPS}
        cta={null}
      />
      <WorkflowExampleGrid
        eyebrow="REAL BUSINESS USE CASES"
        heading="Automation should solve specific operational problems."
        headingId="example-workflows-heading"
        workflows={WORKFLOWS}
      />
      <ServicesOutcomes
        eyebrow="WHAT CHANGES"
        heading="Reliable workflows make the business easier to operate."
        headingId="automation-outcomes-heading"
        copy={null}
        outcomes={OUTCOMES}
      />
      <ServiceNarrative
        eyebrow="PRACTICAL BY DESIGN"
        heading="You may not need to replace the tools you already use."
        headingId="built-around-your-business-heading"
        paragraphs={[
          "NorthWing Labs begins by understanding your current process, the systems involved, where information becomes delayed, and which steps require unnecessary manual effort.",
          "The right solution may connect existing applications, improve a spreadsheet-based process, add a focused internal tool, or combine several approaches.",
          "The objective is to use the simplest reliable solution that improves the workflow.",
        ]}
      />
      <ProblemChecklist
        id="who-business-automation-is-for"
        headingId="who-business-automation-is-for-heading"
        eyebrow="WHO WE WORK WITH"
        heading="For businesses whose processes have outgrown manual coordination."
        copy="Business automation may be appropriate when:"
        items={QUALIFICATIONS}
      />
      <WhyNorthWing
        id="why-northwing-automation"
        headingId="why-northwing-automation-heading"
        eyebrow="WHY NORTHWING LABS"
        heading="Automation should simplify the business—not make it harder to understand."
        copy={null}
        differentiators={DIFFERENTIATORS}
        trust="You do not need to know what software or automation platform to request. Start with the process that is slowing the business down, and NorthWing Labs will help determine what makes sense."
      />
      <FinalCTA
        eyebrow="LET’S TALK ABOUT THE WORKFLOW"
        heading="What repetitive process is taking too much of your time?"
        copy={[
          "Tell us where work gets repeated, delayed, missed, or manually transferred between systems.",
          "NorthWing Labs will help evaluate the process and recommend the simplest practical way to improve it.",
        ]}
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "See How We Work", href: "/process" }}
        reassurance="Every project starts with a conversation—not a commitment."
      />
      <SiteFooter />
    </>
  );
}
