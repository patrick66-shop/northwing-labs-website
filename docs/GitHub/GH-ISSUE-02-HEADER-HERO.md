# Header + Hero — Implement Approved NorthWing Labs Homepage Entry Experience

## Objective

Implement the approved NorthWing Labs header and hero section using the existing project foundation, approved production copy, approved brand assets, and responsive specifications.

This issue is limited to:

- Site header
- Desktop navigation
- Mobile navigation
- Sticky/scrolled header behavior
- Hero section layout
- Hero copy
- Hero CTA group
- Approved robot + whiteboard hero visual
- Approved hero background and restrained decorative layers
- Desktop, tablet, and mobile behavior
- Accessibility for navigation and CTA interactions

Do **not** build any homepage sections below the hero in this issue.

---

## Required Documentation

Before implementation, review and follow:

```text
/docs/SITEMAP.md
/docs/NORTHWING-BRAND-GUIDE.md
/docs/ASSET-MANIFEST.md
/docs/HOMEPAGE-ARCHITECTURE.md
/docs/WEBSITE-CONTENT.md
/docs/HOMEPAGE-DESIGN-SPEC.md
/docs/COMPONENT-SYSTEM.md
/docs/RESPONSIVE-SPEC.md
/docs/CLAUDE-IMPLEMENTATION-BRIEF.md
```

These files are the source of truth.

If a conflict is found, report it instead of inventing a new direction.

---

## Approved Hero Messaging

### Eyebrow

```text
SOFTWARE • AI • AUTOMATION
```

### H1

```text
Understand the Problem. Build the Right Solution. Create Real Results.
```

### Supporting Copy

```text
NorthWing Labs starts by understanding what is slowing your business down. Then we design practical software, AI tools, and automation systems that reduce manual work, improve efficiency, and help your business grow.
```

### Primary CTA

```text
Start a Conversation
```

### Secondary CTA

```text
Explore Our Services
```

### Brand Tagline

```text
Helping Your Business Take Flight.
```

The tagline supports the brand identity and should not replace the homepage value proposition.

---

## Approved Header Navigation

Primary navigation:

```text
Services
Solutions
Work
Process
About
Contact
```

Primary header CTA:

```text
Start a Conversation
```

The NorthWing Labs logo should link to the homepage.

Do not add a separate `Home` navigation item.

---

## Approved Hero Asset

Use:

```text
/public/images/hero/northwing-hero-whiteboard-robot.png
```

This is the approved hero visual direction.

The visual storytelling should communicate:

```text
Understand the business problem
→ Map the workflow
→ Identify bottlenecks
→ Design the right system
→ Build the solution
→ Improve business outcomes
```

Do not replace this image with a different robot, AI head, airplane, eagle, cityscape, or generic stock technology image.

---

## Approved Supporting Assets

Primary hero background:

```text
/public/images/backgrounds/northwing-hero-background-primary.png
```

Supporting blue glow:

```text
/public/images/backgrounds/northwing-radial-glow-blue.png
```

Optional restrained workflow overlay:

```text
/public/images/backgrounds/northwing-workflow-lines-overlay.png
```

Optional restrained directional accent:

```text
/public/images/backgrounds/northwing-flight-path-gold.png
```

Use decorative layers sparingly.

The hero image should remain the primary visual focal point.

---

# Scope

## 1. Implement `SiteHeader`

Build the reusable `SiteHeader` component defined in `COMPONENT-SYSTEM.md`.

The header should include:

- Approved horizontal or reversed NorthWing Labs logo
- Desktop navigation
- Primary CTA
- Mobile menu trigger
- Sticky/scrolled state behavior

### Top-of-Page State

At the top of the page:

- Integrate visually with the dark hero
- Use the approved reversed logo on dark background
- Use clear white navigation text
- Use Flight Gold for the primary CTA
- Keep the header visually clean and uncluttered

### Scrolled State

On scroll:

- Transition to a stable solid background
- Preserve high contrast
- Use either NorthWing Midnight or Wing White according to the existing design system
- Add only a subtle border or soft shadow if needed
- Avoid dramatic animation

Recommended transition duration:

```text
150–300ms
```

---

## 2. Implement Desktop Navigation

Navigation items:

```text
Services
Solutions
Work
Process
About
Contact
```

Requirements:

- Use Inter 500–600
- Maintain comfortable horizontal spacing
- Keep labels on one line
- Provide clear hover state
- Provide visible keyboard focus state
- Preserve strong contrast over the dark hero
- Do not create dropdown menus in this issue

The header CTA should remain visually distinct from navigation links.

---

## 3. Implement Mobile Navigation

