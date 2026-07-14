import ServiceNarrative from "./ServiceNarrative";

/* Approved production copy — docs/WEBSITE-CONTENT.md §8a (approved
   2026-07-13). Heading and second paragraph are verbatim from the
   approved docs/ABOUT-PAGE-CONTENT.md §1 — do not edit. */
export default function AboutTeaser() {
  return (
    <ServiceNarrative
      id="about-teaser"
      headingId="about-teaser-heading"
      variant="light"
      eyebrow="ABOUT NORTHWING LABS"
      heading="The business came first. The technology followed."
      paragraphs={[
        "NorthWing Labs was founded by a business-systems consultant who spent thirty years helping companies untangle how work gets done — then opened his own small business and built the software he needed to run it.",
        "Not a large agency. Not a generic dev shop. A practical technology partner.",
      ]}
      cta={{ label: "Learn More About Us", href: "/about" }}
    />
  );
}
