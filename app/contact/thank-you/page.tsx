import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SiteContainer from "@/components/SiteContainer";
import SectionWrapper from "@/components/SectionWrapper";
import CTAGroup from "@/components/CTAGroup";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import styles from "./thank-you.module.css";

export const metadata: Metadata = {
  title: { absolute: "Thank You | NorthWing Labs" },
  description:
    "Thank you for contacting NorthWing Labs. Your inquiry has been received, and we’ll be in touch soon.",
  robots: {
    index: false,
    follow: true,
  },
};

const NEXT_STEPS = [
  {
    title: "We Review Your Request",
    copy: "We’ll review your project request and the details you provided.",
  },
  {
    title: "We Follow Up",
    copy: "If we need more information, we’ll contact you by email or phone.",
  },
  {
    title: "We Discuss the Best Path Forward",
    copy: "We’ll discuss your goals, answer your questions, and recommend the most practical next step for your business.",
  },
];

const REASSURANCE_ITEMS = [
  "Practical solutions built around real business needs",
  "Clear communication throughout the project",
  "Custom software, AI, automation, and application expertise",
  "A long-term technology partner for growing businesses",
];

export default function ContactThankYouPage() {
  return (
    <>
      <SiteHeader />
      <section className={styles.hero} aria-labelledby="thank-you-heading">
        <SiteContainer className={styles.heroInner}>
          <div className={styles.successIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
          </div>
          <p className={styles.eyebrow}>Message Received</p>
          <h1 id="thank-you-heading">Thank You! Your Message Has Been Sent.</h1>
          <div className={styles.supportingCopy}>
            <p>Thank you for contacting NorthWing Labs.</p>
            <p>We’ve successfully received your inquiry and appreciate the opportunity to learn about your project. Every message is reviewed personally, and we’ll respond as soon as possible—typically within one business day.</p>
          </div>
          <CTAGroup className={styles.heroActions}>
            <PrimaryButton href="/">Return to Home</PrimaryButton>
            <SecondaryButton variant="on-dark" href="/services">
              Explore Our Services
            </SecondaryButton>
          </CTAGroup>
        </SiteContainer>
      </section>

      <SectionWrapper variant="light" aria-labelledby="next-heading">
        <SiteContainer>
          <h2 id="next-heading" className={styles.sectionHeading}>What Happens Next</h2>
          <ol className={styles.steps}>
            {NEXT_STEPS.map((step, index) => (
              <li key={step.title}>
                <article className={styles.stepCard}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              </li>
            ))}
          </ol>
        </SiteContainer>
      </SectionWrapper>

      <SectionWrapper variant="tinted" aria-labelledby="why-heading">
        <SiteContainer className={styles.reassuranceInner}>
          <h2 id="why-heading">Why NorthWing Labs?</h2>
          <ul className={styles.reassuranceList}>
            {REASSURANCE_ITEMS.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </SectionWrapper>
      <SiteFooter />
    </>
  );
}