At mobile widths:

- Hide desktop navigation
- Show logo on left
- Show accessible menu trigger on right
- Place primary CTA inside the mobile menu
- Use large touch-friendly links
- Keep menu visually aligned with the NorthWing Labs brand

Accessibility requirements:

- Focus is trapped while menu is open
- Escape key closes the menu
- Background scroll is controlled while open
- Menu trigger has accessible labeling
- Close action is clearly visible
- Keyboard navigation works correctly
- Focus returns to the menu trigger after closing where appropriate

Do not use a tiny dropdown menu.

Use a substantial mobile navigation panel or drawer.

---

## 4. Implement Hero Layout

### Desktop

Use a two-column layout.

Target proportions:

```text
Copy:   42–45%
Visual: 55–58%
```

Requirements:

- Vertically center hero content
- Maintain generous negative space
- Keep text clearly separated from the visual
- Maintain visual hierarchy
- Minimum hero height approximately `720–800px`
- Keep the strongest visual weight on the right side
- Do not crop important whiteboard content

### Tablet

Preferred:

- Maintain two columns where readable
- Adjust proportion toward approximately `46% / 54%`
- Reduce H1 scale
- Reduce decorative overlay density

Fallback:

- Stack the hero if side-by-side layout becomes cramped

### Mobile

Order must be:

```text
Eyebrow
H1
Supporting Copy
Primary CTA
Secondary CTA
Hero Visual
```

Requirements:

- Single-column layout
- Copy appears before the visual
- Hero visual full available width
- No horizontal overflow
- No negative overlap into copy
- Reduce or remove optional decorative overlays if they create clutter

Do not place the hero image before the message on mobile.

---

## 5. Implement Hero Typography

### Eyebrow

Use:

- Manrope 700
- Uppercase
- Approximately `13–14px`
- Letter spacing approximately `0.08em`
- Flight Blue or Flight Gold depending on final contrast

Approved text:

```text
SOFTWARE • AI • AUTOMATION
```

### H1

Use:

- Manrope 700–800
- Wing White
- Strong line-height control
- Responsive scaling according to `RESPONSIVE-SPEC.md`

Approved text:

```text
Understand the Problem. Build the Right Solution. Create Real Results.
```

Do not rewrite, shorten, or replace this H1.

### Supporting Copy

Use:

- Inter 400
- High readability
- Controlled width
- Cloud Gray or Wing White with reduced emphasis

Approved text:

```text
NorthWing Labs starts by understanding what is slowing your business down. Then we design practical software, AI tools, and automation systems that reduce manual work, improve efficiency, and help your business grow.
```

Do not rewrite this copy.

---

## 6. Implement CTA Group

Use the existing:

```text
PrimaryButton
SecondaryButton
CTAGroup
```

### Primary CTA

Text:

```text
Start a Conversation
```

Style:

- Flight Gold background
- NorthWing Midnight text
- Inter 600
- Strong primary emphasis

### Secondary CTA

Text:

```text
Explore Our Services
```

Style on dark hero:

- Transparent background
- Wing White border
- Wing White text

### CTA Behavior

Desktop:

- Inline
- Gap approximately `12–16px`

Tablet:

- Inline where space permits

Mobile:

- Stack vertically if labels become cramped
- Preserve primary CTA hierarchy
- Full-width primary CTA is acceptable on narrow mobile

---

## 7. Implement Hero Visual

Use:

```text
/public/images/hero/northwing-hero-whiteboard-robot.png
```

Requirements:

- Maintain aspect ratio
- Use `object-fit: contain`
- Do not crop the robot, whiteboard, or critical process-map content
- Preserve the robot-at-whiteboard storytelling
- Preserve the approved NorthWing logo detail on the robot as part of the source asset
- Do not overlay unrelated graphics on top of the robot or whiteboard

The hero visual should remain clear and readable at desktop and tablet sizes.

On mobile, scale the image down cleanly beneath the CTA group.

---

## 8. Implement Hero Background Treatment

Use:

```text
/public/images/backgrounds/northwing-hero-background-primary.png
```

Fallback color:

```text
#051231
```

Optional fallback gradient:

```text
#051231 → #052862
```

Use:

```text
/public/images/backgrounds/northwing-radial-glow-blue.png
```

behind the hero visual at low opacity where useful.

Optional:

```text
/public/images/backgrounds/northwing-workflow-lines-overlay.png
```

at low opacity only if it does not compete with content.

Optional:

```text
/public/images/backgrounds/northwing-flight-path-gold.png
```

only as a restrained directional accent.

Do not use every decorative asset at once if the composition becomes busy.

---

