import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteContainer from "@/components/SiteContainer";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import SupportingCopy from "@/components/SupportingCopy";
import PrimaryButton from "@/components/PrimaryButton";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

const PAGE_TITLE = "Contact NorthWing Labs | Start a Conversation";
const PAGE_DESCRIPTION =
  "Tell NorthWing Labs what is slowing your business down and start a practical conversation about software, AI, automation, mobile apps, or SaaS development.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: "Start a Conversation | NorthWing Labs",
    description:
      "Start with the business problem, current process, or product idea. NorthWing Labs will help determine the most practical next step.",
    url: "/contact",
    images: [{
      url: "/images/social/northwing-social-share-default.png",
      width: 1536,
      height: 1024,
      alt: "NorthWing Labs — Software, AI, and Automation",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Conversation | NorthWing Labs",
    description:
      "Start with the business problem, current process, or product idea. NorthWing Labs will help determine the most practical next step.",
    images: ["/images/social/northwing-social-share-default.png"],
  },
};

const DISCOVERY_DETAILS = [
  "Where work slows down or becomes repetitive",
  "Which people, customers, or teams are affected",
  "Which tools or spreadsheets are involved",
  "What a better outcome would look like",
  "Any important timing, budget, or operational constraints",
];

const NEXT_STEPS = [
  {
    title: "Review",
    copy: "NorthWing Labs reviews the business problem, current process, desired outcome, and practical constraints you shared.",
  },
  {
    title: "Initial Conversation",
    copy: "If the opportunity appears aligned, the next step is a focused conversation to clarify the problem and ask useful questions.",
  },
  {
    title: "Practical Recommendation",
    copy: "NorthWing Labs recommends the most sensible next step, which may be discovery, a defined project, a smaller improvement, or a simpler solution.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <section className={styles.hero} aria-labelledby="contact-hero-heading">
        <SiteContainer className={styles.heroInner}>
          <p className={styles.heroEyebrow}>START A CONVERSATION</p>
          <h1 id="contact-hero-heading">Tell us what you’re trying to improve.</h1>
          <div className={styles.heroCopy}>
            <p>You do not need a technical brief or a finished solution. Start with the business problem, the process that is slowing you down, or the idea you want to bring to life.</p>
            <p>NorthWing Labs will review what you share and help determine the most practical next step.</p>
          </div>
          <PrimaryButton href="#project-inquiry">Start a Conversation</PrimaryButton>
        </SiteContainer>
      </section>

      <SectionWrapper id="project-inquiry" variant="light" aria-labelledby="project-inquiry-heading">
        <SiteContainer>
          <SectionHeader eyebrow="TELL US ABOUT THE OPPORTUNITY" heading="Start with the business problem." headingId="project-inquiry-heading" align="left">
            <SupportingCopy>A few details about your business, current process, and desired outcome will help make the first conversation more useful.</SupportingCopy>
          </SectionHeader>
          <div className={styles.inquiryLayout}>
            <ContactForm />
            <aside className={styles.discoveryPanel} aria-labelledby="discovery-panel-heading">
              <p className={styles.panelEyebrow}>A USEFUL FIRST CONVERSATION</p>
              <h2 id="discovery-panel-heading">You do not need to have everything figured out.</h2>
              <p>Many business problems could be solved in several different ways. Start with what is happening now and what you want to improve.</p>
              <p>NorthWing Labs will help evaluate the problem before recommending technology.</p>
              <ul>{DISCOVERY_DETAILS.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <p className={styles.reassurance}>A clear description of the problem is more useful than a technical solution request.</p>
            </aside>
          </div>
        </SiteContainer>
      </SectionWrapper>

      <SectionWrapper variant="tinted" aria-labelledby="next-steps-heading">
        <SiteContainer>
          <SectionHeader eyebrow="WHAT HAPPENS NEXT" heading="A clear next step—not a high-pressure sales process." headingId="next-steps-heading" align="center" />
          <ol className={styles.steps}>
            {NEXT_STEPS.map((step, index) => (
              <li key={step.title}>
                <article className={styles.stepCard}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              </li>
            ))}
          </ol>
        </SiteContainer>
      </SectionWrapper>

      <section className={styles.finalCta} aria-labelledby="contact-final-heading">
        <SiteContainer className={styles.finalCtaInner}>
          <p className={styles.heroEyebrow}>NOT SURE WHAT TO ASK FOR?</p>
          <h2 id="contact-final-heading">You do not need to choose the technology first.</h2>
          <div>
            <p>You do not need to know whether the answer is software, AI, automation, or something simpler.</p>
            <p>Start with the problem. NorthWing Labs will help determine what makes sense.</p>
          </div>
          <PrimaryButton href="#project-inquiry">Start a Conversation</PrimaryButton>
        </SiteContainer>
      </section>
      <SiteFooter />
    </>
  );
}
