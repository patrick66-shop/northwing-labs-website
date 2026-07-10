# NorthWing Labs Responsive Specification

This document defines the approved responsive behavior for the NorthWing Labs website.

Claude Code should use this file together with:

1. `SITEMAP.md`
2. `HOMEPAGE-ARCHITECTURE.md`
3. `WEBSITE-CONTENT.md`
4. `HOMEPAGE-DESIGN-SPEC.md`
5. `COMPONENT-SYSTEM.md`
6. `NORTHWING-BRAND-GUIDE.md`
7. `ASSET-MANIFEST.md`

The goal is not merely to make the website technically responsive. The goal is to make each layout feel intentionally designed for desktop, tablet, and mobile.

---

## 1. Responsive Design Principles

The responsive system should prioritize:

- Readability
- Clear hierarchy
- Fast comprehension
- Strong CTA visibility
- Touch-friendly interaction
- Controlled image scaling
- Deliberate layout simplification
- No horizontal overflow
- No content clipping
- No compressed card layouts

Do not simply shrink desktop layouts.

At smaller breakpoints:

- Reduce complexity
- Stack content deliberately
- Simplify decorative layers
- Preserve content order
- Maintain usable spacing
- Protect text readability

---

## 2. Recommended Breakpoints

Use practical CSS breakpoints close to the following:

| Breakpoint | Width |
|---|---:|
| Mobile Small | `< 480px` |
| Mobile Large | `480–767px` |
| Tablet | `768–1023px` |
| Desktop | `1024–1439px` |
| Wide Desktop | `1440px+` |

Implementation may use nearby framework-aligned values if the final system is consistent.

Do not create excessive custom breakpoints.

---

## 3. Global Container Behavior

### Wide Desktop

- Max content width: approximately `1280px`
- Side padding: `40–48px`

### Desktop

- Max content width: approximately `1280px`
- Side padding: `32px`

### Tablet

- Width: `100%`
- Side padding: `24–32px`

### Mobile

- Width: `100%`
- Side padding: `20–24px`

Rules:

- No content should touch viewport edges.
- No section should introduce independent arbitrary side padding.
- Full-bleed backgrounds may span the viewport while content remains inside the shared container.

---

## 4. Global Section Spacing

### Desktop

Top and bottom:

`96–128px`

### Tablet

Top and bottom:

`72–96px`

### Mobile

Top and bottom:

`56–72px`

Rules:

- Maintain breathing room between major sections.
- Do not reduce mobile spacing so aggressively that the page feels cramped.
- Maintain larger spacing between section heading groups and content grids.

---

## 5. Typography Scaling

### Hero H1

Wide Desktop:

`60–64px`

Desktop:

`56–60px`

Tablet:

`44–52px`

Mobile Large:

`36–42px`

Mobile Small:

`32–38px`

### Section H2

Wide Desktop:

`40–44px`

Desktop:

`36–42px`

Tablet:

`32–36px`

Mobile:

`28–34px`

### H3

Desktop:

`24–28px`

Tablet:

`22–26px`

Mobile:

`20–24px`

### Body Large

Desktop:

`20px`

Tablet:

`18–20px`

Mobile:

`18px`

### Body Standard

Desktop:

`17–18px`

Tablet:

`17px`

Mobile:

`16–17px`

Rules:

- Do not allow body copy to fall below comfortable reading size.
- Preserve line-height.
- Reduce heading scale before reducing supporting text scale.

---

## 6. Header Responsive Behavior

### Desktop

Layout:

```text
Logo | Navigation | Primary CTA
```

Requirements:

- Horizontal navigation visible
- CTA visible
- Header height approximately `76–88px`
- Transparent or integrated over hero at top
- Stable background on scroll

### Tablet

Preferred behavior:

- Logo left
- Reduced horizontal nav if space remains comfortable
- Collapse to mobile navigation if labels become crowded

Do not force cramped desktop navigation into tablet widths.

### Mobile

Layout:

```text
Logo | Menu Trigger
```

Requirements:

- Hide desktop navigation
- Hide standalone header CTA if it causes crowding
- Place primary CTA inside mobile navigation
- Menu trigger minimum touch target: approximately `44px`
- Menu must be keyboard accessible

