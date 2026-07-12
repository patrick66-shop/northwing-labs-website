# NorthWing Labs Website — Project Documentation Index

**Purpose:** Define which repository documents are authoritative, what each document controls, and what Codex should read for a given task.

**Maintenance rule:** Do not treat every Markdown file as a source of truth. Classify new files in this index when they become durable project documentation.

---

## 1. Authority Model

Use the following hierarchy:

### Tier 0 — Agent and Workflow Governance

These files control how implementation work is performed:

| File | Purpose | Authority |
|---|---|---|
| `/AGENTS.md` | Repository-wide agent behavior, safety, validation, and completion-report rules | Governing |
| `/docs/IMPLEMENTATION-WORKFLOW.md` | Product Owner → Product Engineer → Codex delivery and approval process | Governing |
| `/docs/PROJECT-STATE.md` | Current implementation status, active priorities, known conflicts, and next action | Current-state authority |

### Tier 1 — Active Approved Work

The active Product Owner-approved work order controls task scope, approved copy, acceptance criteria, and required validation.

Possible locations include:

```text
/prompts/CURRENT_TASK.md
/prompts/*.md
/docs/work-orders/*.md
GitHub issue body
Codex task prompt supplied by the Product Owner
```

The repository may not use all of these locations. Follow the established repository convention and do not create a competing system without approval.

### Tier 2 — Approved Page-Specific Specifications

Page-specific approved content and design specifications override general guidance for that page.

Examples may include:

```text
/docs/services/*.md
/docs/pages/*.md
/docs/*-CONTENT.md
/docs/*-DESIGN-SPEC.md
/docs/*-IMPLEMENTATION-SPEC.md
```

Before implementing a page, locate the approved page-specific files and confirm their status from the work order and repository history.

### Tier 3 — Global Website Sources of Truth

| File | Controls | Notes |
|---|---|---|
| `/docs/WEBSITE-CONTENT.md` | Approved homepage production copy and global CTA/messaging rules | Do not rewrite during implementation |
| `/docs/CONTACT-PAGE-CONTENT.md` | Approved Contact page copy, form fields, states, metadata, and delivery status | Contact-page authority |
| `/docs/CONTACT-THANK-YOU-PAGE-SPEC.md` | Approved content, route behavior, SEO, analytics, design, and implementation specification for the contact-form confirmation page | Contact thank-you page authority |
| `/docs/HOMEPAGE-ARCHITECTURE.md` | Homepage narrative, section order, purpose, and conversion path | Homepage-specific |
| `/docs/HOMEPAGE-DESIGN-SPEC.md` | Homepage visual layout and styling | Homepage-specific |
| `/docs/COMPONENT-SYSTEM.md` | Reusable UI components and component behavior | Global component authority |
| `/docs/RESPONSIVE-SPEC.md` | Responsive behavior and viewport acceptance criteria | Global responsive authority |
| `/docs/ASSET-MANIFEST.md` | Approved asset paths and usage | Asset authority |
| `/docs/01_Brand_Foundation.md` through `/docs/09_Digital_Social_Applications.md` | Brand foundation, logo, color, typography, UI, iconography, imagery, voice, and applications | Current distributed brand authority |
| `/docs/SITEMAP.md` | Approved page hierarchy, routes, navigation, and page purposes | Must stay aligned with live route strategy |

### Tier 4 — Transitional Master Implementation Guidance

| File | Purpose | Status |
|---|---|---|
| `/docs/CLAUDE-IMPLEMENTATION-BRIEF.md` | Original master implementation brief written for Claude Code | Transitional; valid project rules remain useful, but agent behavior is now governed by `/AGENTS.md` |

Do not delete this file solely because Codex is taking over. A later approved documentation-cleanup task may rename it to `/docs/IMPLEMENTATION-BRIEF.md` and reconcile duplicate guidance.

When it conflicts with `/AGENTS.md` only on agent naming or workflow, follow `/AGENTS.md`. When it contains valid brand, layout, accessibility, performance, or SEO rules not superseded elsewhere, continue to follow them.

### Tier 5 — Historical Implementation Records

Files such as these are historical records unless the active work order explicitly promotes them:

```text
GH-ISSUE-*.md
archived prompts
completed work orders
old handoff documents
exploration notes
drafts
```

Use them to understand intent and previous decisions, but do not let them override newer approved specifications.

---

## 2. Conflict Resolution

When two sources conflict:

1. Confirm whether one is explicitly approved and the other is draft, historical, or superseded.
2. Compare modification dates and Git history, but do not use recency alone as proof of authority.
3. Inspect the current implementation for evidence of the accepted direction.
4. Check `/docs/PROJECT-STATE.md` for a recorded decision.
5. Report unresolved material conflicts before changing the affected implementation.

Do not silently combine incompatible directions.

Known transition-era conflicts are recorded in `/docs/PROJECT-STATE.md`.

---

## 3. Required Reading by Task Type

