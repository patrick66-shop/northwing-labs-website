import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import DifferentiatorCard, {
  type DifferentiatorIconName,
} from "./DifferentiatorCard";
import Reveal from "./Reveal";
import styles from "./WhyNorthWing.module.css";

export type DifferentiatorItem = {
  title: string;
  /** Optional short lead sentence (the homepage cards carry one). */
  lead?: string;
  icon: DifferentiatorIconName;
  copy: string;
};

/* Copy from GitHub issue #13, tightened per the approved readability
   pass (chat-delivered): body copy trimmed ~15–20%, two leads
   sharpened, same meaning and tone — do not edit. */
const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    title: "Business First",
    lead: "The right solution starts with the real problem.",
    icon: "discovery",
    copy: "Before recommending anything, we learn your workflow, customers, team, existing tools, and constraints.",
  },
  {
    title: "Practical by Design",
    lead: "No unnecessary complexity.",
    icon: "practical",
    copy: "Every feature should earn its place: reduce manual work, improve accuracy, increase visibility, or support growth.",
  },
  {
    title: "Built Together",
    lead: "Built with you, not just for you.",
    icon: "collaboration",
    copy: "We work in clear, reviewable stages — ideas get tested, feedback gets heard, and the result fits your business.",
  },
  {
    title: "Designed to Grow",
    lead: "Build for today without creating tomorrow’s bottleneck.",
    icon: "growth",
    copy: "We build systems that solve today’s need — with room for more customers, more work, and new capabilities.",
  },
];

type WhyNorthWingProps = {
  /** All content defaults to the approved homepage section (issue #13);
   * service pages pass their own approved variants (issue #22). */
  id?: string;
  headingId?: string;
  eyebrow?: string;
  heading?: string;
  /** Intro paragraph; pass null to omit it. */
  copy?: string | null;
  differentiators?: DifferentiatorItem[];
  trust?: string;
};

/**
 * Why NorthWing Labs — differentiator section (GitHub issue #13; the
 * homepage is the template instance). Softly tinted light band:
 * centered header, four differentiator cards (2×2 on tablet and
 * desktop, one column on mobile), and a centered trust statement
 * under a small gold rule.
 */
export default function WhyNorthWing({
  id = "why-northwing",
  headingId = "why-northwing-heading",
  eyebrow = "WHY NORTHWING LABS",
  heading = "Technology should solve business problems—not create new ones.",
  copy = "NorthWing Labs starts with your business, not a predetermined technology stack. We learn how your work gets done, identify what is creating friction, and design practical software, AI, and automation around the results your business actually needs.",
  differentiators = DIFFERENTIATORS,
  trust = "You do not need to know what technology to ask for. Start with the problem, and we will recommend the simplest solution that works.",
}: WhyNorthWingProps) {
  return (
    <SectionWrapper variant="tinted" id={id} aria-labelledby={headingId}>
      <SiteContainer>
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          headingId={headingId}
          align="center"
          animate
        >
          {copy ? (
            <SupportingCopy className={styles.intro}>{copy}</SupportingCopy>
          ) : null}
        </SectionHeader>

        <ul className={styles.grid}>
          {differentiators.map((differentiator, index) => (
            <Reveal
              as="li"
              variant="up"
              delay={index * 90}
              key={differentiator.title}
            >
              <DifferentiatorCard
                title={differentiator.title}
                lead={differentiator.lead}
                icon={differentiator.icon}
              >
                {differentiator.copy}
              </DifferentiatorCard>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="up" delay={120}>
          <div className={styles.trust}>
            <span className={styles.trustRule} aria-hidden="true" />
            <p className={styles.trustCopy}>{trust}</p>
          </div>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