Mobile menu behavior:

- Open into a full-height or large panel
- Preserve body-scroll control
- Trap focus while open
- Escape key closes menu
- Clear close control
- Links large enough for touch

---

## 7. Hero Responsive Behavior

### Desktop

Layout:

```text
Copy 42–45% | Visual 55–58%
```

Requirements:

- Two columns
- Vertically centered content
- Minimum height approximately `720–800px`
- Visual remains fully visible
- CTA group inline

### Tablet

Preferred:

- Two columns if visual and copy remain readable
- Adjust ratio toward approximately `46% / 54%`
- Reduce hero H1 size
- Reduce decorative overlays
- Keep CTA group inline where space permits

Fallback:

Stack visual below copy if side-by-side layout becomes cramped.

### Mobile

Order:

```text
Eyebrow
Headline
Supporting Copy
Primary CTA
Secondary CTA
Hero Visual
```

Requirements:

- Single column
- Hero visual below CTA group
- Hero visual full available width
- No negative overlap into copy
- Do not crop important workflow content
- Reduce or remove optional decorative overlays
- Keep gold trajectory accent subtle or omit if visually cluttered

CTA behavior:

- Stack vertically on narrow mobile
- Full-width primary CTA where appropriate
- Secondary CTA may be full-width or centered beneath

---

## 8. Problem Recognition Section

### Desktop

Card layout:

`2 × 2 grid`

### Tablet

Card layout:

`2 × 2 grid`

Reduce card padding moderately if needed.

### Mobile

Card layout:

`1 column`

Requirements:

- Keep title and copy left-aligned
- Maintain clear spacing between cards
- No carousel
- No horizontal swipe requirement

---

## 9. Services Section

### Desktop

Preferred:

```text
Row 1: 3 cards
Row 2: 2 centered cards
```

Alternative:

Five columns only if content remains comfortably readable.

### Tablet

`2 columns`

Last card may span one column or be centered depending on final layout.

### Mobile

`1 column`

Requirements:

- Keep icon size consistent
- Do not shrink icons below useful visibility
- Maintain live HTML labels
- Avoid overly tall cards by controlling copy length

---

## 10. Business Outcomes Section

### Desktop

`3 × 2 grid`

### Tablet

`2 columns`

### Mobile

`1 column`

Requirements:

- Preserve card hierarchy
- Keep outcome labels visible
- Avoid tiny iconography
- Do not create horizontally scrolling cards

---

## 11. Process Section

### Desktop

Preferred layouts:

Option A:

```text
Row 1: 4 steps
Row 2: 3 steps
```

Option B:

Controlled horizontal path with wrapping

### Tablet

Preferred:

`2 columns`

or a wrapped step layout

### Mobile

Vertical process sequence.

Each step should show:

- Step number
- Title
- Description
- Visible connector to next step

Rules:

- Do not compress seven steps into one horizontal row.
- On mobile, connectors should remain visually simple.
- Remove decorative overlay if it reduces readability.

---

## 12. Featured Work Section

### Desktop

Layout:

```text
Visual 55–60% | Content 40–45%
```

Preferred orientation:

Visual left, content right.

### Tablet

Two columns where comfortable.

If content width becomes constrained:

- Move to stacked layout
- Content first
- Visual second

### Mobile

Order:

```text
Project Label
Project Title
Project Summary
Capabilities
CTA
Product Visual
```

Requirements:

- Keep annotation text readable
- Reduce callout count
- Avoid tiny product screenshots
- Use full-width mockup container
- Preserve aspect ratio

---

## 13. Why NorthWing Labs Section

### Desktop

Preferred:

`3 + 2 card layout`

### Tablet

`2 columns`

### Mobile

`1 column`

Requirements:

- Keep cards visually lighter than service cards
- Preserve short text blocks
- Avoid unnecessary icon resizing
- Maintain consistent card spacing

---

## 14. Results / Value Section

### Desktop

`3 × 2 grid`

### Tablet

`2 columns`

### Mobile

`1 column`

Requirements:

