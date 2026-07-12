# NorthWing Labs Claude Implementation Brief

This document is the master implementation instruction for Claude Code.

Claude Code should use the approved documentation and assets in the repository as the source of truth for the NorthWing Labs website build.

The objective is to implement the approved website system faithfully. Claude Code should act as the implementation engineer, not independently redesign the brand, rewrite approved content, or replace approved assets.

---

## 1. Project Objective

Build the NorthWing Labs Version 1 website using the approved:

- Sitemap
- Homepage architecture
- Production content
- Brand system
- Asset manifest
- Homepage design specification
- Component system
- Responsive specification

The website should be:

- Modern
- Practical
- Credible
- Responsive
- Accessible
- Conversion-oriented
- Appropriate for a B2B software, AI, automation, mobile app, and SaaS development company serving small businesses

---

## 2. Source of Truth

Read and follow these files before implementation:

```text
/docs/SITEMAP.md
/docs/NORTHWING-BRAND-GUIDE.md
/docs/ASSET-MANIFEST.md
/docs/HOMEPAGE-ARCHITECTURE.md
/docs/WEBSITE-CONTENT.md
/docs/HOMEPAGE-DESIGN-SPEC.md
/docs/COMPONENT-SYSTEM.md
/docs/RESPONSIVE-SPEC.md
```

### Priority Order

If two documents appear to conflict, use this order of authority:

1. `WEBSITE-CONTENT.md` for production copy
2. `HOMEPAGE-ARCHITECTURE.md` for section order and purpose
3. `HOMEPAGE-DESIGN-SPEC.md` for visual layout and styling
4. `RESPONSIVE-SPEC.md` for breakpoint behavior
5. `COMPONENT-SYSTEM.md` for reusable component behavior
6. `ASSET-MANIFEST.md` for asset paths and usage
7. `NORTHWING-BRAND-GUIDE.md` for brand-level standards
8. `SITEMAP.md` for page structure and navigation

Do not resolve conflicts by inventing a new direction. Report the conflict clearly.

---

## 3. Critical Implementation Rules

Claude Code must:

1. Use approved production copy from `WEBSITE-CONTENT.md`.
2. Preserve homepage section order from `HOMEPAGE-ARCHITECTURE.md`.
3. Use approved assets from `ASSET-MANIFEST.md`.
4. Follow the approved color and typography system.
5. Build reusable components.
6. Follow the responsive behavior in `RESPONSIVE-SPEC.md`.
7. Maintain accessibility.
8. Maintain strong image performance.
9. Use live HTML text for production copy.
10. Keep decorative assets subordinate to content.
11. Build in controlled, reviewable stages.
12. Keep the website visually consistent with the NorthWing Labs brand.

Claude Code must not:

- Rewrite approved homepage copy
- Invent new marketing claims
- Invent customer testimonials
- Invent client logos
- Invent case studies
- Invent performance metrics
- Replace approved service icons
- Replace the logo system
- Recolor approved brand assets
- Introduce unrelated icon libraries for core service cards
- Create new sections without approval
- Remove approved sections without approval
- Introduce a conflicting UI design system
- Apply random gradients
- Overuse Flight Gold
- Add excessive animation
- Build a cyberpunk, crypto, or generic AI visual style

---

## 4. Approved Homepage Section Order

Implement the homepage in this order:

```text
1. Header / Navigation
2. Hero
3. Problem Recognition
4. Services Overview
5. Business Outcomes
6. How We Work
7. Featured Work / Demonstration
8. Why NorthWing Labs
9. Results / Value
10. Final CTA
11. Footer
```

Do not reorder these sections without explicit approval.

---

## 5. Approved Navigation

Primary navigation:

```text
Services
Solutions
Work
Process
About
Contact
```

Primary CTA:

```text
Start a Conversation
```

The NorthWing Labs logo should link to the homepage.

Do not add a separate `Home` navigation item.

---

## 6. Brand Foundation

### Fonts

Use:

- Manrope for display and heading roles
- Inter for body copy, navigation, buttons, labels, and UI

Follow the typography system in the Brand Guide and Homepage Design Spec.

### Core Colors

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

### Color Use

Flight Gold should remain scarce and intentional.

Use primarily for:

