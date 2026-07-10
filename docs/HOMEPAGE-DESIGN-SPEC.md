# NorthWing Labs Homepage Design Specification

This document defines the approved visual and layout specification for the NorthWing Labs homepage.

Claude Code should use this file together with:

1. `SITEMAP.md`
2. `HOMEPAGE-ARCHITECTURE.md`
3. `WEBSITE-CONTENT.md`
4. `NORTHWING-BRAND-GUIDE.md`
5. `ASSET-MANIFEST.md`
6. `COMPONENT-SYSTEM.md`
7. `RESPONSIVE-SPEC.md`

This document controls homepage visual implementation. Do not reinterpret the brand direction or create new visual patterns without explicit approval.

---

## 1. Global Homepage Design Principles

The homepage should feel:

- Modern
- Practical
- Technically credible
- Clear
- Premium without being flashy
- Appropriate for a B2B software and automation company
- Designed for small-business decision makers

Avoid:

- Cyberpunk or crypto-style aesthetics
- Excessive neon effects
- Random code imagery
- Overly dense sections
- Decorative animation without purpose
- Glossy 3D interface mockups
- Generic corporate stock photography
- Excessive use of Flight Gold
- Inconsistent card styles

The visual narrative should move from dark premium technology sections into clean light content sections and back into focused dark CTA areas.

---

## 2. Global Page Width and Layout

### Maximum Content Width

Use a maximum content width of approximately:

`1280px`

Recommended content container:

```css
max-width: 1280px;
margin-inline: auto;
padding-inline: 24px;
```

Desktop side padding may increase to approximately `32–48px` depending on viewport width.

Mobile side padding:

`20–24px`

### Section Spacing

Recommended desktop section spacing:

- Top padding: `96–128px`
- Bottom padding: `96–128px`

Recommended tablet section spacing:

- Top padding: `72–96px`
- Bottom padding: `72–96px`

Recommended mobile section spacing:

- Top padding: `56–72px`
- Bottom padding: `56–72px`

Use consistent vertical rhythm. Avoid sections that feel compressed.

---

## 3. Global Typography Application

### Display Font

**Manrope**

Use for:

- Hero H1
- Page H1
- Section H2
- H3 headings
- Eyebrow labels
- Large metrics
- Branded statements

### Functional Font

**Inter**

Use for:

- Body copy
- Navigation
- Buttons
- Forms
- Labels
- Captions
- Supporting UI text

### Desktop Type Scale

| Role | Size | Weight | Line Height |
|---|---:|---:|---:|
| Hero H1 | 56–64px | 700–800 | 1.05–1.12 |
| Section H2 | 36–44px | 700 | 1.15 |
| H3 | 24–28px | 600 | 1.25 |
| Body Large | 20px | 400 | 1.55 |
| Body | 17–18px | 400 | 1.60 |
| Navigation | 15–16px | 500–600 | 1.20 |
| Button | 15–16px | 600 | 1.00 |
| Caption | 13–14px | 400–500 | 1.45 |
| Eyebrow | 13–14px | 700 | 1.20 |

### Eyebrow Labels

Use:

- Manrope
- 700 weight
- Uppercase
- Letter spacing approximately `0.08em`
- Flight Blue or Flight Gold depending on section background

Do not overuse gold eyebrow labels. Flight Blue should be the default.

---

## 4. Global Color Application

### Core Colors

| Token | Hex | Use |
|---|---|---|
| NorthWing Midnight | `#051231` | Hero, footer, dark premium sections |
| NorthWing Navy | `#052862` | Headings, navigation, dark UI surfaces |
| NorthWing Blue | `#033F91` | Secondary brand accents |
| Flight Blue | `#0D69CE` | Links, active states, digital highlights |
| Flight Gold | `#EDB743` | Primary CTA, directional accent, key emphasis |
| NorthWing Slate | `#5D6981` | Secondary text |
| Steel Gray | `#95979C` | Captions, tertiary labels |
| Cloud Gray | `#CED3DB` | Borders and dividers |
| Wing White | `#FFFFFF` | Light backgrounds and reversed text |

### Color Balance

Target approximate visual balance:

- 45% Wing White / light neutral
- 25% Midnight / Navy
- 15% Blue family
- 10% Gray neutral
- 5% Flight Gold

Flight Gold should be visually scarce and intentional.

---

## 5. Header / Navigation Design

### Desktop

Height:

Approximately `76–88px`

Layout:

- Logo aligned left
- Navigation aligned right
- Primary CTA at far right
- Vertical alignment centered