## 9. Brand Logo Usage

Use only approved logo assets from:

```text
/public/brand/logos/
```

Requirements:

- Do not redraw the logo
- Do not substitute a similar font
- Do not alter proportions
- Do not recolor
- Do not add glow, bevel, or shadow
- Use the reversed logo on dark header backgrounds

The logo in the hero artwork is already embedded in the approved production image.

Do not create a second competing hero logo placement unless specified by the header layout.

---

## 10. Header and Hero Accessibility

Requirements:

- Header uses semantic navigation structure
- Logo link has appropriate accessible label if needed
- Menu trigger is keyboard accessible
- CTA buttons have clear accessible labels
- Visible `focus-visible` states
- Hero image uses meaningful alt text
- Decorative overlays use empty alt text or CSS background implementation
- Touch targets approximately `44px` minimum
- Reduced-motion preference respected
- No text is embedded as the only accessible version of important content

Recommended hero alt text concept:

```text
Humanoid robot mapping a business workflow, system architecture, and business outcomes on a futuristic whiteboard.
```

---

## 11. Responsive Requirements

Test at minimum:

```text
320px
375px
430px
768px
1024px
1280px
1440px+
```

Verify:

- No horizontal overflow
- No clipped headline text
- No navigation crowding
- No CTA label wrapping that harms usability
- Hero visual remains readable
- Copy appears before visual on mobile
- Header remains usable at all sizes
- Mobile menu works by keyboard and touch
- Decorative assets do not create clutter
- Logo remains readable

---

## 12. Performance Requirements

- Keep hero image dimensions explicit to prevent layout shift
- Do not lazy-load the primary above-the-fold hero visual if it harms LCP
- Use responsive image sizing where practical
- Avoid loading unused mockup style-guide images
- Keep JavaScript lean
- Avoid unnecessary animation packages
- Avoid duplicate asset loading
- Preserve font-loading performance established in Issue 1

---

## 13. Motion Guidance

Approved:

- Subtle header background transition on scroll
- Small CTA hover movement
- Optional subtle hero visual fade/rise on initial load
- Optional restrained decorative drift only if performance remains strong

Avoid:

- Pulsing CTA buttons
- Rotating icons
- Complex parallax
- Continuous glowing animations
- Animated background video
- Heavy entrance sequences

Respect:

```text
prefers-reduced-motion
```

---

## Out of Scope

Do not build the following in this issue:

- Problem Recognition section
- Services Overview section
- Business Outcomes section
- Process section
- Featured Work section
- Why NorthWing Labs section
- Results / Value section
- Final CTA section
- Footer
- Contact form
- Individual service pages
- Additional marketing copy
- New hero visual concepts

---

## Acceptance Criteria

- [ ] `SiteHeader` is implemented
- [ ] Desktop navigation matches the approved sitemap
- [ ] Header CTA reads `Start a Conversation`
- [ ] Logo links to homepage
- [ ] No separate `Home` nav item is added
- [ ] Top-of-page header integrates with dark hero
- [ ] Scrolled header state works cleanly
- [ ] Mobile navigation is implemented
- [ ] Mobile menu is keyboard accessible
- [ ] Focus is managed correctly in the mobile menu
- [ ] Hero section order matches the approved architecture
- [ ] Approved eyebrow copy is used exactly
- [ ] Approved H1 is used exactly
- [ ] Approved supporting copy is used exactly
- [ ] Primary CTA reads `Start a Conversation`
- [ ] Secondary CTA reads `Explore Our Services`
- [ ] Approved robot + whiteboard hero image is used
- [ ] Hero image maintains aspect ratio
- [ ] Hero image is not critically cropped
- [ ] Desktop hero uses the approved two-column composition
- [ ] Tablet layout remains balanced
- [ ] Mobile copy appears before the hero visual
- [ ] Decorative layers remain restrained
- [ ] No unauthorized logo recreation appears
- [ ] No new hero copy is invented
- [ ] No unrelated homepage sections are built
- [ ] Production build passes

---

## Required Review Output

At completion, provide:

1. Summary of files changed
2. Summary of components created or updated
3. Confirmation of exact approved copy usage
4. Confirmation of approved hero asset path
5. Confirmation of logo asset used in the header
6. Confirmation of mobile navigation accessibility behavior
7. Confirmation that production build passes
8. Any deviations from the approved documentation
9. Screenshots at:
   - 1440px desktop
   - 768px tablet
   - 390px mobile

The screenshots should show the full header and hero section.

---

## Final Instruction

Build only the approved Header + Hero experience in this issue.

Do not begin the Problem Recognition or Services sections until this issue has been reviewed and approved.