- Primary CTA
- Directional accents
- Important emphasis
- Selected labels or indicators

Do not use Flight Gold as a general body-text color.

---

## 7. Asset Usage

Use approved assets directly.

Do not recreate critical visual assets from scratch.

### Logo Assets

Use files from:

```text
/public/brand/logos/
```

### Favicon Assets

Use files from:

```text
/public/brand/favicons/
```

### Service Icons

Use:

```text
/public/brand/icons/services/custom-software.png
/public/brand/icons/services/ai-tools.png
/public/brand/icons/services/business-automation.png
/public/brand/icons/services/mobile-apps.png
/public/brand/icons/services/saas-development.png
```

### Hero Visual

Use:

```text
/public/images/hero/northwing-hero-workflow-visual.png
```

### Background Assets

Use approved files from:

```text
/public/images/backgrounds/
```

### Mockup Style References

Use approved style guides from:

```text
/public/images/mockups/
```

Important:

Mockup style-guide files are implementation references. They do not need to appear publicly on the website unless explicitly used as visible content.

### Social Sharing Image

Use:

```text
/public/images/social/northwing-social-share-default.png
```

for default Open Graph and social preview metadata.

---

## 8. Repository Expectations

Recommended project structure:

```text
NorthWing-Labs-Website/
├── public/
│   ├── brand/
│   │   ├── logos/
│   │   ├── favicons/
│   │   └── icons/
│   │       └── services/
│   └── images/
│       ├── hero/
│       ├── backgrounds/
│       ├── mockups/
│       └── social/
│
├── docs/
│   ├── SITEMAP.md
│   ├── NORTHWING-BRAND-GUIDE.md
│   ├── ASSET-MANIFEST.md
│   ├── HOMEPAGE-ARCHITECTURE.md
│   ├── WEBSITE-CONTENT.md
│   ├── HOMEPAGE-DESIGN-SPEC.md
│   ├── COMPONENT-SYSTEM.md
│   ├── RESPONSIVE-SPEC.md
│   └── CLAUDE-IMPLEMENTATION-BRIEF.md
│
└── source code
```

---

## 9. Component Requirements

Build reusable components aligned with `COMPONENT-SYSTEM.md`.

Initial component inventory should include:

```text
SiteContainer
SectionWrapper
SectionHeader
SectionEyebrow
SectionHeading
SupportingCopy
PrimaryButton
SecondaryButton
CTAGroup
Badge

SiteHeader
DesktopNavigation
MobileNavigation
SiteFooter

ProblemCard
ServiceCard
OutcomeCard
DifferentiatorCard
ResultCard
MetricCard

ProcessStep
ProcessConnector
ProcessTimeline

HeroVisual
ProductMockup
DeviceMockup
AnnotationCallout
DecorativeLayer

ProjectShowcase
CTASection
ContactPrompt
```

Keep variants explicit and limited.

Do not duplicate large blocks of markup unnecessarily.

---

## 10. Global Layout Standards

### Content Width

Use approximately:

```css
max-width: 1280px;
margin-inline: auto;
```

Use responsive side padding.

### Section Spacing

Desktop:

```text
96–128px
```

Tablet:

```text
72–96px
```

Mobile:

```text
56–72px
```

Maintain deliberate vertical rhythm.

---

## 11. Homepage Visual Rhythm

The homepage should follow this sequence:

```text
Header
↓
Dark Hero
↓
Light Problem Recognition
↓
Light Services
↓
Dark Business Outcomes
↓
Light Process
↓
Dark Featured Work
↓
Light Why NorthWing
↓
Light/Tinted Results
↓
Dark Final CTA
↓
Dark Footer
```

Do not make every section the same background color.

Do not create abrupt unrelated visual themes between sections.

---

## 12. Responsive Requirements

Follow `RESPONSIVE-SPEC.md`.

The intended device behavior is:

```text
Desktop:
Rich, spacious, visually layered

Tablet:
Balanced, simplified, readable

Mobile:
Clear, focused, stacked, conversion-oriented
```

Important rules:

- Do not mechanically shrink desktop layouts.
- Stack complex layouts deliberately.
- Preserve content order.
- Keep CTA hierarchy clear.
- Remove decorative complexity when necessary.
- Prevent horizontal overflow.
- Maintain readable image and annotation scale.

