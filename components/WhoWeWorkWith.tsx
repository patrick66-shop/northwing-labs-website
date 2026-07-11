import SectionWrapper from "./SectionWrapper";
import SiteContainer from "./SiteContainer";
import SectionHeader from "./SectionHeader";
import SupportingCopy from "./SupportingCopy";
import AudienceCard, { type AudienceIconName } from "./AudienceCard";
import PrimaryButton from "./PrimaryButton";
import Reveal from "./Reveal";
import styles from "./WhoWeWorkWith.module.css";

/* Approved copy from GitHub issue #11, card descriptions replaced per
   the approved refinement pass (problem-focused framing) — do not edit. */
const AUDIENCES: {
  title: string;
  icon: AudienceIconName;
  examples: string[];
  copy: string;
}[] = [
  {
    title: "Service Businesses",
    icon: "service",
    examples: [
      "Consultants",
      "Agencies",
      "Accounting Firms",
      "Marketing Companies",
      "Home Services",
    ],
    copy: "Stop juggling emails, calendars, proposals, and customer information. Bring your entire client workflow into one connected system.",
  },
  {
    title: "Trades & Contractors",
    icon: "trades",
    examples: [
      "Woodworkers",
      "Cabinet Shops",
      "Electricians",
      "Remodelers",
      "Landscapers",
      "HVAC",
    ],
    copy: "Replace paper estimates, spreadsheets, and manual follow-up with a connected workflow from quote to completed job.",
  },
  {
    title: "Product Businesses",
    icon: "product",
    examples: [
      "Manufacturers",
      "Product Companies",
      "Custom Builders",
      "Online Stores",
    ],
    copy: "Bring pricing, production, inventory, and order management together so your business can grow without more administrative work.",
  },
];

/* Gold conversation mark for the highlight banner — same 24px grid and
   1.8 stroke as the site's line-icon family. Decorative. */
function ConversationIcon() {
  return (
    <svg
      className={styles.bannerIcon}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.4c0 4-4 7.2-9 7.2-1.1 0-2.1-.15-3.1-.43L4.2 19.6l1.3-3.3C4 15 3 13.3 3 11.4 3 7.4 7 4.2 12 4.2s9 3.2 9 7.2z" />
      <path d="M8.4 11.4h.01" />
      <path d="M12 11.4h.01" />
      <path d="M15.6 11.4h.01" />
    </svg>
  );
}

/**
 * Who We Work With — homepage positioning section (GitHub issue #11).
 * Light technical background between the dark Case Study and the
 * upcoming Why NorthWing Labs section: centered header, three audience
 * cards (3 / 2+1 / 1 columns), and a dark Navy highlight banner with a
 * gold conversation icon and primary CTA.
 */
export default function WhoWeWorkWith() {
  return (
    <SectionWrapper
      variant="light"
      id="who-we-work-with"
      className={styles.section}
      aria-labelledby="who-we-work-with-heading"
    >
      <SiteContainer>
        <SectionHeader
          eyebrow="WHO WE WORK WITH"
          heading="Built for growing small businesses."
          headingId="who-we-work-with-heading"
          align="center"
          animate
        >
          <SupportingCopy>
            NorthWing Labs partners with small businesses that are ready to
            replace spreadsheets, disconnected tools, and repetitive manual
            work with practical software that helps them grow.
          </SupportingCopy>
        </SectionHeader>

        <ul className={styles.grid}>
          {AUDIENCES.map((audience, index) => (
            <Reveal as="li" variant="up" delay={index * 90} key={audience.title}>
              <AudienceCard
                title={audience.title}
                icon={audience.icon}
                examples={audience.examples}
              >
                {audience.copy}
              </AudienceCard>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="up" delay={90}>
          <p className={styles.transition}>
            If your business has outgrown spreadsheets, disconnected software,
            or repetitive manual work, you&rsquo;re exactly who we build for.
          </p>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <div className={styles.banner}>
            <ConversationIcon />
            <h3 className={styles.bannerHeading}>
              Not sure if your business is a fit?
            </h3>
            <p className={styles.bannerCopy}>
              If your team spends too much time moving information between
              spreadsheets, emails, and disconnected software, we should talk.
            </p>
            <Reveal variant="up" delay={160} className={styles.bannerCta}>
              <PrimaryButton href="/contact">
                Start a Conversation →
              </PrimaryButton>
            </Reveal>
          </div>
        </Reveal>
      </SiteContainer>
    </SectionWrapper>
  );
}
