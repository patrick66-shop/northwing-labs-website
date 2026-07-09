# NorthWing Labs Component System

This document defines the reusable UI component system for the NorthWing Labs website.

Claude Code should use this document together with:

1. `SITEMAP.md`
2. `HOMEPAGE-ARCHITECTURE.md`
3. `WEBSITE-CONTENT.md`
4. `HOMEPAGE-DESIGN-SPEC.md`
5. `NORTHWING-BRAND-GUIDE.md`
6. `ASSET-MANIFEST.md`
7. `RESPONSIVE-SPEC.md`

The goal is to build one coherent component system that can be reused throughout the site. Do not create one-off button, card, heading, or section patterns unless a page-specific requirement clearly justifies it.

---

## 1. Component Design Principles

All components should be:

- Reusable
- Accessible
- Responsive
- Visually consistent
- Easy to maintain
- Clear in purpose
- Built around the approved brand system

Avoid:

- Duplicate styling patterns
- Unnecessary variants
- Random gradients
- Inconsistent spacing
- Different border-radius systems
- Inconsistent icon sizes
- Different button behavior in different sections
- Hidden interaction behavior
- Decorative complexity without functional value

---

## 2. Component Inventory

The initial component system should include:

```text
Layout
├── SiteContainer
├── SectionWrapper
├── SectionHeader
├── ContentGrid
└── TwoColumnLayout

Navigation
├── SiteHeader
├── DesktopNavigation
├── MobileNavigation
└── SiteFooter

Actions
├── PrimaryButton
├── SecondaryButton
├── TextLink
└── CTAGroup

Content
├── SectionEyebrow
├── SectionHeading
├── SupportingCopy
├── IconLabel
└── Badge

Cards
├── ProblemCard
├── ServiceCard
├── OutcomeCard
├── DifferentiatorCard
├── ResultCard
├── MetricCard
└── ProjectShowcase

Process
├── ProcessStep
├── ProcessConnector
└── ProcessTimeline

Media
├── HeroVisual
├── ProductMockup
├── DeviceMockup
├── AnnotationCallout
└── DecorativeLayer

Conversion
├── CTASection
├── ContactPrompt
└── CTAButtonGroup
```

---

## 3. SiteContainer

### Purpose

Provide consistent horizontal alignment and maximum content width.

### Recommended Rules

```css
width: 100%;
max-width: 1280px;
margin-inline: auto;
padding-inline: 24px;
```

Desktop wide-screen padding may increase to approximately:

`32–48px`

Mobile:

`20–24px`

### Usage

Use inside all major sections.

Do not create independent max-width values for individual sections unless a documented content-width constraint requires it.

---

## 4. SectionWrapper

### Purpose

Provide consistent vertical spacing, background treatment, and section boundaries.

### Variants

- `light`
- `dark`
- `tinted`
- `transparent`

### Recommended Spacing

Desktop:

`96–128px` top and bottom

Tablet:

`72–96px`

Mobile:

`56–72px`

### Rules

- Use semantic `<section>` elements where appropriate.
- Preserve clear visual rhythm between dark and light sections.
- Do not compress section spacing to fit more content above the fold.

---

## 5. SectionHeader

### Purpose

Provide a consistent hierarchy for:

1. Eyebrow
2. Heading
3. Supporting copy

### Anatomy

```text
SectionEyebrow
SectionHeading
SupportingCopy
```

### Alignment Variants

- `left`
- `center`

Use left alignment by default.

Use centered alignment only where it improves composition, such as:
- Final CTA
- Selected outcome sections
- Selected results sections

### Width Guidance

Recommended max width:

`720–820px`

Do not allow supporting copy to stretch across the full page width.

---

## 6. SectionEyebrow

### Typography

Font:

Manrope

Weight:

700

Size:

`13–14px`

Case:

Uppercase

Letter spacing:

Approximately `0.08em`

### Color Variants

Default on light:

Flight Blue `#0D69CE`

On dark:

Flight Gold `#EDB743` or Flight Blue where contrast remains sufficient

### Rules

- Keep text short.
- Do not wrap to multiple lines.
- Do not overuse Flight Gold.

---

## 7. SectionHeading

### Font

Manrope

### Recommended Scale

Desktop:

`36–44px`

Tablet:

`32–38px`

Mobile:

`28–34px`

### Weight

700

### Line Height

Approximately:

`1.10–1.20`

### Color

Light sections:

NorthWing Navy `#052862`

Dark sections:

Wing White `#FFFFFF`

### Rules

- Keep line length controlled.
- Use natural line breaks only where composition benefits.
- Do not apply decorative gradients to heading text.

---

## 8. SupportingCopy

### Font

Inter

### Weight

400

### Desktop Size

`17–20px`

### Line Height

`1.55–1.65`

### Color

Light sections:

