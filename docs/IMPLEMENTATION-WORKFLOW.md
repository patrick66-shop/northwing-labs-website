# NorthWing Labs Website — Implementation Workflow

## Purpose

This document defines the controlled process for moving NorthWing Labs website work from idea to approved implementation.

The process is tool-neutral. Codex is the current implementation developer, but the repository and approval system remain the source of continuity.

---

## 1. Roles and Decision Rights

### Product Owner — Patrick Nichols

The Product Owner:

- Defines business goals and priorities.
- Reviews strategy, copy, structure, and visual direction.
- Approves work orders before implementation.
- Reviews completed implementation.
- Accepts, revises, defers, or rejects work.
- Authorizes commits, pushes, deployments, and releases when required.

### Product Engineer — ChatGPT

The Product Engineer:

- Converts business intent into strategy, requirements, content, specifications, and work orders.
- Checks proposals against the approved brand, target audience, messaging hierarchy, website strategy, and delivery approach.
- Challenges changes that weaken the established direction.
- Identifies documentation conflicts and recommends the stronger source of truth.
- Performs structured product-owner review of implementation reports and screenshots.

### Implementation Developer — Codex

Codex:

- Inspects the repository and governing documentation.
- Implements the approved work order faithfully.
- Reuses established patterns and components.
- Runs required validation.
- Reports changes, results, limitations, and conflicts.
- Does not independently approve its own work.

---

## 2. Work Statuses

Use these statuses in work orders, project-state notes, or issue tracking where practical:

```text
Proposed
Drafting
Product Owner Review
Approved for Implementation
In Progress
Implementation Review
Revision Required
Approved
Deferred
Superseded
```

Definitions:

- **Approved for Implementation:** Scope, copy, design direction, and acceptance criteria are approved. Coding may begin.
- **Implementation Review:** Codex has completed the work and provided evidence. Product Owner acceptance is pending.
- **Approved:** Product Owner has accepted the implementation.
- **Superseded:** A newer approved decision replaces the item.

Do not use “Approved” merely because a developer finished coding.

---

## 3. Standard Delivery Lifecycle

### Stage 1 — Define the Business Need

Record:

- The visitor or business problem.
- The desired outcome.
- The target audience.
- The conversion purpose.
- Why the work is needed now.

Do not start with implementation details unless the task is a narrow technical defect.

### Stage 2 — Confirm Strategic Fit

Evaluate the proposed work against:

- NorthWing Labs target audience.
- Brand positioning.
- Website narrative.
- Messaging hierarchy.
- Existing route and component architecture.
- Conversion strategy.
- Current project priorities.

If the proposal conflicts with the approved strategy, resolve the conflict before coding.

### Stage 3 — Produce and Approve the Specification

Depending on the task, approve:

- Production copy.
- Page or section architecture.
- Visual direction.
- Required assets.
- Responsive behavior.
- Accessibility requirements.
- SEO metadata.
- Acceptance criteria.

The Product Owner must explicitly approve the specification before implementation.

### Stage 4 — Create the Codex Work Order

Every work order should include:

1. Title.
2. Objective.
3. Business and page context.
4. Required route or component.
5. Required documentation to inspect.
6. Exact approved copy where relevant.
7. Existing implementation patterns to reuse.
8. Visual and asset requirements.
9. Responsive requirements.
10. Accessibility requirements.
11. SEO and metadata requirements.
12. Out-of-scope boundaries.
13. Acceptance criteria.
14. Required validation.
15. Required completion-report format.
16. Git restrictions.

Do not rely on a vague instruction such as “make the next page match.”

### Stage 5 — Establish a Safe Checkpoint

Before Codex edits:

- Confirm the correct repository and project root.
- Confirm the correct branch.
- Review `git status`.
- Preserve or resolve existing uncommitted work.
- Ensure no other coding agent is editing the same working tree.
- Commit and push the latest known-good checkpoint only when the Product Owner authorizes it.

Never use two coding agents simultaneously on the same worktree.

### Stage 6 — Codex Orientation and Plan

Codex must:

- Read `/AGENTS.md`.
- Read `/docs/PROJECT-STATE.md`.
- Follow `/docs/PROJECT-DOCUMENTATION-INDEX.md`.
- Read the active approved work order.
- Inspect relevant existing code and comparable pages.
- Report material conflicts.
- Produce a concise implementation plan for non-trivial work.

Codex should not re-read every Markdown file indiscriminately.

### Stage 7 — Implementation

Codex implements the smallest coherent change that satisfies the approved work order.

During implementation:

- Preserve approved copy.
- Reuse components.
- Avoid unrelated refactoring.
- Keep page-family consistency.
- Maintain accessibility and responsive behavior.
- Update authoritative documentation only when required.
- Keep the working tree understandable and reviewable.

### Stage 8 — Developer Validation

Codex runs the applicable repository checks:

- Formatting check.
- Lint.
- Type checking.
- Automated tests.
- Production build.
- Route and link verification.
- Metadata verification.
- Responsive visual review.
- Keyboard and accessibility checks.

For page work, capture evidence at approximately:

```text
Desktop: 1440px
Tablet: 768px
Mobile: 390px
```