- Keep title and copy readable
- Maintain qualitative language
- No scrolling card carousel
- Use Flight Gold sparingly

---

## 15. Final CTA Section

### Desktop

Centered content.

CTA group inline.

Maximum text width:

`760px`

### Tablet

Centered content.

CTA group inline or wrapped.

### Mobile

Centered or left-aligned depending on final design consistency.

CTA group:

- Stack vertically on narrow screens
- Primary CTA full-width where appropriate
- Secondary CTA beneath

Decorative assets:

- Reduce radial glow scale
- Use gold flight path only if composition remains clean
- Avoid edge clipping

---

## 16. Footer Responsive Behavior

### Desktop

Multi-column layout:

```text
Brand | Company | Services | Explore | Legal
```

### Tablet

Recommended:

`2–3 columns`

Group logical sections together.

### Mobile

Stack vertically.

Preferred order:

```text
Brand
Company
Services
Explore
Legal
Copyright
```

Optional:

Use accordion groups only if navigation density justifies it.

Requirements:

- Keep tap targets large
- Keep link groups clearly separated
- Preserve network wave behind content without reducing legibility
- Do not tile the wave

---

## 17. Grid Collapse Rules

General grid behavior:

### 4-Card Grid

Desktop:
`2 × 2`

Tablet:
`2 × 2`

Mobile:
`1 column`

### 5-Card Grid

Desktop:
`3 + 2`

Tablet:
`2 columns`

Mobile:
`1 column`

### 6-Card Grid

Desktop:
`3 × 2`

Tablet:
`2 columns`

Mobile:
`1 column`

### 7-Step Process

Desktop:
`4 + 3`

Tablet:
`2 columns` or wrapped

Mobile:
Vertical sequence

---

## 18. CTA Behavior by Breakpoint

### Desktop

Primary and secondary buttons inline.

### Tablet

Inline where space permits.

### Mobile Large

May remain inline if labels are short and width permits.

### Mobile Small

Stack vertically.

Rules:

- Primary action appears first
- Maintain `12–16px` gap
- Full-width primary CTA is acceptable
- Avoid cramped buttons with wrapped labels

---

## 19. Image Behavior

### Hero Visual

- `object-fit: contain`
- Never crop important content

### Product Mockups

- Preserve aspect ratio
- Scale within container
- Avoid excessive zoom

### Service Icons

- Maintain consistent visual box size
- Do not distort

### Decorative Assets

May:

- Reduce opacity
- Reposition
- Crop decoratively
- Be removed on mobile if they interfere with content

Rules:

- Informative images should not be hidden without alternative context.
- Decorative images may be omitted at smaller breakpoints.

---

## 20. Decorative Asset Reduction Strategy

### Desktop

Use full visual system where appropriate.

### Tablet

Reduce:

- Overlay density
- Glow size
- Gold path prominence
- Decorative motion

### Mobile

Prefer:

- One decorative layer per section maximum
- Reduced opacity
- Remove decorative assets that create clutter
- Do not layer multiple large effects behind text

---

## 21. Card Padding by Breakpoint

### Desktop

`28–36px`

### Tablet

`24–30px`

### Mobile

`20–24px`

Rules:

- Do not compress below comfortable reading space.
- Preserve consistent internal spacing.

---

## 22. Touch Target Requirements

Interactive controls should be approximately:

`44px × 44px` minimum

Applies to:

- Menu triggers
- Buttons
- Footer links where possible
- Accordion triggers
- Icon controls
- Mobile close controls

---

## 23. Navigation Overflow Rules

If navigation becomes crowded:

1. Reduce horizontal gaps moderately.
2. Reduce logo width slightly within approved minimum size.
3. Collapse to mobile navigation.

Do not:

- Shrink nav text excessively
- Wrap navigation labels
- Hide important links arbitrarily

---

## 24. Content Order Rules

Responsive reordering is permitted only where it improves usability.

Approved reordering examples:

Hero mobile:
- Copy before visual

Featured Work mobile:
- Project content before mockup

Do not reorder content in a way that changes the intended messaging sequence.

---

## 25. Tables and Structured Content