NorthWing Slate or NorthWing Midnight

Dark sections:

Cloud Gray or Wing White with reduced emphasis

### Width

Recommended:

`560–720px`

depending on context.

---

## 9. PrimaryButton

### Purpose

Primary conversion action.

### Examples

- Start a Conversation
- Book a Discovery Call
- Discuss Your Project

### Styling

Background:

Flight Gold `#EDB743`

Text:

NorthWing Midnight `#051231`

Font:

Inter 600

Height:

`44–48px` minimum

Padding:

`18–24px` horizontal

Radius:

`8–12px`

### Hover

- Slight lift
- Slight brightness shift
- Subtle shadow increase
- No excessive glow

### Focus

Must include a visible keyboard focus state.

### Rules

Use one primary action per local decision area.

Do not place multiple competing gold buttons beside one another.

---

## 10. SecondaryButton

### Variant A — Dark Background

Background:

Transparent

Border:

Wing White

Text:

Wing White

### Variant B — Light Background

Background:

NorthWing Navy

Text:

Wing White

Border:

NorthWing Navy

### Shared Rules

Font:

Inter 600

Min height:

`44–48px`

Radius:

Match PrimaryButton

Hover:

- Slight lift
- Small contrast shift
- Maintain clear accessibility

---

## 11. TextLink

### Purpose

Lower-emphasis navigation or content action.

### Color

Default:

Flight Blue

Hover:

NorthWing Blue

### Behavior

Use underline or clear hover treatment in text-heavy contexts.

Do not use Flight Gold as the default link color.

---

## 12. CTAGroup

### Purpose

Group a primary and optional secondary action.

### Desktop

Inline layout.

Gap:

`12–16px`

### Mobile

Wrap or stack depending on width.

Primary action should retain stronger visual hierarchy.

---

## 13. Badge

### Purpose

Short contextual status label.

### Example

`INTERNAL PRODUCT`

### Styling

Font:

Inter 600 or Manrope 700

Size:

`12–13px`

Case:

Uppercase

Letter spacing:

`0.06–0.08em`

### Variant

Dark section:

- Transparent background
- Flight Gold text or border
- Small radius

### Rules

Use sparingly.

Do not turn badges into decorative pills without purpose.

---

## 14. ProblemCard

### Purpose

Present business pain points.

### Anatomy

1. Optional small accent marker
2. Title
3. Short explanatory copy

### Styling

Background:

Wing White

Border:

Cloud Gray

Heading:

NorthWing Navy

Body:

NorthWing Midnight or Slate

Padding:

`24–32px`

Radius:

`14–18px`

Shadow:

Very subtle

### Hover

Optional slight lift only.

### Rules

- Keep text concise.
- Avoid oversized icons.
- Prioritize recognition over decoration.

---

## 15. ServiceCard

### Purpose

Present one NorthWing Labs service.

### Anatomy

1. Approved service icon
2. Service title
3. Short description
4. Optional link treatment

### Styling

Background:

Wing White

Border:

Cloud Gray

Heading:

NorthWing Navy

Body:

NorthWing Slate or Midnight

Icon display size:

`80–112px`

Padding:

`28–36px`

Radius:

`16–20px`

### Hover

- Slight lift
- Subtle border emphasis
- No heavy glow

### Rules

- Use only approved service icons.
- Keep icon size consistent.
- Use live HTML for titles and descriptions.
- Do not substitute icon-library artwork.

---

## 16. OutcomeCard

### Purpose

Communicate business outcomes.

### Anatomy

1. Optional small icon or marker
2. Outcome title
3. One-sentence explanation

### Recommended Use

- Save Time
- Respond Faster
- Reduce Errors
- Improve Visibility
- Create Better Experiences
- Support Growth

### Styling

May use light cards on a dark section or dark cards within a navy section.

Keep one outcome per card.

Flight Gold may emphasize one key card or marker, but should not dominate the set.

---

## 17. DifferentiatorCard

### Purpose

Explain why NorthWing Labs works differently.

### Anatomy

1. Small accent marker
2. Heading
3. Short explanation

### Styling

Lighter than ServiceCard.

Recommended:

- Minimal border
- Little or no shadow
- Strong heading hierarchy
- Restrained visual treatment

### Rules

This section should feel calm and credible, not promotional.

---

## 18. ResultCard

### Purpose

Present qualitative business value.

### Examples

- Less Manual Work
- Faster Customer Response
- Clearer Business Visibility
- More Consistent Processes
- Better Customer Experiences
- Systems Ready for Growth

### Anatomy

1. Small marker or icon
2. Result title
3. Short supporting copy

### Rules

Do not fabricate numerical claims.

Do not use fake percentages.

---

## 19. MetricCard

### Purpose

Present verified quantitative outcomes when real metrics exist.

### Anatomy