Background at page top:

- Transparent or integrated into the hero
- Use reversed logo
- White navigation text
- Flight Gold primary CTA

Sticky state:

- Solid NorthWing Midnight or Wing White background
- Subtle shadow or thin bottom border
- Maintain contrast
- Avoid excessive transition effects

### Primary CTA

Background:

`#EDB743`

Text:

`#051231`

Font:

Inter 600

Recommended radius:

`8–12px`

Recommended horizontal padding:

`18–24px`

Recommended minimum height:

`44–48px`

### Mobile

Use:

- Logo left
- Menu trigger right
- No overcrowded visible navigation links
- Accessible mobile drawer or menu panel
- Maintain clear CTA access inside the menu

---

## 6. Hero Section Design

### Background

Primary asset:

`/public/images/backgrounds/northwing-hero-background-primary.png`

Base fallback color:

`#051231`

Optional gradient fallback:

`#051231 → #052862`

### Layout

Desktop:

- Minimum visual height: approximately `720–800px`
- Two-column layout
- Left content width: `42–45%`
- Right visual width: `55–58%`
- Align content vertically near center
- Maintain generous breathing room

### Copy Column

Order:

1. Eyebrow
2. H1
3. Supporting paragraph
4. CTA row

Recommended max H1 width:

`620px`

Recommended body max width:

`560px`

CTA gap:

`12–16px`

### Hero Visual

Primary asset:

`/public/images/hero/northwing-hero-workflow-visual.png`

Placement:

- Right side
- `object-fit: contain`
- Maintain aspect ratio
- Do not crop critical content
- Keep strongest visual mass away from the copy column

Supporting assets:

`northwing-radial-glow-blue.png`

Use behind the hero visual at low opacity.

Optional:

`northwing-workflow-lines-overlay.png`

Use only if the hero remains visually clear.

Optional:

`northwing-flight-path-gold.png`

Use as a restrained directional accent.

### Mobile

Order:

1. Eyebrow
2. H1
3. Supporting copy
4. CTAs
5. Hero visual

Do not place the hero visual before the copy on mobile.

---

## 7. Problem Recognition Section Design

### Background

Use:

`/public/images/backgrounds/northwing-section-background-light.png`

### Structure

Recommended layout:

- Eyebrow
- H2
- Supporting copy
- Four problem cards

Desktop card layout:

`2 × 2 grid`

Tablet:

`2 × 2 grid`

Mobile:

`1 column`

### Card Style

Background:

Wing White

Border:

Cloud Gray

Shadow:

Very subtle

Heading:

NorthWing Navy

Body:

NorthWing Midnight or Slate

Accent:

Flight Blue line, icon, or small marker only

Recommended radius:

`14–18px`

Recommended padding:

`24–32px`

Avoid oversized decorative icons in this section.

---

## 8. Services Overview Design

### Section Background

Use Wing White or a very subtle light treatment.

### Structure

Recommended order:

1. Eyebrow
2. H2
3. Supporting copy
4. Five service cards
5. CTA

### Service Card Layout

Desktop options:

Preferred:

- Three cards on first row
- Two centered cards on second row

Alternative:

- Five-column layout only if card readability remains strong

Tablet:

`2 columns`

Mobile:

`1 column`

### Service Card Anatomy

1. Service icon
2. Service title
3. Short description
4. Optional subtle link treatment

### Icon Treatment

Use approved service icons only.

Recommended icon display size:

`80–112px`

Do not place labels inside icon artwork.

### Card Style

Background:

Wing White

Border:

Cloud Gray

Heading:

NorthWing Navy

Hover:

- Slight lift
- Subtle border emphasis
- No excessive glow

---

## 9. Business Outcomes Section Design

### Purpose

Shift visual language from capability to value.

### Background

Recommended:

NorthWing Midnight or NorthWing Navy

This creates a deliberate contrast after the light services section.

### Text

Eyebrow:

Flight Gold or Flight Blue

H2:

Wing White

Supporting copy:

Cloud Gray or Wing White at reduced emphasis

### Card Layout

Desktop:

`3 × 2 grid`

Tablet:

`2 columns`

Mobile:

`1 column`

### Card Style

Use metric/result card system.

Recommended:

- Dark or light cards depending on final contrast
- One clear outcome per card
- Small accent icon or directional marker
- Flight Gold reserved for strongest outcome emphasis

Do not use fabricated numeric values.

---

## 10. How We Work Section Design

### Background

Use Wing White or light technical background.