Additional widths should be checked according to `/docs/RESPONSIVE-SPEC.md`.

### Stage 9 — Completion Report

Codex provides:

1. Summary.
2. Files created.
3. Files modified.
4. Routes and behavior changed.
5. Copy and asset fidelity confirmation.
6. Components reused or created.
7. Validation commands and results.
8. Responsive and accessibility checks.
9. Screenshots or other requested evidence.
10. Remaining warnings or limitations.
11. Git status.
12. Confirmation that no commit or push occurred unless authorized.

The report must distinguish:

- Successful checks.
- Failed checks.
- Checks not available or not run.
- Pre-existing warnings.
- Regressions introduced by the task.

### Stage 10 — Product Owner Review

Review the implementation in controlled passes:

1. Scope and content fidelity.
2. Structure and visual consistency.
3. Desktop layout.
4. Tablet layout.
5. Mobile layout.
6. Interaction and navigation.
7. Accessibility.
8. SEO and metadata.
9. Performance and build health.
10. Final polish.

Do not combine unrelated changes into one revision pass when separate work orders would be safer.

### Stage 11 — Revision

When changes are required:

- Create a focused revision work order.
- State what is wrong, where it appears, and what approved reference controls the fix.
- Preserve accepted portions of the implementation.
- Re-run affected validation.

Do not ask Codex to “improve everything” without specific acceptance criteria.

### Stage 12 — Approval and Repository Finalization

After Product Owner approval:

- Update `/docs/PROJECT-STATE.md`.
- Promote durable decisions into authoritative documentation.
- Mark superseded guidance where necessary.
- Commit and push only when authorized.
- Record the approved route or component as a reference pattern for future work.

---

## 4. Work Order Quality Checklist

Before sending a task to Codex, confirm:

- The goal is singular and clear.
- The correct route or component is named.
- Production copy is final.
- CTA destinations are known.
- Assets and paths are identified.
- Existing patterns to reuse are named.
- Responsive behavior is specified.
- Accessibility requirements are included.
- SEO requirements are included where relevant.
- Out-of-scope boundaries are explicit.
- Acceptance criteria are testable.
- Completion evidence is defined.
- Git actions are restricted unless requested.

---

## 5. Page Implementation Standard

For a new page, the work order should require:

- One H1.
- Logical H2/H3 hierarchy.
- Correct canonical route.
- Page title and meta description.
- Open Graph metadata.
- Approved social image or documented page-specific image.
- Internal navigation and CTA links.
- Accessible anchors where used.
- Existing header and footer.
- Shared section and card components.
- Intentional desktop, tablet, and mobile layouts.
- No horizontal overflow.
- Live HTML production copy.
- Approved image assets with correct alt treatment.
- Reduced-motion behavior.
- Validation and screenshots.

---

## 6. Documentation Workflow

### Governing Documents

Durable strategy, content, design, and implementation rules belong in authoritative files listed in `/docs/PROJECT-DOCUMENTATION-INDEX.md`.

### Work Orders

Work orders describe one approved implementation task. After completion, they become historical records unless they contain a durable decision that has been promoted into governing documentation.

### Project State

`/docs/PROJECT-STATE.md` should be updated when:

- A route is implemented or approved.
- The active priority changes.
- A material conflict is resolved.
- A major risk appears or is cleared.
- The development agent or workflow changes.
- A deployment or release milestone occurs.

### Documentation Conflicts

Do not leave conflicting documents both appearing current. Through an approved documentation task:

- Correct the authoritative file.
- Mark the older rule superseded or historical.
- Update the documentation index.
- Record the decision in project state where useful.

---

## 7. Agent Transition Procedure

When changing implementation tools or developers:

1. Stop concurrent edits.
2. Confirm a clean or understood working tree.
3. Preserve the latest known-good checkpoint.
4. Add or update `/AGENTS.md`.
5. Update the documentation index and project state.
6. Run a read-only repository onboarding audit.
7. Resolve material documentation conflicts.
8. Assign one low-risk controlled task.
9. Review quality against the same standards used for the previous developer.
10. Expand responsibility only after the trial passes.

Project knowledge must remain in the repository, not only in one agent’s conversation history.

---

## 8. Stop Conditions

Codex should stop the affected work and report before proceeding when:

- The active work order conflicts with approved production copy.
- Two approved sources specify incompatible designs or routes.
- Another agent has overlapping uncommitted edits.
- The requested route or asset does not exist and the task does not authorize creating it.
- A destructive migration or broad dependency change becomes necessary.
- Required credentials, environment variables, or external access are missing.
- The task would require inventing customer claims, metrics, or content.

Codex should continue with unaffected portions only when doing so cannot create inconsistent or disposable work.

---

## 9. Definition of Done

Implementation is ready for Product Owner review when:

- The approved scope is complete.
- Copy and assets match the approved sources.
- Existing patterns are reused appropriately.
- Responsive behavior is intentional.
- Accessibility requirements are met.
- SEO and links are correct.
- Applicable checks pass or failures are clearly documented.
- Requested screenshots or evidence are provided.
- Documentation is aligned where required.
- No unrelated changes are present.
- The completion report is complete.

Implementation becomes **Approved** only after Product Owner acceptance.
