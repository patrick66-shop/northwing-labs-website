# NorthWing Labs Website — Repository Agent Instructions

## Scope

This file applies to the entire NorthWing Labs website repository unless a more specific `AGENTS.md` or `AGENTS.override.md` exists in a subdirectory.

Codex must read this file before planning or changing the repository.

## Project Roles

- **Product Owner:** Patrick Nichols
- **Product Engineer:** ChatGPT
- **Implementation Developer:** Codex

The Product Owner approves strategy, scope, copy, design direction, and completed work. The Product Engineer converts approved decisions into implementation-ready specifications and work orders. Codex implements those approved specifications faithfully.

Codex is an implementation developer, not an independent product owner, copywriter, or brand designer.

## Project Objective

Build a credible, conversion-focused NorthWing Labs website for growing small businesses and owner-led teams that need practical software, AI tools, automation, mobile apps, or SaaS products.

The website must lead with business problems and outcomes. Technology is the means, not the message.

Primary conversion action:

```text
Start a Conversation
```

## Required Orientation

Before beginning any task:

1. Read this file.
2. Read `/docs/PROJECT-STATE.md`.
3. Read `/docs/PROJECT-DOCUMENTATION-INDEX.md`.
4. Read the active approved work order or issue.
5. Read only the governing documents identified by the documentation index and work order.
6. Inspect the relevant existing implementation before proposing changes.
7. Check `git status`, the current branch, and recent relevant commits.
8. Identify material conflicts before editing.

Do not treat every Markdown file as equally authoritative.

## Authority Order

When sources conflict, use this order:

1. The active Product Owner-approved work order.
2. Approved page-specific production copy and page specification.
3. Explicitly approved later decisions recorded in current project documentation.
4. `/docs/PROJECT-STATE.md` for implementation status and current priorities.
5. Page-specific architecture and design specifications.
6. Global production-content documents.
7. Global architecture, design, responsive, component, asset, brand, and sitemap documents.
8. Existing implementation as evidence of established patterns.
9. Historical GitHub issues, archived prompts, drafts, and superseded planning documents.

`AGENTS.md` controls agent behavior and repository workflow. It does not override approved production copy or page-specific design requirements.

Do not resolve a material conflict by inventing a compromise. Stop the affected portion, report the exact conflict, identify the competing sources, and recommend the most likely authoritative source.

## Core Implementation Rules

Codex must:

- Implement approved work rather than reinterpret it.
- Preserve approved production copy exactly unless the work order authorizes editing it.
- Use live HTML text for production copy.
- Reuse the established component system and page-family patterns.
- Inspect the most recently approved comparable page before creating a new pattern.
- Keep variants explicit, limited, and reusable.
- Use approved assets and preserve their aspect ratios.
- Follow the responsive specification deliberately at desktop, tablet, and mobile widths.
- Maintain semantic HTML, logical heading hierarchy, keyboard access, visible focus states, sufficient contrast, and reduced-motion support.
- Keep SEO metadata aligned with approved page copy and routes.
- Keep decorative effects subordinate to comprehension and conversion.
- Preserve a clean working tree outside the task scope.
- Document material decisions and validation results honestly.

Codex must not:

- Rewrite approved marketing copy.
- Invent claims, testimonials, client logos, case studies, results, metrics, pricing, or credentials.
- Imply NorthWing Labs is a large agency.
- Replace approved logos, service icons, or critical visual assets.
- Introduce a new design system, icon family, typography system, spacing system, or color palette without approval.
- Overuse Flight Gold.
- Add cyberpunk, crypto, neon, generic AI, or unrelated stock-technology aesthetics.
- Add sections, routes, dependencies, animations, or features not required by the task.
- Perform unrelated refactoring or cleanup.
- Modify generated, lock, or configuration files without a task-related reason.
- Commit, push, merge, deploy, delete branches, or rewrite Git history unless explicitly instructed.
- Run destructive Git commands to hide or discard unreviewed changes.
- Allow another coding agent to edit the same working tree concurrently.