### Structure

1. Eyebrow
2. H2
3. Supporting copy
4. Seven-step workflow
5. CTA

### Workflow Layout

Desktop:

Use horizontal or gently stepped flow where readable.

Preferred options:

- 4 steps first row + 3 steps second row
- Horizontal path with wrapping
- Controlled timeline with clear direction

Avoid squeezing all seven steps into a dense single row.

### Mobile

Use vertical step flow.

Each step should include:

- Step number
- Title
- Short description
- Clear visual connector

### Visual Reference

Use:

`northwing-workflow-diagram-style-guide.png`

Optional overlay:

`northwing-workflow-lines-overlay.png`

---

## 11. Featured Work Section Design

### Background

Recommended:

NorthWing Midnight or Navy gradient

This section should feel like a premium product showcase.

### Layout

Desktop:

- 55–60% visual
- 40–45% content

Possible visual orientation:

- Mockup left
- Copy right

Do not alternate arbitrarily. Use one intentional composition.

### Project Label

Use a compact badge:

`INTERNAL PRODUCT`

Recommended styling:

- Small uppercase text
- Flight Gold border or text
- Transparent background or subtle dark fill

### Product Mockup Style

Reference:

- `northwing-browser-dashboard-mockup-style-guide.png`
- `northwing-dashboard-mobile-combo-style-guide.png`
- `northwing-callout-annotation-style-guide.png`

Use blue radial glow behind the mockup.

Do not overload the showcase with annotations.

---

## 12. Why NorthWing Labs Section Design

### Background

Use Wing White or light background.

### Layout

Recommended:

- Intro content centered or left-aligned
- Five differentiator cards or feature rows

Desktop:

Possible `3 + 2` card layout

Tablet:

`2 columns`

Mobile:

`1 column`

### Card Treatment

Keep visually lighter than service cards.

Recommended:

- Minimal border
- Small accent marker
- Strong heading
- Short supporting copy
- No oversized illustration

This section should feel credible and calm.

---

## 13. Results / Value Section Design

### Background

Use light or softly tinted blue-gray background.

### Structure

1. Eyebrow
2. H2
3. Supporting copy
4. Six result cards

Desktop:

`3 × 2 grid`

Tablet:

`2 columns`

Mobile:

`1 column`

### Card System

Reference:

`northwing-metric-result-card-style-guide.png`

Card anatomy:

1. Small icon or marker
2. Result title
3. One sentence explanation

Use qualitative value statements until real metrics exist.

---

## 14. Final CTA Section Design

### Background

NorthWing Midnight or NorthWing Navy

### Visual Assets

Use:

`northwing-radial-glow-blue.png`

Optional:

`northwing-flight-path-gold.png`

### Layout

Recommended:

Centered content block

Maximum text width:

`760px`

Order:

1. Eyebrow
2. H2
3. Supporting copy
4. CTA row

Desktop CTA row:

Inline

Mobile:

Stacked or wrapped with full-width primary CTA if appropriate

### Visual Rules

- Keep composition simple
- Do not add a second complex illustration
- Use Flight Gold primary CTA
- Keep gold accent restrained

---

## 15. Footer Design

### Background

NorthWing Midnight

### Logo

Use reversed logo.

### Layout

Desktop:

Recommended multi-column layout:

- Brand block
- Company
- Services
- Explore
- Legal

Mobile:

Stacked accordion or grouped vertical sections

### Supporting Asset

Use:

`northwing-footer-network-wave.png`

Placement:

- Anchor to bottom
- Scale wide
- Do not tile
- Keep content readable above it

### Footer Text

Primary:

Wing White

Secondary:

Cloud Gray or Steel Gray

Links:

Wing White with Flight Blue or subtle underline hover

---

## 16. Button System

### Primary Button

Background:

Flight Gold `#EDB743`

Text:

NorthWing Midnight `#051231`

Font:

Inter 600

Radius:

`8–12px`

Min height:

`44–48px`

Hover:

- Slight lift
- Slight brightness shift
- No heavy glow

### Secondary Button on Dark Background

Background:

Transparent

Border:

Wing White

Text:

Wing White

### Secondary Button on Light Background

Background:

NorthWing Navy

Text:

Wing White

### Focus State

All buttons must have clear keyboard focus indication.

---

## 17. Card System

Maintain a controlled card family.

Approved card types:

- ProblemCard
- ServiceCard
- OutcomeCard
- ProcessStep
- DifferentiatorCard
- ResultCard
- ProjectShowcase

