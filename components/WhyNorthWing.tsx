import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import DifferentiatorCard, {
  type DifferentiatorIconName,
} from "./DifferentiatorCard";
import Reveal from "./Reveal";
import styles from "./WhyNorthWing.module.css";

/* Copy from GitHub issue #13, tightened per the approved readability
   pass (chat-delivered): body copy trimmed ~15–20%, two leads
   sharpened, same meaning and tone — do not edit. */
const DIFFERENTIATORS: {
  title: string;
  lead: string;
  icon: DifferentiatorIconName;
  copy: string;
}[] = [
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

/**
 * Why NorthWing Labs — homepage differentiator section (GitHub issue #13).
 * Softly tinted light band between Who We Work With and the upcoming
 * Final CTA: centered header, four differentiator cards (2×2 on tablet
 * and desktop, one column on mobile), and a centered trust statement
 * under a small gold rule.
 */
export default function WhyNorthWing() {
  return (
    <SectionWrapper
      variant="tinted"
      id="why-northwing"
      aria-labelledby="why-northwing-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="WHY NORTHWING LABS"
          heading="Technology should solve business problems—not create new ones."
          headingId="why-northwing-heading"
          align="center"
          animate
        >
          <SupportingCopy className={styles.intro}>
            NorthWing Labs starts with your business, not a predetermined
            technology stack. We learn how your work gets done, identify what
            is creating friction, and design practical software, AI, and
            automation around the results your business actually needs.
          </SupportingCopy>
        </SectionHeader>

        <ul className={styles.grid}>
          {DIFFERENTIATORS.map((differentiator, index) => (
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
            <p className={styles.trustCopy}>
              You do not need to know what technology to ask for. Start with
              the problem, and we will recommend the simplest solution that
              works.
            </p>
          </div>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