## NorthWing Labs Brand Guardrails

The site should feel modern, practical, technically credible, clear, and premium without being flashy.

Approved core colors include:

```text
NorthWing Midnight: #051231
NorthWing Navy:     #052862
NorthWing Blue:     #033F91
Flight Blue:        #0D69CE
Flight Gold:        #EDB743
NorthWing Slate:    #5D6981
Steel Gray:         #95979C
Cloud Gray:         #CED3DB
Wing White:         #FFFFFF
```

Typography:

- Manrope for display and heading roles.
- Inter for body copy, navigation, buttons, forms, labels, and UI.

Flight Gold is a scarce conversion and directional accent, not a general decorative color.

## Content and Messaging Guardrails

Every page should help the visitor understand:

1. The business problem.
2. The practical outcome.
3. The relevant solution.
4. Why NorthWing Labs is credible and understandable.
5. What action to take next.

Use plain business language. Avoid unnecessary technical jargon and unsupported superlatives.

The visitor should not need to know which technology to request before starting a conversation.

## Service-Page Family Rules

Dedicated service pages belong to one coordinated family.

When implementing a service page:

1. Inspect the two most recently approved service pages.
2. Reuse their shared structure, components, spacing, responsive behavior, metadata pattern, CTA treatment, and visual rhythm.
3. Use the approved service-specific icon and production copy.
4. Do not create a third visual system because one page contains different content.
5. Make page-specific adaptations only where the approved content requires them.

The `/services` page remains the overview hub. Dedicated service pages provide deeper conversion content.

## Responsive and Accessibility Minimums

Test at minimum where the available tooling permits:

```text
320px
375px or 390px
430px
768px
1024px
1280px
1440px
```

Verify:

- No horizontal overflow.
- No clipped or overlapping content.
- No unreadable card widths.
- Mobile content order is intentional.
- Touch targets are approximately 44px minimum.
- CTA hierarchy remains clear.
- Images preserve aspect ratio.
- Decorative layers do not block content.
- Keyboard navigation and visible focus states work.
- Motion respects `prefers-reduced-motion`.

Do not mechanically shrink desktop layouts. Simplify and stack deliberately.

## Worktree and Git Safety

Before editing, report any pre-existing uncommitted changes relevant to the task.

Do not overwrite or discard work that Codex did not create.

If the working tree contains overlapping edits from another agent, stop and report the collision before proceeding.

Do not commit or push unless the Product Owner explicitly requests it. When a commit is requested, keep it focused and use a descriptive message.

## Validation

Discover the repository’s actual commands from `package.json`, configuration, and README. Run the applicable checks before claiming completion:

- Formatting check, when configured.
- Lint.
- Type checking.
- Automated tests.
- Production build.
- Route and link verification.
- Visual review at desktop, tablet, and mobile widths when browser tooling is available.

Do not claim a check passed unless it was run successfully. Distinguish pre-existing warnings from regressions introduced by the task.

## Documentation Changes

Update documentation only when the task requires it or implementation creates a durable project-state change.

When documentation must change:

- Update the authoritative file rather than creating a duplicate source of truth.
- Preserve unrelated sections.
- Mark superseded guidance clearly.
- Update `/docs/PROJECT-STATE.md` when implementation status, current priorities, or known risks materially change.
- Update `/docs/PROJECT-DOCUMENTATION-INDEX.md` when governing files are added, renamed, superseded, or reclassified.

## Required Completion Report

Every completed implementation task must report:

1. Summary of work completed.
2. Files created.
3. Files modified.
4. Routes or behavior added or changed.
5. Confirmation that approved copy and assets were preserved.
6. Reusable components created or reused.
7. Validation commands run and exact results.
8. Responsive and accessibility checks performed.
9. Screenshots or viewport evidence when required by the work order.
10. Remaining warnings, limitations, conflicts, or follow-up work.
11. Confirmation that no unrelated changes were made.
12. Git status and whether any commit or push occurred.

Do not describe work as approved. Implementation is not approved until the Product Owner reviews and accepts it.