### Shared Card Principles

- Consistent radius
- Consistent spacing
- Clear hierarchy
- Restrained shadow
- No random gradients
- No inconsistent icon sizing
- No decorative clutter

---

## 18. Border Radius Guidance

Recommended scale:

| Element | Radius |
|---|---:|
| Button | 8–12px |
| Small Card | 12–16px |
| Large Card | 16–20px |
| Product Mockup Container | 18–24px |

Use one coherent radius system.

---

## 19. Shadow Guidance

Use subtle elevation only.

Recommended principle:

- Small cards: minimal soft shadow
- Hero/product mockups: moderate depth
- Buttons: no permanent heavy shadow
- Hover: slight lift with subtle shadow increase

Avoid:

- Hard black shadows
- Excessive blue glows
- Multiple shadow styles on the same page

---

## 20. Decorative Asset Rules

### Workflow Overlay

Use at:

`15–30% opacity`

depending on contrast.

### Blue Radial Glow

Use:

- Large scale
- Low opacity
- Behind featured visuals

### Gold Flight Path

Use:

- As a directional accent
- Never as repeated wallpaper
- Never as a dominant illustration

### Footer Network Wave

Use:

- Anchored to section bottom
- Wide
- Non-repeating

---

## 21. Motion and Animation Guidance

Use restrained animation only.

Approved motion patterns:

- Fade and slight vertical rise on section entry
- Card hover lift
- Small arrow movement on CTA hover
- Slow parallax or drift for decorative overlays only if performance remains strong
- Subtle stagger for process steps

Avoid:

- Constant pulsing
- Excessive scroll-triggered motion
- Rotating icons
- Animated gradients that distract from copy
- Large autoplaying video backgrounds

Motion should support comprehension, not become the experience.

---

## 22. Accessibility Design Requirements

- Maintain sufficient color contrast
- Keep body text readable at all breakpoints
- Do not rely on color alone to communicate meaning
- Provide visible keyboard focus states
- Use semantic heading hierarchy
- Keep informative images accessible with useful alt text
- Decorative images should use empty alt text or CSS background implementation
- Maintain minimum touch targets of approximately `44px`
- Respect reduced-motion preferences

---

## 23. Performance Guidance

- Optimize large production images
- Use responsive image sizing where practical
- Lazy-load below-the-fold imagery
- Do not lazy-load critical hero assets if it harms Largest Contentful Paint
- Avoid loading style-guide reference images on the public website unless they are intentionally used as visible content
- Style-guide files should guide implementation, not necessarily ship to production pages
- Use CSS for simple gradients and layout effects where appropriate

---

## 24. Homepage Section Rhythm

Recommended visual sequence:

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

This rhythm provides contrast without creating visual fragmentation.

---

## 25. Claude Code Implementation Rules

Claude Code must:

1. Follow the approved section order.
2. Use approved content from `WEBSITE-CONTENT.md`.
3. Use approved assets from `ASSET-MANIFEST.md`.
4. Use Manrope and Inter according to the typography system.
5. Use the approved NorthWing color palette.
6. Build reusable components instead of duplicating markup.
7. Follow the responsive behavior defined in `RESPONSIVE-SPEC.md`.
8. Do not replace approved visual assets.
9. Do not invent testimonials, case studies, logos, or metrics.
10. Do not introduce new visual styles without approval.
11. Keep motion restrained.
12. Preserve accessibility and performance.
13. Build and review the homepage in staged implementation passes.

---

## 26. Recommended Build Sequence

### Stage 1

Global foundation:

- Fonts
- Colors
- Global spacing
- Container widths
- Buttons
- Basic cards
- Header shell

### Stage 2

Header and Hero

### Stage 3

Problem Recognition and Services

### Stage 4

Business Outcomes and Process

### Stage 5

Featured Work

### Stage 6

Why NorthWing and Results

### Stage 7

Final CTA and Footer

### Stage 8

Responsive refinement

### Stage 9

Accessibility and performance QA

---

## 27. Design Acceptance Standard

The homepage is ready for approval when:

- The section order matches the architecture
- The copy matches `WEBSITE-CONTENT.md`
- The page looks visually cohesive
- Dark and light sections create a deliberate rhythm
- Service icons are consistent
- Product visuals follow the approved mockup style
- Cards use one controlled design system
- CTA hierarchy is obvious
- Mobile layouts feel intentionally designed
- No content is clipped or unreadable
- No unsupported claims are present
- No approved brand assets have been replaced
- Accessibility and performance requirements are met
