# NorthWing Labs Website — Project State

**Last updated:** July 12, 2026
**Status:** Verified Codex transition checkpoint
**Owner:** Patrick Nichols
**Verified against:** `main`, route tree, Git status, and recent commits on July 12, 2026.

---

## 1. Product and Website Objective

NorthWing Labs helps growing small businesses and owner-led teams improve operations through practical custom software, AI tools, business automation, mobile apps, and SaaS development.

The website is intended to:

- Explain the business problems NorthWing Labs solves.
- Establish practical technical credibility.
- Demonstrate a clear, manageable delivery process.
- Present real and transparently labeled products or demonstrations.
- Convert qualified visitors through **Start a Conversation**.
- Serve as the first documented case study for a repeatable “10K Value Website” build system.

Primary audience:

- Growing small-business owners and owner-led teams dealing with manual work, disconnected systems, slow customer response, limited visibility, and operational strain.

Secondary audience:

- Entrepreneurs and small teams with ideas for custom software, internal tools, mobile apps, or SaaS products.

---

## 2. Approved Brand and Messaging Direction

Approved positioning principles:

- Lead with business problems and outcomes before technology.
- Use plain, direct business language.
- Recommend practical solutions rather than unnecessary complexity.
- Emphasize direct partnership and small-business reality.
- Do not imply NorthWing Labs is a large agency.
- Do not fabricate proof, metrics, testimonials, logos, or case studies.

Primary CTA:

```text
Start a Conversation
```

Approved tagline:

```text
Helping Your Business Take Flight.
```

Approved service categories:

```text
Custom Software
AI Tools
Business Automation
Mobile Apps
SaaS Development
```

---

## 3. Route Status

### Implemented Public Routes

```text
/
/services
/services/custom-software
/services/ai-tools
/services/business-automation
/services/mobile-apps
/contact
```

These are the only routes eligible for the live technical sitemap at this checkpoint.

### Approved Service Structure

```text
/services
├── /services/custom-software
├── /services/ai-tools
├── /services/business-automation
├── /services/mobile-apps
└── /services/saas-development
```

The `/services` page remains the overview hub.

The documentation sitemap may list approved future routes. The live technical sitemap contains only implemented, public routes.

### Approved but Not Implemented Service Routes

```text
/services/saas-development
```

### Other Planned Routes

The following routes are referenced by project documentation or the current interface but are not implemented:

```text
/solutions
/work
/process
/about
/privacy
/terms
```

`/pricing` is not implemented and remains outside the approved Version 1 route plan unless a later work order authorizes it.

---

## 4. Implementation Status

| Area | Status |
|---|---|
| Project foundation and shared visual system | Established |
| Homepage | Implemented; remaining visual and keyboard validation is tracked below |
| `/services` overview | Implemented |
| Custom Software service page | Implemented service-family reference |
| AI Tools service page | Implemented service-family reference |
| Business Automation service page | Implemented, revised (3/2/1 Automation Opportunities grid), Product Owner approved, and merged to `main` in PR #23 (2026-07-12). |
| Contact page | Implemented and live delivery verified. Product Owner approved in production at commit `ab92782`. |
| Contact thank-you page | Implemented and validated; redirects after confirmed inquiry and visitor-email processing; Product Owner review pending |
| Mobile Apps service page | Implemented by Claude Code (2026-07-12); copy (recorded in `docs/SERVICE-PAGES-CONTENT.md`) and page reviewed and approved by the Product Owner on 2026-07-12. The prior ChatGPT work order was lost to truncation and its stub deleted. |
| SaaS Development service page | Approved but not implemented |
| Technical sitemap | Implemented with the six currently public routes only, including `/contact` |
| Codex governance | Transition files prepared for repository history |

Do not mark a page approved merely because it exists. Product Owner review is required.

---

## 5. Current Immediate Priority

1. SaaS Development service page (copy to be drafted for approval on
   the same model as Mobile Apps).
