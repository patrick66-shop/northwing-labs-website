# NorthWing Labs Asset Manifest

This manifest documents the approved visual assets for the NorthWing Labs website project. Use it as the source of truth for asset location, naming, purpose, and implementation guidance.

## 1. Brand Assets

### Logo System

| Asset | Recommended File Name | Folder | Primary Use |
|---|---|---|---|
| Primary Logo | `northwing-logo-primary.png` | `/public/brand/logos/` | General brand use |
| Horizontal Logo | `northwing-logo-horizontal.png` | `/public/brand/logos/` | Website header and navigation |
| Reversed Logo | `northwing-logo-reversed.png` | `/public/brand/logos/` | Dark backgrounds and footer |
| Monochrome Logo | `northwing-logo-monochrome.png` | `/public/brand/logos/` | Single-color applications |
| Logo Mark | `northwing-logo-mark.png` | `/public/brand/logos/` | Compact brand placement |
| Square Profile Logo | `northwing-logo-profile-square.png` | `/public/brand/logos/` | Social profiles and avatars |

> If the saved logo filenames differ, either rename them to this standard or update this manifest to match the actual production filenames.

### Current Production Logo Files

| File | Notes |
|---|---|
| `Logo_Header.png` | Blue wordmark, transparent background; suited to light backgrounds |
| `Logo_white_navy.png` | Reversed (white) logo on solid navy background — source file |
| `northwing-logo-reversed.png` | Production derivative of `Logo_white_navy.png` with the flat navy background keyed out (transparent). Used by the site header and dark surfaces. No recolor or proportion change |
| `Logo_Monochrome.png` | Single-color logo on white |
| `Logo_square.png` | Square lockup |
| `northwing_labs_profile_logo.png` | Social profile avatar |

## 2. Favicon Assets

| Asset | File Name | Folder | Primary Use |
|---|---|---|---|
| Favicon ICO | `favicon.ico` | `/public/brand/favicons/` | Browser favicon |
| 16×16 PNG | `northwing-favicon-16x16.png` | `/public/brand/favicons/` | Small browser icon |
| 32×32 PNG | `northwing-favicon-32x32.png` | `/public/brand/favicons/` | Standard browser icon |
| 48×48 PNG | `northwing-favicon-48x48.png` | `/public/brand/favicons/` | Larger browser icon |
| 180×180 PNG | `northwing-favicon-180x180.png` | `/public/brand/favicons/` | Apple touch icon |
| 192×192 PNG | `northwing-favicon-192x192.png` | `/public/brand/favicons/` | Android/PWA icon |
| 512×512 PNG | `northwing-favicon-512x512.png` | `/public/brand/favicons/` | High-resolution app icon |

## 3. Service Icons

Folder: `/public/brand/icons/services/`

| Service | File Name | Primary Use |
|---|---|---|
| Custom Software | `custom-software.png` | Service cards, proposals, presentations |
| AI Tools | `ai-tools.png` | Service cards, proposals, presentations |
| Business Automation | `business-automation.png` | Service cards, workflow content |
| Mobile Apps | `mobile-apps.png` | Service cards, mobile product sections |
| SaaS Development | `saas-development.png` | Service cards, SaaS solution sections |

### Service Icon Rules

- Use transparent-background PNG files.
- Keep visual sizing consistent across all five icons.
- Do not add labels inside the image.
- Use live HTML text for service names.
- Maintain clear space around each icon.
- Do not recolor individual icons without updating the full icon family.

## 4. Hero Visual Assets

Folder: `/public/images/hero/`

| Asset | Recommended File Name | Primary Use |
|---|---|---|
| Primary Hero Visual | `northwing-hero-whiteboard-robot.png` | Approved hero design comp: robot mapping workflows, system architecture, and business outcomes on a futuristic whiteboard (contains baked-in copy — reference only) |
| Hero Visual (production crop) | `northwing-hero-whiteboard-robot-visual.png` | Production derivative of the approved comp: robot + whiteboard region only, baked comp copy removed. Used by the live hero so headline and CTA text remain live HTML |

### Hero Visual Rules

- Keep headline and CTA text as live HTML.
- Do not bake production website copy into the hero artwork.
- Maintain aspect ratio.
- Use `object-fit: contain`.
- Desktop: visual on the right, copy on the left.
- Mobile: copy and CTAs first, visual below.

## 5. Background and Decorative Assets

Folder: `/public/images/backgrounds/`

| Asset | File Name | Primary Use |
|---|---|---|
| Primary Navy Hero Background | `northwing-hero-background-primary.png` | Hero and premium dark sections |
| Light Section Background | `northwing-section-background-light.png` | Services, About, process, case-study sections |
| Workflow Line Overlay | `northwing-workflow-lines-overlay.png` | Dark sections, workflow visuals, card backgrounds |
| Gold Flight Path Accent | `northwing-flight-path-gold.png` | Hero accents, CTA sections, process diagrams |
| Blue Radial Glow | `northwing-radial-glow-blue.png` | Behind mockups, cards, screenshots, CTA content |
| Footer Network Wave | `northwing-footer-network-wave.png` | Footer, CTA, lower hero transitions |