---

## 13. Accessibility Requirements

The implementation must:

- Use semantic HTML
- Maintain heading hierarchy
- Provide visible keyboard focus states
- Support keyboard navigation
- Maintain sufficient color contrast
- Avoid relying on color alone
- Use meaningful alt text for informative images
- Use empty alt text or CSS background implementation for decorative images
- Maintain touch targets of approximately 44px minimum
- Respect `prefers-reduced-motion`
- Ensure mobile navigation is accessible

Mobile navigation should:

- Trap focus while open
- Support Escape key close
- Control background scroll
- Provide a clear close action

---

## 14. Motion Rules

Use restrained motion only.

Approved:

- Small fade and rise on section entry
- Slight card hover lift
- Small CTA arrow movement
- Subtle process-step stagger

Avoid:

- Constant pulsing
- Rotating icons
- Excessive parallax
- Large autoplaying background video
- Distracting animated gradients
- Long transitions

Recommended transition duration:

```text
150–300ms
```

---

## 15. Performance Requirements

Claude Code should:

- Optimize production images
- Use responsive image sizing where practical
- Lazy-load below-the-fold imagery
- Avoid lazy-loading critical hero assets if it harms Largest Contentful Paint
- Avoid shipping style-guide reference images unless needed publicly
- Use CSS for simple gradients where appropriate
- Avoid unnecessary animation libraries
- Keep JavaScript payload reasonable
- Prevent layout shift from images and fonts

---

## 16. SEO and Metadata Foundation

At minimum, configure:

- Page title
- Meta description
- Canonical URL structure
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter/X card metadata if supported
- Favicon assets
- Semantic heading structure

Use:

```text
/public/images/social/northwing-social-share-default.png
```

as the default social preview image.

Do not invent page-specific SEO copy unless a source document provides it or approval is requested.

---

## 17. Homepage Build Sequence

Do not build the full homepage in one uncontrolled pass.

Use the following staged implementation process.

### Stage 1 — Project Foundation

Scope:

- Initialize project
- Configure fonts
- Configure brand color tokens
- Configure global spacing
- Configure shared container
- Configure global styles
- Configure favicon
- Configure metadata
- Verify all asset paths

Acceptance criteria:

- Project runs locally
- Manrope and Inter load correctly
- Brand tokens are available
- Favicon works
- Asset paths resolve
- No homepage visual design required yet

---

### Stage 2 — Header and Hero

Scope:

- SiteHeader
- DesktopNavigation
- MobileNavigation
- Hero layout
- Hero copy
- CTA group
- Hero visual
- Hero background
- Responsive behavior

Acceptance criteria:

- Desktop layout matches spec
- Tablet remains balanced
- Mobile stacks correctly
- Copy appears before image on mobile
- No visual clipping
- CTA hierarchy is correct
- Mobile navigation is accessible

---

### Stage 3 — Problem Recognition and Services

Scope:

- SectionHeader
- ProblemCard
- ServiceCard
- Approved service icons
- Responsive card layouts
- Light background treatment

Acceptance criteria:

- 2×2 problem grid desktop/tablet
- 1-column mobile
- 3+2 service layout desktop
- 2-column tablet
- 1-column mobile
- Approved icons used
- No icon distortion

---

### Stage 4 — Business Outcomes and Process

Scope:

- OutcomeCard
- Dark outcome section
- ProcessStep
- ProcessConnector
- ProcessTimeline
- Process CTA

Acceptance criteria:

- Outcome grid remains readable
- Process does not compress seven steps into one unreadable row
- Mobile process becomes vertical
- Workflow styling matches approved direction

---

### Stage 5 — Featured Work

Scope:

- Badge
- ProjectShowcase
- ProductMockup
- AnnotationCallout
- Internal Product label
- Featured project content

Acceptance criteria:

- Project is clearly labeled as internal product
- Mockup remains readable
- Desktop visual/content balance is correct
- Mobile content comes before visual
- Annotation count remains restrained

---

### Stage 6 — Why NorthWing and Results

Scope:

- DifferentiatorCard
- ResultCard
- Light section styling
- Responsive grids

Acceptance criteria:

- Why NorthWing section feels calm and credible
- Results section uses no fabricated metrics
- Card hierarchy remains consistent

---

### Stage 7 — Final CTA and Footer

Scope:

- CTASection
- Final conversion copy
- CTA group
- SiteFooter
- Reversed logo
- Footer navigation
- Footer network wave

Acceptance criteria:

- CTA hierarchy is obvious
- Footer links match sitemap
- Footer remains readable on mobile
- Network wave does not reduce legibility

---

### Stage 8 — Responsive Refinement

Review:

- 320px
- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+

Fix:

- Overflow
- Clipping
- Cramped navigation
- Narrow cards
- Poor image scaling
- CTA wrapping
- Footer usability
- Decorative clutter

---

### Stage 9 — Accessibility and Performance QA

Review:

- Keyboard navigation
- Focus states
- Mobile navigation behavior
- Reduced-motion handling
- Image alt text
- Contrast
- Touch targets
- Semantic structure
- Image loading
- Layout shift
- Asset weight

---

## 18. GitHub Issue Strategy

Recommended issue sequence:

```text
Issue 1: Project Foundation
Issue 2: Header + Hero
Issue 3: Problem Recognition + Services
Issue 4: Outcomes + Process
Issue 5: Featured Work
Issue 6: Why NorthWing + Results
Issue 7: Final CTA + Footer
Issue 8: Responsive QA
Issue 9: Accessibility + Performance QA
```

Do not combine unrelated stages into one oversized implementation issue.

Each issue should include:

- Scope
- Required source files
- Required assets
- Acceptance criteria
- Out-of-scope items
- Screenshots required for review

---

## 19. Screenshot Review Requirements

At the end of each visual implementation stage, provide screenshots for:

- Desktop
- Tablet
- Mobile

Suggested widths:

```text
Desktop: 1440px
Tablet: 768px
Mobile: 390px
```

Do not wait until the full homepage is complete before visual review.

---

## 20. Review Method

Review should occur in layers.

### Review Layer 1 — Structure

Check:

- Correct section order
- Correct content placement
- Correct navigation
- Correct component usage

### Review Layer 2 — Visual Fidelity

Check:

- Brand colors
- Typography
- Spacing
- Card consistency
- Asset placement
- Dark/light rhythm

### Review Layer 3 — Responsive Behavior

Check:

- Mobile stacking
- Tablet balance
- Grid collapse
- Image scaling
- Navigation behavior

### Review Layer 4 — Interaction

Check:

- CTA states
- Menu behavior
- Focus states
- Hover states
- Links

### Review Layer 5 — QA

Check:

- Accessibility
- Performance
- SEO metadata
- Image loading
- Broken links
- Layout shift

---

## 21. Out-of-Scope for Initial Homepage Build

Do not add unless separately approved:

- Blog
- Resource center
- Careers page
- Pricing page
- Industry-specific landing pages
- Fake testimonials
- Fake partner logos
- Large case-study library
- CMS integration
- Complex animation system
- Video background

Individual service detail pages have since been separately approved
(Custom Software, AI Tools, Business Automation, Mobile Apps, SaaS
Development) — see docs/SITEMAP.md section 4 and
docs/SERVICE-PAGES-CONTENT.md.

---

## 22. Completion Criteria

The initial homepage implementation is complete when:

- All approved sections are present
- Copy matches `WEBSITE-CONTENT.md`
- Approved assets are used
- Brand fonts and colors are correct
- Components are reusable
- Responsive behavior matches the spec
- No horizontal overflow exists
- Mobile navigation is accessible
- CTA hierarchy is clear
- No unsupported claims are present
- Dark/light section rhythm is preserved
- Images are optimized
- Metadata and favicon are configured
- Accessibility and performance QA are complete
- Desktop, tablet, and mobile screenshots have been reviewed

---

## 23. Final Implementation Principle

The website should be built from approved decisions, not improvised during coding.

Use this sequence:

```text
Architecture
↓
Approved Copy
↓
Design Specification
↓
Component System
↓
Responsive Specification
↓
Implementation
↓
Screenshot Review
↓
Refinement
↓
QA
↓
Launch
```

Claude Code should preserve this process throughout the NorthWing Labs website build.