2. Resolve or sequence links that currently target unimplemented routes
   (`/solutions`, `/work`, `/process`, `/about`, `/privacy`, `/terms`).

The Business Automation grid revision is complete: it shipped inside
PR #23 with Product Owner approval.

---

## 6. Known Follow-Up Items

- Header, footer, service cards, and CTAs still include links to routes that are not implemented; `/contact` and `/services/mobile-apps` are now implemented.
- The configured `next lint` command is incompatible with the installed Next.js version and must be repaired in a separate task.
- No automated test suite is configured.
- Full keyboard validation and visual review at required desktop, tablet, and mobile widths remain to be completed.
- Brand governance is split across `/docs/01_Brand_Foundation.md` through `/docs/09_Digital_Social_Applications.md`; future approved consolidation would improve discoverability.
- The Claude-specific master implementation brief remains transitional pending an approved vendor-neutral documentation task.
- Historical implementation issues remain mixed with governing documentation and should not override current approved sources.

---

## 7. Verified Technical State

| Item | Current value |
|---|---|
| Framework | Next.js 16 App Router |
| Language | TypeScript with React 19 |
| Styling system | Global CSS design tokens and CSS Modules |
| Package manager | npm with `package-lock.json` |
| Node version used for onboarding | 24.15.0 |
| Lint command | `npm run lint` — currently fails because `next lint` is unsupported by the installed Next.js version |
| Type-check command | No package script; verified with `tsc --noEmit --incremental false` |
| Test command | Not configured |
| Production build command | `npm run build` |
| Local development command | `npm run dev` |
| Deployment platform | Vercel; Contact page production deployment verified Ready |
| Production URL | `https://northwinglabs.com` |
| Technical sitemap implementation | `app/sitemap.ts`; implemented public routes only |
| Analytics implementation | None found |

Do not guess missing technical values.

---

## 8. Quality Standard

A page is not complete until it has been checked for:

- Approved content fidelity.
- Visual consistency with the established page family.
- Reusable component usage.
- Desktop, tablet, and mobile behavior.
- Keyboard accessibility and focus states.
- Semantic heading structure.
- Image performance and aspect ratio.
- Metadata and canonical route.
- Internal links and CTA destinations.
- Lint, type checking, tests, and production build where configured.
- Product Owner review.

---

## 9. Next Planned Service Pages

1. Mobile Apps — implemented and Product Owner approved (2026-07-12).
2. SaaS Development — not started; copy will be drafted for Product
   Owner approval on the same model.

Each page requires Product Owner-approved copy before it can be marked
approved. Where a work order is lost or unavailable, the drafted copy
recorded in `docs/SERVICE-PAGES-CONTENT.md` serves as the review
artifact.

---

## 10. Update Log

| Date | Change |
|---|---|
| 2026-07-12 | Created provisional Codex transition snapshot based on current Product Owner workflow. Repository verification still required. |
| 2026-07-12 | Verified repository state; recorded public and planned routes, Business Automation review status, technical stack, and known follow-up work. |
| 2026-07-12 | Closed the Contact page milestone: production route, internal inquiry delivery, visitor confirmation delivery, Reply-To behavior, Resend events, verified sender domain, success state, and Vercel deployment confirmed at `ab92782`; Product Owner approved. |
| 2026-07-12 | Implemented `/contact/thank-you`, successful-submission redirect, `noindex, follow`, XML sitemap exclusion, and governing documentation; inquiry and visitor-confirmation delivery behavior preserved. |
| 2026-07-12 | Recorded that the Business Automation revision and approval completed in PR #23. Claude Code resumed as implementation developer. The truncated Mobile Apps work-order stub was deleted with Product Owner consent. |
| 2026-07-12 | Implemented `/services/mobile-apps` from drafted copy recorded in `docs/SERVICE-PAGES-CONTENT.md`; added the route to the technical sitemap. |
| 2026-07-12 | Product Owner reviewed and approved the Mobile Apps page and its copy; copy status updated to approved and the work merged to `main`. |