1. Primary metric
2. Short label
3. Optional change indicator
4. Minimal context

### Example

```text
8 hrs
Saved per week
```

### Styling

Follow:

`northwing-metric-result-card-style-guide.png`

### Rules

- One primary metric per card.
- Use Flight Gold only for important emphasis.
- Do not include unverified numbers.

---

## 20. ProcessStep

### Purpose

Represent one stage in the seven-step process.

### Anatomy

1. Step number
2. Title
3. Description
4. Optional connector

### Styling

Step number:

Flight Blue or Flight Gold accent

Title:

Manrope 600–700

Body:

Inter 400

### Desktop Layout

Use within:
- Horizontal wrapped flow
- Controlled timeline
- 4 + 3 grid pattern

### Mobile Layout

Vertical sequence with visible progression.

### Rules

Do not compress all seven steps into a single unreadable row.

---

## 21. ProcessConnector

### Purpose

Show direction between process steps.

### Styling

Use:

- Flight Blue line
- Subtle node marker
- Optional Flight Gold directional accent

### Rules

- Keep connectors secondary to step content.
- Avoid complex animations.
- Preserve readability on mobile.

---

## 22. ProcessTimeline

### Purpose

Compose the seven-step process into one reusable pattern.

### Desktop

Preferred options:

- 4 steps first row + 3 second row
- Horizontal path with controlled wrap

### Mobile

Vertical flow.

### Style Reference

`northwing-workflow-diagram-style-guide.png`

---

## 23. ProjectShowcase

### Purpose

Present a featured product or case study.

### Anatomy

1. Project label
2. Project title
3. Project summary
4. Capabilities demonstrated
5. CTA
6. Product visual

### Desktop

Recommended:

- 55–60% visual
- 40–45% content

### Mobile

- Content first
- Visual second

### Visual References

- Browser/dashboard style guide
- Dashboard + mobile combo guide
- Callout and annotation guide

### Rules

- Clearly label internal products, demonstrations, and client work.
- Do not invent case studies.
- Keep annotations minimal.

---

## 24. HeroVisual

### Purpose

Display the main homepage hero artwork.

### Asset

`/public/images/hero/northwing-hero-workflow-visual.png`

### Rules

- Maintain aspect ratio
- Use `object-fit: contain`
- Do not crop important content
- Keep behind-copy overlap to a minimum
- Use supporting glow behind it, not on top of it

---

## 25. ProductMockup

### Purpose

Present dashboard, browser, or SaaS product interfaces.

### Styling

- Clean browser frame
- Subtle shadow
- Blue radial glow behind
- Minimal callouts
- No exaggerated 3D perspective

### Style Reference

`northwing-browser-dashboard-mockup-style-guide.png`

---

## 26. DeviceMockup

### Purpose

Present mobile app screens.

### Styling

- Clean device frame
- Minimal depth
- Soft blue glow
- No glossy reflections
- Avoid excessive tilt

### Style Reference

`northwing-mobile-app-mockup-style-guide.png`

---

## 27. AnnotationCallout

### Purpose

Explain a specific interface feature or result.

### Anatomy

1. Short label
2. Thin connector line
3. Small anchor point

### Accent Colors

Default:

Flight Blue

Important outcome:

Flight Gold

### Rules

- Explain only meaningful features.
- Do not annotate every visible UI element.
- Keep labels short.

### Style Reference

`northwing-callout-annotation-style-guide.png`

---

## 28. DecorativeLayer

### Purpose

Provide controlled use of approved decorative assets.

### Supported Assets

- Workflow line overlay
- Blue radial glow
- Gold flight path
- Footer network wave

### Rules

- Decorative assets must remain subordinate.
- Use low opacity.
- Do not combine every decorative asset in one section.
- Avoid repeated background tiling.

---

## 29. CTASection

### Purpose

Create a focused conversion area.

### Anatomy

1. Eyebrow
2. Heading
3. Supporting copy
4. CTAGroup
5. Optional decorative layer

### Styling

Background:

NorthWing Midnight or Navy

Primary CTA:

Flight Gold

Secondary CTA:

White outline

### Layout

Centered content.

Recommended max width:

`760px`

### Rules

Keep composition simple and conversion-focused.

---

## 30. SiteHeader

### Anatomy

1. Logo
2. Desktop navigation
3. Primary CTA
4. Mobile menu trigger

### Behavior

Top of page:

- Transparent or integrated into hero
- Reversed logo
- White navigation text

Scrolled state:

- Stable solid background
- Clear contrast
- Optional subtle shadow or border

### Rules

- Logo links home.
- Do not include a separate Home nav item.
- Keep navigation labels aligned with `SITEMAP.md`.

---

## 31. DesktopNavigation

### Items

- Services
- Solutions
- Work
- Process
- About
- Contact

### CTA

Start a Conversation

