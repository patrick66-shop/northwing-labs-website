import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionEyebrow from "./SectionEyebrow";
import styles from "./LegalDocument.module.css";

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  /** One-paragraph plain-language summary shown before the sections. */
  intro?: string;
  /** The document body: h2 headings, paragraphs, and lists — styled
   * by this component's module. */
  children: React.ReactNode;
};

/**
 * LegalDocument — prose layout for the legal pages (/privacy, /terms):
 * a compact dark title band, an optional plain-language summary, and a
 * readable single-column document with styled headings.
 */
export default function LegalDocument({
  eyebrow,
  title,
  effectiveDate,
  intro,
  children,
}: LegalDocumentProps) {
  return (
    <>
      <SectionWrapper
        variant="dark"
        className={styles.titleBand}
        aria-labelledby="legal-title"
      >
        <SiteContainer>
          <div className={styles.titleInner}>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h1 id="legal-title" className={styles.title}>
              {title}
            </h1>
            <p className={styles.effective}>Effective {effectiveDate}</p>
          </div>
        </SiteContainer>
      </SectionWrapper>
      <SectionWrapper variant="light">
        <SiteContainer>
          <article className={styles.document}>
            {intro ? (
              <p className={styles.intro}>
                <strong className={styles.introLabel}>
                  The short version:
                </strong>{" "}
                {intro}
              </p>
            ) : null}
            {children}
          </article>
        </SiteContainer>
      </SectionWrapper>
    </>
  );
}