### Background Usage Notes

- `northwing-hero-background-primary.png`: main dark environmental background.
- `northwing-section-background-light.png`: subtle technical texture behind readable content.
- `northwing-workflow-lines-overlay.png`: use at low opacity, typically 15–30%.
- `northwing-flight-path-gold.png`: use selectively as a directional accent.
- `northwing-radial-glow-blue.png`: use at large scale and low opacity behind featured content.
- `northwing-footer-network-wave.png`: anchor to the bottom; do not tile or repeat.

## 6. Mockup and Presentation Style Guides

Folder: `/public/images/mockups/`

| Asset | File Name | Purpose |
|---|---|---|
| Browser / Dashboard Mockup Guide | `northwing-browser-dashboard-mockup-style-guide.png` | Browser and dashboard presentations |
| Mobile App Mockup Guide | `northwing-mobile-app-mockup-style-guide.png` | Mobile app presentations |
| Dashboard + Mobile Combo Guide | `northwing-dashboard-mobile-combo-style-guide.png` | Cross-device product showcases |
| Workflow Diagram Guide | `northwing-workflow-diagram-style-guide.png` | Process and automation diagrams |
| Callout & Annotation Guide | `northwing-callout-annotation-style-guide.png` | Annotation and feature callouts |
| Metric / Result Card Guide | `northwing-metric-result-card-style-guide.png` | KPI and outcome-card design |

### Mockup System Rules

- Use clean browser or device frames.
- Maintain consistent shadows and spacing.
- Use blue radial glow for separation and focus.
- Use Flight Blue for active states and primary interactions.
- Use Flight Gold sparingly for major outcomes and directional emphasis.
- Keep annotations minimal.
- Keep product content readable.
- Avoid glossy reflections and exaggerated 3D effects.

## 7. Social Sharing Assets

Folder: `/public/images/social/`

| Asset | File Name | Primary Use |
|---|---|---|
| Default Social Share Image | `northwing-social-share-default.png` | Open Graph and default social preview |

Future optional assets:

- `northwing-social-share-services.png`
- `northwing-social-share-about.png`
- `northwing-social-share-case-study.png`

## 8. Brand Documentation

Folder: `/docs/`

| Document | Recommended File Name | Purpose |
|---|---|---|
| Brand Guide | `NORTHWING-BRAND-GUIDE.md` | Core brand system |
| Homepage Design Spec | `HOMEPAGE-DESIGN-SPEC.md` | Homepage implementation requirements |
| Component System | `COMPONENT-SYSTEM.md` | UI components and usage rules |
| Responsive Spec | `RESPONSIVE-SPEC.md` | Breakpoints and responsive behavior |
| Asset Manifest | `ASSET-MANIFEST.md` | Asset source of truth |
| Website Content | `WEBSITE-CONTENT.md` | Approved production copy |

## 9. Asset Naming Standard

Use lowercase filenames, hyphens between words, descriptive names, and stable production names.

Preferred:

`northwing-dashboard-analytics-overview.png`

Avoid:

- `final.png`
- `image1.png`
- `hero-new.png`
- `background_final_v3.png`

## 10. Implementation Rules for Claude Code

1. Use the approved asset files directly.
2. Do not recreate or reinterpret critical brand assets.
3. Do not alter logo proportions or colors.
4. Do not replace service icons with unrelated icon libraries.
5. Use live HTML text for headlines, CTAs, navigation, and service labels.
6. Maintain original image aspect ratios.
7. Use responsive image behavior appropriate to each asset.
8. Use decorative overlays with restraint and low opacity.
9. Add meaningful alt text for informative images.
10. Decorative assets should use empty alt text or CSS backgrounds where appropriate.
11. Optimize production images for web delivery without visibly degrading quality.
12. Follow the Brand Guide, Component System, Responsive Spec, and page design specifications.

## 11. Current Asset Status

| Asset Group | Status |
|---|---|
| Logo System | Complete |
| Favicon Set | Complete |
| Brand Colors | Complete |
| Typography System | Complete |
| Brand Style Guide | Complete |
| Hero Visual Concept | Complete |
| Service Icon Set | Complete |
| Background Asset Library | Complete |
| Mockup Style System | Complete |
| Default Social Sharing Image | Complete |
| Asset Manifest | Complete |

## 12. Next Project Phase

With the visual asset system complete, the project should move into website architecture and content planning:

1. Sitemap
2. Homepage section sequence
3. Messaging hierarchy
4. CTA strategy
5. Trust and credibility framework
6. Page content planning
7. SEO structure
8. Homepage design specification
9. Component system
10. Responsive behavior specification
