import SolutionGrid, { type SolutionItem } from "./SolutionGrid";

/* Approved production copy — docs/WEBSITE-CONTENT.md §4a (approved
   2026-07-13). Card title/problem/outcome text is verbatim from the
   approved docs/SOLUTIONS-PAGE-CONTENT.md §3 (a subset of 3 of the
   approved 6 categories) — do not edit. */
const FEATURED_SOLUTIONS: SolutionItem[] = [
  {
    title: "Save Time and Reduce Manual Work",
    problem:
      "Hours disappear into retyping, copying between systems, formatting documents, and chasing routine follow-up — work that repeats every week and never gets easier.",
    outcome: "Routine work runs itself; people do the work only people can do.",
    links: [],
  },
  {
    title: "Connect Disconnected Systems",
    problem:
      "Email, spreadsheets, calendars, accounting, job boards — each tool works, but nothing talks to anything, so your people have become the integration.",
    outcome: "Information moves between systems on its own.",
    links: [],
  },
  {
    title: "Modernize Spreadsheet Processes",
    problem:
      "The business runs on a heroic spreadsheet only one person fully understands — growing more fragile with every row, formula, and copy saved to a desktop.",
    outcome: "A real system: multi-user, reliable, and built for how the work flows.",
    links: [],
  },
];

/**
 * Solutions Teaser — homepage section 4a (HOMEPAGE-ARCHITECTURE.md §6a).
 * Tinted preview of three of the six /solutions categories, linking
 * through to the full Solutions page.
 */
export default function SolutionsTeaser() {
  return (
    <SolutionGrid
      id="solutions-teaser"
      headingId="solutions-teaser-heading"
      variant="tinted"
      eyebrow="SOLUTIONS"
      heading="Start with the problem. We'll find the right technology."
      copy="Most owners can describe exactly what is slowing the business down — not which technology fixes it. Here are three problems we solve again and again."
      solutions={FEATURED_SOLUTIONS}
      showLinks={false}
      cta={{ label: "See All Solutions", href: "/solutions" }}
    />
  );
}
