import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import CapabilityIcon, { type CapabilityIconName } from "./CapabilityIcon";
import Reveal from "./Reveal";
import styles from "./CapabilityCardGrid.module.css";

export type CapabilityCard = {
  icon: CapabilityIconName;
  title: string;
  copy: string;
};

type CapabilityCardGridProps = {
  eyebrow: string;
  heading: string;
  headingId: string;
  copy?: string;
  capabilities: CapabilityCard[];
};

/**
 * CapabilityCardGrid — "what we build" for the individual service
 * pages (GitHub issue #18). Compact light-family cards with contained
 * line icons; flex-wrap centers the remainder row like the services
 * grid (10 items → 4 / 4 / 2 on desktop).
 */
export default function CapabilityCardGrid({
  eyebrow,
  heading,
  headingId,
  copy,
  capabilities,
}: CapabilityCardGridProps) {
  return (
    <SectionWrapper variant="light" aria-labelledby={headingId}>
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
        <ul className={styles.grid}>
          {capabilities.map((capability, index) => (
            <Reveal
              as="li"
              variant="up"
              delay={index * 60}
              key={capability.title}
              className={styles.cell}
            >
              <article className={styles.card}>
                <CapabilityIcon name={capability.icon} />
                <h3 className={styles.title}>{capability.title}</h3>
                <p className={styles.copy}>{capability.copy}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </SiteContainer>
    </SectionWrapper>
  );
}
