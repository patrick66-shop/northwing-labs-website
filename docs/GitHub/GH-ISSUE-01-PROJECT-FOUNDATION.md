# Project Foundation — Initialize NorthWing Labs Website Build

## Objective

Set up the NorthWing Labs website project foundation and establish the shared technical and visual infrastructure required for all future implementation stages.

This issue is limited to:

- Project initialization
- Global configuration
- Brand tokens
- Typography
- Global styles
- Metadata
- Favicon setup
- Asset-path verification
- Reusable layout primitives

Do **not** build the homepage sections in this issue.

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

These documents and the approved repository assets are the source of truth.

Do not reinterpret the brand direction or generate replacement assets.

---

## Scope

### 1. Initialize the Website Project

Set up the website application using an appropriate modern production framework and project structure.

The implementation should support:

- Reusable components
- Responsive layouts
- Optimized images
- Metadata configuration
- Accessible navigation
- Future multi-page expansion
- Production deployment

Keep the dependency stack lean.

Avoid adding UI libraries or animation frameworks unless clearly justified.

---

### 2. Configure Typography

Set up the approved NorthWing Labs typography system.

#### Display Typography

Use:

```text
Manrope
```

For:

- Hero headings
- H1
- H2
- H3
- Eyebrow labels
- Large metrics
- Branded statements

#### Functional Typography

Use:

```text
Inter
```

For:

- Body copy
- Navigation
- Buttons
- Forms
- Labels
- Captions
- UI text

Requirements:

- Load fonts efficiently
- Prevent unnecessary layout shift
- Configure appropriate fallback fonts
- Make font weights available according to the approved typography system

---

### 3. Create Brand Color Tokens

Configure reusable global color tokens for:

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

Use semantic or clearly named variables.

Example:

```css
--color-midnight
--color-navy
--color-blue
--color-flight-blue
--color-flight-gold
--color-slate
--color-steel
--color-cloud
--color-white
```

Do not hard-code colors repeatedly throughout future components where shared tokens should be used.

---

### 4. Create Global Spacing Tokens

Establish the approved spacing scale:

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

Use this scale as the primary spacing system.

Avoid arbitrary spacing values unless a documented layout requirement needs one.

---

### 5. Create Shared Radius Tokens

Establish a coherent radius system.

Recommended ranges:

```text
Buttons:             8–12px
Small Cards:        12–16px
Large Cards:        16–20px
Mockup Containers:  18–24px
```

Create shared radius tokens rather than assigning unrelated values throughout the site.

---

### 6. Configure Global Styles

Create the global styling foundation for:

- Body
- Headings
- Paragraphs
- Links
- Buttons
- Images
- Lists
- Focus states
- Box sizing
- Smooth rendering
- Reduced-motion preference support

Requirements:

- Semantic defaults
- Readable typography
- Clear focus states
- No horizontal page overflow
- No conflicting browser-default margins
- Consistent base line-height

Do not create final homepage-specific section styles in this issue.

---

### 7. Build `SiteContainer`

Create the reusable site container defined in `COMPONENT-SYSTEM.md`.

Target behavior:

```css
width: 100%;
max-width: 1280px;
margin-inline: auto;
```

Responsive horizontal padding should follow:

```text
Wide Desktop: 40–48px
Desktop:      32px
Tablet:       24–32px
Mobile:       20–24px
```

This component should provide the main horizontal alignment standard across the site.

---

### 8. Build `SectionWrapper`

Create the reusable section wrapper.

Required variants:

```text
light
dark
tinted
transparent
```

The component should support:

- Semantic section rendering
- Background variants
- Consistent vertical spacing
- Custom class or composition support where needed

Vertical spacing should follow the approved responsive specification.

---

### 9. Build Shared Typography Components or Utilities

Create reusable patterns for:

```text
SectionEyebrow
SectionHeading
SupportingCopy
```

They should follow the approved:

- Font families
- Weights
- Sizes
- Colors
- Line heights
- Responsive scaling

Do not add homepage production copy yet.

---

### 10. Build Initial Button Components

Create:

```text
PrimaryButton
SecondaryButton
CTAGroup
```

#### Primary Button

Background:

```text
#EDB743
```

Text:

```text
#051231
```

Font:

```text
Inter 600
```

Minimum height:

```text
44–48px
```

Required states:

- Default
- Hover
- Focus-visible
- Active
- Disabled, if supported

Do not use excessive glow.

#### Secondary Button