### Typography

Inter 500–600

### Rules

Maintain clear spacing and avoid dropdowns in Version 1 unless required later.

---

## 32. MobileNavigation

### Purpose

Provide simple, accessible navigation on small screens.

### Requirements

- Clear menu trigger
- Full list of primary navigation items
- Primary CTA inside menu
- Keyboard accessible
- Focus trapped while open
- Escape key closes menu
- Body scroll controlled while menu is open

### Rules

Avoid tiny flyout menus or crowded horizontal links.

---

## 33. SiteFooter

### Anatomy

1. Brand block
2. Company links
3. Services links
4. Explore links
5. Legal links
6. Copyright
7. Footer network wave

### Background

NorthWing Midnight

### Logo

Use reversed logo.

### Text

Primary:

Wing White

Secondary:

Cloud Gray or Steel Gray

### Rules

- Do not tile footer texture.
- Keep links easy to scan.
- Maintain clear spacing between groups.

---

## 34. Responsive Component Rules

All components should support:

- Desktop
- Tablet
- Mobile

General rules:

- Multi-column card grids should collapse predictably.
- Text should remain readable without manual zoom.
- Touch targets should be at least approximately `44px`.
- Content should never require horizontal scrolling.
- Decorative assets may be reduced or removed on mobile.
- Complex visual layouts should simplify rather than merely shrink.

Detailed breakpoint behavior belongs in:

`RESPONSIVE-SPEC.md`

---

## 35. Accessibility Requirements

All components must:

- Use semantic HTML
- Maintain visible focus states
- Preserve sufficient contrast
- Use descriptive link text
- Use meaningful alt text for informative images
- Use empty alt text for decorative images where appropriate
- Support keyboard interaction
- Respect reduced-motion preferences
- Avoid interaction states that depend only on color

---

## 36. Motion Rules

Approved motion:

- Small fade and rise on reveal
- Slight card hover lift
- Small CTA arrow movement
- Subtle process-step stagger

Avoid:

- Constant pulse
- Rotating icons
- Large looping motion
- Distracting parallax
- Overly long transitions

Recommended transition duration:

`150–300ms`

Use motion for feedback and hierarchy, not decoration.

---

## 37. Shared Spacing Rules

Recommended component spacing scale:

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
128px
```

Prefer this scale over arbitrary values.

---

## 38. Shared Radius Rules

| Element | Radius |
|---|---:|
| Buttons | 8–12px |
| Small Cards | 12–16px |
| Large Cards | 16–20px |
| Mockup Containers | 18–24px |

Use a coherent radius system.

---

## 39. Shared Shadow Rules

Small card:

Very subtle soft shadow

Large feature card:

Moderate depth

Mockup:

Moderate product-style elevation

Hover:

Small shadow increase only

Avoid:

- Hard black shadows
- Excessive glow
- Multiple unrelated shadow systems

---

## 40. Recommended Component Build Order

### Stage 1 — Foundation

Build:

- SiteContainer
- SectionWrapper
- SectionHeader
- SectionEyebrow
- SectionHeading
- SupportingCopy
- PrimaryButton
- SecondaryButton
- CTAGroup

### Stage 2 — Navigation

Build:

- SiteHeader
- DesktopNavigation
- MobileNavigation
- SiteFooter

### Stage 3 — Core Cards

Build:

- ProblemCard
- ServiceCard
- OutcomeCard
- DifferentiatorCard
- ResultCard

### Stage 4 — Process

Build:

- ProcessStep
- ProcessConnector
- ProcessTimeline

### Stage 5 — Showcase

Build:

- Badge
- ProductMockup
- DeviceMockup
- AnnotationCallout
- ProjectShowcase

### Stage 6 — Conversion

Build:

- CTASection
- ContactPrompt
- Final CTA patterns

---

## 41. Claude Code Component Rules

Claude Code must:

1. Create reusable components.
2. Avoid duplicated component markup where reasonable.
3. Keep variants explicit and limited.
4. Follow approved colors and typography.
5. Use approved asset paths.
6. Preserve accessibility.
7. Keep responsive behavior deliberate.
8. Avoid introducing additional design systems or UI libraries that override the brand system.
9. Avoid default framework styling that conflicts with NorthWing brand standards.
10. Document component props and variants clearly.
11. Keep components composable.
12. Build in reviewable stages.

---

## 42. Component Acceptance Criteria

The component system is ready for approval when:

- Buttons are consistent across the site
- Headings follow one hierarchy
- Cards share a coherent visual system
- Navigation behaves consistently
- Process steps work on desktop and mobile
- Product mockups use approved styling
- CTA hierarchy is obvious
- Accessibility states are visible
- Components do not overflow at small widths
- Decorative assets remain restrained
- No unsupported visual patterns have been introduced
- Component variants remain limited and understandable
