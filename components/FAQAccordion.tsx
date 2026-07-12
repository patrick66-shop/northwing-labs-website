"use client";

import { useId, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import Reveal from "./Reveal";
import styles from "./FAQAccordion.module.css";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  copy?: string;
  items: FAQItem[];
};

/* Chevron rotates when the item is open. Decorative. */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={open ? `${styles.chevron} ${styles.chevronOpen}` : styles.chevron}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/**
 * FAQAccordion — accessible accordion for the service pages (GitHub
 * issue #18). Button-per-question with aria-expanded/aria-controls;
 * panels animate open via a grid-rows transition (collapsed by the
 * global reduced-motion rule). One item open at a time keeps the list
 * scannable.
 */
export default function FAQAccordion({
  eyebrow,
  heading,
  headingId,
  copy,
  items,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <SectionWrapper variant="tinted" aria-labelledby={headingId}>
      <SiteContainer>
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          headingId={headingId}
          align="center"
          animate
        >
          {copy ? <SupportingCopy>{copy}</SupportingCopy> : null}
        </SectionHeader>

        <Reveal variant="up">
          <ul className={styles.list}>
            {items.map((item, index) => {
              const open = openIndex === index;
              const buttonId = `${baseId}-faq-button-${index}`;
              const panelId = `${baseId}-faq-panel-${index}`;
              return (
                <li key={item.question} className={styles.item}>
                  <h3 className={styles.questionHeading}>
                    <button
                      type="button"
                      id={buttonId}
                      className={styles.question}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span>{item.question}</span>
                      <Chevron open={open} />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={
                      open ? `${styles.panel} ${styles.panelOpen}` : styles.panel
                    }
                  >
                    <div className={styles.panelInner}>
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