Support:

- Dark-background variant
- Light-background variant

Follow `COMPONENT-SYSTEM.md`.

---

### 11. Configure Favicon Assets

Use the approved files from:

```text
/public/brand/favicons/
```

Configure the appropriate:

- Browser favicon
- Standard PNG favicon sizes
- Apple touch icon
- High-resolution app icon where relevant

Verify favicon loading locally.

---

### 12. Configure Base Metadata

Configure the project-level metadata foundation.

At minimum include:

- Site title
- Meta description placeholder or approved general description
- Canonical domain configuration structure
- Open Graph title
- Open Graph description
- Open Graph image
- Favicon references
- Viewport metadata

Use the approved default social sharing image:

```text
/public/images/social/northwing-social-share-default.png
```

Do not invent page-specific SEO copy beyond the available approved documentation.

---

### 13. Verify Asset Paths

Verify that all approved project asset directories resolve correctly.

Expected directories:

```text
/public/brand/logos/
/public/brand/favicons/
/public/brand/icons/services/

/public/images/hero/
/public/images/backgrounds/
/public/images/mockups/
/public/images/social/
```

Verify that production assets referenced by `ASSET-MANIFEST.md` can be loaded.

Do not rename assets without updating the Asset Manifest.

---

### 14. Create Basic Application Shell

Create the minimum site shell needed for future work.

At this stage, the application may include:

- Global page wrapper
- Placeholder main element
- Temporary section placeholder
- Global container test
- Font verification
- Token verification

Do not implement:

- Full header
- Hero section
- Services section
- Process section
- Footer

Those belong to later issues.

---

## Accessibility Requirements

The foundation must support:

- Semantic HTML
- Keyboard focus visibility
- Sufficient text contrast
- `prefers-reduced-motion`
- Minimum interactive target sizes
- No focus outline removal without replacement
- Accessible button behavior
- Accessible link behavior

---

## Performance Requirements

Keep the foundation lean.

Avoid:

- Unnecessary JavaScript packages
- Large animation libraries
- Unused UI frameworks
- Shipping mockup style-guide images as public page content
- Blocking image loading patterns
- Unnecessary font weights

Prevent:

- Large layout shifts
- Missing image dimensions where relevant
- Unnecessary client-side rendering

---

## Out of Scope

Do not build the following in this issue:

- Header design
- Hero section
- Problem Recognition section
- Services section
- Business Outcomes section
- Process section
- Featured Work section
- Why NorthWing section
- Results section
- Final CTA
- Footer
- Contact form
- Multi-page routing beyond what is required for the initial project structure
- Advanced animations
- CMS integration

---

## Acceptance Criteria

- [ ] Project initializes and runs locally without errors
- [ ] Production build completes successfully
- [ ] Manrope is configured correctly
- [ ] Inter is configured correctly
- [ ] Brand color tokens are available globally
- [ ] Global spacing tokens are established
- [ ] Shared radius tokens are established
- [ ] Global typography defaults are configured
- [ ] Accessible global focus styles exist
- [ ] Reduced-motion preference is supported
- [ ] `SiteContainer` is implemented
- [ ] `SectionWrapper` is implemented
- [ ] `SectionEyebrow` pattern is implemented
- [ ] `SectionHeading` pattern is implemented
- [ ] `SupportingCopy` pattern is implemented
- [ ] `PrimaryButton` is implemented
- [ ] `SecondaryButton` is implemented
- [ ] `CTAGroup` is implemented
- [ ] Favicon assets load correctly
- [ ] Default metadata is configured
- [ ] Default social sharing image is configured
- [ ] Approved asset paths are verified
- [ ] No homepage sections have been prematurely designed
- [ ] No conflicting design system or UI library has been introduced
- [ ] No approved assets have been replaced or modified

---

## Required Review Output

At completion, provide:

1. Summary of project structure created
2. Framework and major dependencies used
3. List of global design tokens created
4. List of reusable foundation components created
5. Confirmation of font configuration
6. Confirmation of favicon and metadata configuration
7. Confirmation that production build passes
8. Any deviations from the approved documentation
9. Screenshots showing the foundation test page at:
   - 1440px desktop
   - 768px tablet
   - 390px mobile

The screenshots do not need to show homepage design. They should verify typography, colors, buttons, spacing, and container behavior.

---

## Final Instruction

Build only the shared project foundation in this issue.

Do not begin the Header + Hero implementation until this issue has been reviewed and approved.