If tables are introduced later:

Desktop:
- Full table display where practical

Mobile:
- Prefer stacked card treatment or horizontal scroll only when necessary

Avoid:
- Tiny text
- Clipped columns
- Unusable compressed tables

---

## 26. Motion by Breakpoint

### Desktop

Allowed:

- Subtle reveal
- Card hover lift
- Small CTA motion
- Controlled decorative drift

### Tablet

Reduce complexity.

### Mobile

Prefer minimal motion.

Requirements:

- Respect `prefers-reduced-motion`
- Disable nonessential motion when requested
- Keep transition durations around `150–300ms`

---

## 27. Mobile Typography Width Rules

Recommended maximum text width:

- Headings: natural viewport width with side padding
- Body copy: full container width
- Avoid narrow centered columns that create excessive wrapping

For centered CTA sections:

- Keep body copy constrained enough for readability
- Do not allow 2–3 word lines unless intentionally composed

---

## 28. Mobile Alignment Rules

Default mobile alignment:

Left-aligned

Centered alignment is appropriate for:

- Final CTA
- Selected hero CTA groups
- Selected section headers when clearly specified

Do not center every section on mobile.

---

## 29. Responsive QA Checklist

Test at minimum:

- 320px
- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+

Verify:

- No horizontal overflow
- No clipped text
- No overlapping elements
- No unreadable images
- No compressed navigation
- CTA hierarchy remains clear
- Service icons remain consistent
- Process flow remains understandable
- Footer remains usable
- Images maintain aspect ratio
- Decorative layers do not block content

---

## 30. Mobile-Specific Acceptance Criteria

The mobile homepage is ready when:

- Header is simple and usable
- Hero copy appears before the hero visual
- H1 is readable without awkward wrapping
- CTA buttons are easy to tap
- All card grids collapse cleanly
- Process steps form a clear vertical sequence
- Featured project content remains understandable
- Product mockups remain readable
- Decorative assets do not create clutter
- Footer links are easy to scan and tap
- No zoom is required to read text
- No horizontal scrolling is required

---

## 31. Tablet-Specific Acceptance Criteria

The tablet homepage is ready when:

- Navigation does not feel crowded
- Hero remains balanced
- Multi-column sections preserve readable widths
- Cards do not become excessively narrow
- Process layout remains understandable
- Product showcase maintains hierarchy
- CTA groups remain usable
- Decorative layers are reduced where necessary

---

## 32. Desktop Acceptance Criteria

The desktop homepage is ready when:

- Content uses the available width without feeling stretched
- Hero visual and copy remain balanced
- Section widths are controlled
- Card layouts are coherent
- Dark/light section rhythm is preserved
- Featured work feels premium
- CTA hierarchy is obvious
- Wide screens do not create excessive empty gaps

---

## 33. Claude Code Responsive Rules

Claude Code must:

1. Implement responsive behavior deliberately.
2. Do not rely only on default framework breakpoints.
3. Do not shrink desktop layouts mechanically.
4. Simplify complex layouts on mobile.
5. Preserve content order unless this spec allows reordering.
6. Avoid horizontal overflow.
7. Keep touch targets accessible.
8. Reduce decorative layers on smaller screens.
9. Preserve image aspect ratios.
10. Test all major breakpoints.
11. Respect reduced-motion preferences.
12. Fix responsive issues before visual polish is considered complete.

---

## 34. Recommended Responsive Build Order

### Stage 1

Desktop structure

### Stage 2

Tablet refinement

### Stage 3

Mobile layout conversion

### Stage 4

Navigation testing

### Stage 5

Image and mockup scaling

### Stage 6

Decorative asset reduction

### Stage 7

Typography adjustment

### Stage 8

Touch interaction review

### Stage 9

Cross-breakpoint QA

---

## 35. Final Responsive Standard

The NorthWing Labs site should feel like one coherent product across devices.

The responsive goal is:

```text
Desktop:
Rich, spacious, visually layered

Tablet:
Balanced, simplified, readable

Mobile:
Clear, focused, stacked, conversion-oriented
```

The implementation should preserve brand quality at every viewport size.