### New Service Page

Read:

1. `/AGENTS.md`
2. `/docs/PROJECT-STATE.md`
3. Active approved work order
4. Approved page-specific content/specification
5. `/docs/COMPONENT-SYSTEM.md`
6. `/docs/RESPONSIVE-SPEC.md`
7. Applicable brand documents from `/docs/01_Brand_Foundation.md` through `/docs/09_Digital_Social_Applications.md`
8. `/docs/ASSET-MANIFEST.md`
9. `/docs/SITEMAP.md`
10. The two most recently approved service-page implementations

Read homepage-only documents only where they define a shared global pattern.

### Homepage Change

Read:

1. `/AGENTS.md`
2. `/docs/PROJECT-STATE.md`
3. Active approved work order
4. `/docs/WEBSITE-CONTENT.md`
5. `/docs/HOMEPAGE-ARCHITECTURE.md`
6. `/docs/HOMEPAGE-DESIGN-SPEC.md`
7. `/docs/COMPONENT-SYSTEM.md`
8. `/docs/RESPONSIVE-SPEC.md`
9. `/docs/ASSET-MANIFEST.md`
10. Applicable brand documents from `/docs/01_Brand_Foundation.md` through `/docs/09_Digital_Social_Applications.md`
11. `/docs/SITEMAP.md`

### Navigation, Route, or Sitemap Change

Read:

1. `/AGENTS.md`
2. `/docs/PROJECT-STATE.md`
3. Active approved work order
4. `/docs/SITEMAP.md`
5. Header and footer implementation
6. Framework route structure
7. Technical sitemap implementation
8. Relevant page metadata

The documentation sitemap may include approved future routes. The technical XML/generated sitemap must include only publicly accessible routes that actually exist.

### Component or Design-System Change

Read:

1. `/AGENTS.md`
2. Active approved work order
3. `/docs/COMPONENT-SYSTEM.md`
4. `/docs/HOMEPAGE-DESIGN-SPEC.md` where relevant
5. `/docs/RESPONSIVE-SPEC.md`
6. Applicable brand documents from `/docs/01_Brand_Foundation.md` through `/docs/09_Digital_Social_Applications.md`
7. All current usages of the component

Do not change a shared component without checking its impact across existing pages.

### Copy or SEO Change

Read:

1. Active approved work order
2. Approved page-specific production copy
3. `/docs/WEBSITE-CONTENT.md` for global messaging and CTA rules
4. `/docs/SITEMAP.md` for page purpose
5. Current metadata implementation

Do not invent SEO claims or rewrite page copy to fit a layout problem. Fix the layout or request approval.

### Bug Fix

Read:

1. `/AGENTS.md`
2. Bug report and acceptance criteria
3. Relevant source and tests
4. Governing component/responsive/page specification

Keep the fix narrow. Do not turn a bug fix into a redesign or broad refactor.

---

## 4. Current Approved Strategic Principles

The governing documents consistently establish these principles:

- Lead with business problems and outcomes before technology.
- Use plain business language.
- Focus on growing small businesses and owner-led teams.
- Use the simplest practical solution that solves the problem well.
- Keep the site credible, clear, premium, and conversion-oriented.
- Preserve direct partnership positioning rather than large-agency language.
- Never fabricate customer proof, metrics, testimonials, logos, or case studies.
- Use one coherent component system across the website.
- Use approved assets rather than replacements.
- Design intentionally for desktop, tablet, and mobile.
- Keep accessibility, performance, SEO, and responsive behavior inside the definition of done.

---

## 5. Service Architecture

The approved service architecture is a hub-and-spoke model:

```text
/services
├── /services/custom-software
├── /services/ai-tools
├── /services/business-automation
├── /services/mobile-apps
└── /services/saas-development
```

`/services` is the overview hub. Dedicated pages provide deeper service-specific conversion content.

The documentation may describe all five approved routes, but the live technical sitemap must not include a route until its page exists and is publicly accessible.

---

## 6. Document Maintenance Rules

When adding a durable document:

1. Give it one clear purpose.
2. Mark its status where appropriate: Draft, Approved, Superseded, or Historical.
3. Avoid duplicating rules already controlled elsewhere.
4. Add it to this index.
5. Record what it overrides or supersedes.
6. Update references in related governing documents.

When superseding a document, do not silently leave both files appearing equally authoritative.

---

## 7. Planned Documentation Cleanup

The following cleanup is recommended but must be performed only through an approved task:

1. Rename or replace `/docs/CLAUDE-IMPLEMENTATION-BRIEF.md` with vendor-neutral `/docs/IMPLEMENTATION-BRIEF.md`.
2. Consolidate the currently fragmented brand documents into a clearly indexed brand source of truth, without changing approved brand direction.
3. Reconcile older homepage hero references with the latest approved implementation and work order.
4. Store all approved service-page copy in a consistent `/docs/services/` structure.
5. Archive completed issue files separately from governing documentation.
