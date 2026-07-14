# NorthWing Labs Homepage Architecture

This document defines the approved homepage section architecture for the NorthWing Labs website.

The homepage should function as a deliberate conversion narrative, moving the visitor through:

**Problem Recognition → Understanding → Confidence → Proof → Action**

The homepage should not feel like a collection of disconnected sections. Each section should answer the next logical question in the visitor journey.

---

## 1. Homepage Section Order

```text
1. Header / Navigation
2. Hero
3. Problem Recognition
4. Services Overview
4a. Solutions Teaser (Homepage)
5. Business Outcomes
6. How We Work
7. Featured Work / Demonstration
8. Why NorthWing Labs
8a. About Teaser (Homepage)
9. Results / Value
10. Final CTA
11. Footer
```

---

## 2. Homepage Messaging Hierarchy

### Primary Message

NorthWing Labs builds practical technology around real business problems.

### Secondary Message

NorthWing Labs focuses on:

- Custom Software
- AI Tools
- Business Automation
- Mobile Apps
- SaaS Development

### Business Value Message

The result should be:

- Less manual work
- Faster customer response
- Better visibility
- More consistent processes
- Better customer experiences
- Systems that can support growth

### Trust Message

NorthWing Labs uses:

- A clear process
- Direct communication
- Practical thinking
- Business-first problem solving
- Responsible technology implementation

### Conversion Message

The visitor does not need to know the technical answer before starting a conversation.

The starting point is the business problem.

---

## 3. Header / Navigation

### Purpose

Establish the brand immediately, provide orientation, and make the next action obvious.

### Layout

Left:
- NorthWing Labs horizontal logo

Right:
- Services
- Solutions
- Work
- Process
- About
- Contact

Primary CTA:
- Start a Conversation

### Behavior

Desktop:
- Transparent or visually integrated with the hero at the top of the page
- Use the reversed logo on dark hero backgrounds
- Keep CTA clearly visible

On scroll:
- Transition to a stable solid background
- Use either NorthWing Midnight or Wing White depending on implementation
- Preserve clear contrast and readability

Mobile:
- Collapse into a clean mobile navigation menu
- Avoid overcrowding the header
- Preserve access to the primary CTA where practical

### Messaging Role

The header should not carry marketing copy.

Its role is:
- Orientation
- Navigation
- Action

---

## 4. Hero Section

### Purpose

Explain what NorthWing Labs does within the first viewport.

The visitor should understand:
- What the company does
- Who it serves
- What business benefit it creates

### Content Structure

Eyebrow:

`SOFTWARE • AI • AUTOMATION`

Headline:

**Your business has outgrown spreadsheets. Your systems should catch up.**

Supporting copy:

NorthWing Labs replaces repetitive work, disconnected tools, and fragile spreadsheets with practical software, AI, and automation—so your team spends less time copying information, chasing follow-ups, and searching for answers, and more time serving customers and growing the business.

Primary CTA:

**Start a Conversation**

Secondary CTA:

**Explore Our Services**

### Layout

Desktop:
- Two-column layout
- Copy left: approximately 42–45%
- Visual right: approximately 55–58%
- Vertically center content
- Maintain generous negative space

Mobile:
- Stack vertically
- Copy first
- CTAs below copy
- Hero visual below CTAs
- Full available width
- No horizontal overflow

### Approved Assets

Primary background:

`/public/images/backgrounds/northwing-hero-background-primary.png`

Primary hero visual:

`/public/images/hero/northwing-hero-whiteboard-robot.png`

Supporting glow:

`/public/images/backgrounds/northwing-radial-glow-blue.png`

Optional restrained overlay:

`/public/images/backgrounds/northwing-workflow-lines-overlay.png`

Optional directional accent:

`/public/images/backgrounds/northwing-flight-path-gold.png`

### Visual Rules

- Keep hero headline and CTA text as live HTML
- Do not bake production copy into the image
- Maintain hero image aspect ratio
- Use `object-fit: contain`
- Do not crop important workflow content
- Use decorative overlays with restraint
- Keep the strongest visual weight on the right side

---

## 5. Problem Recognition Section

### Purpose

Make the visitor feel understood before presenting solutions.

The visitor should think:

**That sounds like my business.**

### Recommended Eyebrow

`WHEN BUSINESS OUTGROWS THE PROCESS`

### Recommended Headline

**The problem is not always the business. Sometimes it is the system behind it.**

### Supporting Copy Direction

Small businesses often reach a point where spreadsheets, disconnected tools, repetitive tasks, and manual follow-up start slowing everything down.

NorthWing Labs helps identify where the friction is and builds practical systems to remove it.

### Recommended Problem Cards

#### Repetitive Manual Work

Your team spends too much time:
- Copying information
- Updating spreadsheets
- Sending follow-ups
- Repeating routine tasks

#### Disconnected Systems

Customer information, orders, files, schedules, and communication live in separate places that do not work together.

#### Slow Customer Response

Requests, quotes, updates, and follow-ups depend on manual action and can easily be delayed.

#### Limited Visibility

The business has data, but no clear view of what is happening across operations.

### Design Direction

- Use the light section background
- Keep cards practical and readable
- Avoid leading with technology terminology
- Focus on real business friction

Approved background:

`/public/images/backgrounds/northwing-section-background-light.png`

---

## 6. Services Overview

### Purpose

Explain what NorthWing Labs can build.

### Recommended Eyebrow

`WHAT WE BUILD`

### Recommended Headline

**Technology that fits the way your business actually works.**

### Supporting Copy Direction

Every business has different workflows, customers, systems, and constraints.

NorthWing Labs designs practical solutions around the real problem instead of forcing the business into a generic tool.

### Service Cards

#### Custom Software

Software built around your workflow, data, customers, and operational needs.

Icon:

`/public/brand/icons/services/custom-software.png`

#### AI Tools

Practical AI assistants and tools that help teams work faster, organize information, and make better use of business knowledge.

Icon:

`/public/brand/icons/services/ai-tools.png`

#### Business Automation

Connected workflows that reduce repetitive tasks, improve follow-up, and keep information moving between systems.

Icon:

`/public/brand/icons/services/business-automation.png`

#### Mobile Apps

Purpose-built mobile experiences for customers, employees, field teams, and business operations.

Icon:

`/public/brand/icons/services/mobile-apps.png`

#### SaaS Development

From concept to working product, NorthWing Labs helps design and build software products that can serve customers at scale.

Icon:

`/public/brand/icons/services/saas-development.png`

### CTA

**Explore Our Services**

### Design Direction

- Use one coordinated card system
- Maintain consistent icon size
- Use live HTML text for all labels and descriptions
- Avoid replacing approved icons with a generic icon library

---

## 6a. Solutions Teaser (Homepage)

**Status: APPROVED** — reviewed and approved by the Product Owner on 2026-07-13 (see `docs/WEBSITE-CONTENT.md` §4a).

### Purpose

Bridge "what we build" (Services Overview) into "which problem is yours" before Business Outcomes answers "what changes." Previews the `/solutions` page rather than duplicating it — a subset of three categories, not all six, each linking through to the full Solutions page.

### Recommended Eyebrow

`SOLUTIONS`

### Recommended Headline

**Start with the problem. We'll find the right technology.** (verbatim reuse of the `/solutions` H1, so this section reads as a literal preview)

### Featured Categories (3 of the approved 6 from `/solutions`)

- Save Time and Reduce Manual Work
- Connect Disconnected Systems
- Modernize Spreadsheet Processes

(The other three — Improve Customer Response, Improve Business Visibility, Build New Digital Products — are intentionally excluded here because their wording already echoes Business Outcomes and Problem Recognition elsewhere on the homepage.)

### CTA

**See All Solutions** → `/solutions`

### Design Direction

- Tinted section background — breaks the light/light/dark rhythm around it and echoes the tinted "Problem First" section on `/solutions` itself
- Reuses the `SolutionGrid` card component from the Solutions page (no separate card system)
- No per-card service links (that level of detail belongs on the full page, not the teaser)

---

## 7. Business Outcomes Section

### Purpose

Shift the conversation from technology to business value.

### Recommended Eyebrow

`WHAT CHANGES`

### Recommended Headline

**Better systems create better businesses.**

### Outcome Categories

#### Save Time
Reduce repetitive work and give people more time for higher-value tasks.

#### Respond Faster
Improve how quickly customers receive quotes, answers, updates, and follow-up.

#### Reduce Errors
Replace fragile manual steps with consistent workflows and connected systems.

#### Improve Visibility
Turn scattered information into useful dashboards, alerts, and operational views.

#### Create Better Experiences
Make it easier for customers and employees to interact with the business.

#### Support Growth
Build systems that can handle more customers, more work, and more complexity.

### Design Direction

- Use the approved metric/result card language
- Do not fabricate numeric performance claims
- Use qualitative outcomes until real measured results exist

Style guide reference:

`/public/images/mockups/northwing-metric-result-card-style-guide.png`

---

## 8. How We Work

### Purpose

Reduce uncertainty by showing a clear and manageable process.

### Recommended Eyebrow

`HOW WE WORK`

### Recommended Headline

**A clear process from problem to working solution.**

### Seven-Step Process

#### 1. Discover
Understand the business, users, workflow, current tools, and problem.

#### 2. Define
Clarify requirements, priorities, scope, constraints, and success criteria.

#### 3. Design
Plan the user experience, workflows, screens, system behavior, and technical direction.

#### 4. Build
Develop the solution in controlled, reviewable stages.

#### 5. Test
Validate usability, functionality, responsiveness, accessibility, and reliability.

#### 6. Launch
Deploy the solution and confirm production readiness.

#### 7. Improve
Measure results, gather feedback, and refine where it adds value.

### CTA

**See Our Process**

### Visual Direction

Use the approved workflow diagram style.

Style guide reference:

`/public/images/mockups/northwing-workflow-diagram-style-guide.png`

Optional supporting overlay:

`/public/images/backgrounds/northwing-workflow-lines-overlay.png`

---

## 9. Featured Work / Demonstration

### Purpose

Show that NorthWing Labs can build useful systems and products.

### Recommended Eyebrow

`BUILT TO SOLVE REAL PROBLEMS`

### Recommended Headline

**From business problem to working product.**

### Initial Featured Project

#### Woodworkers Pricing & Profit Toolkit

Positioning:

An internal product designed to help woodworkers price work accurately, build quotes, track orders, manage product data, and understand profitability.

### What the Project Demonstrates

- Complex business logic
- Connected workflows
- Pricing systems
- Dashboard design
- Customer-facing tools
- Product architecture
- Workflow thinking
- Productization

### Transparency Label

`INTERNAL PRODUCT`

### CTA

**View the Project**

### Layout Direction

Desktop:
- Product or dashboard visual on one side
- Project summary on the other
- Use balanced visual hierarchy

Mobile:
- Project summary first
- Mockup below
- Maintain readable annotation scale

### Style References

Browser/dashboard mockup:

`/public/images/mockups/northwing-browser-dashboard-mockup-style-guide.png`

Dashboard + mobile combination:

`/public/images/mockups/northwing-dashboard-mobile-combo-style-guide.png`

Callout and annotation:

`/public/images/mockups/northwing-callout-annotation-style-guide.png`

---

## 10. Why NorthWing Labs

### Purpose

Establish differentiation, credibility, and operating philosophy.

### Recommended Eyebrow

`WHY NORTHWING`

### Recommended Headline

**Technology should make the business easier to run.**

### Differentiators

#### Built Around the Business
Start with the actual workflow, problem, users, and desired result.

#### Practical Over Complicated
Use the simplest technology that solves the problem well.

#### Clear Communication
Explain decisions in business language and keep the project understandable.

#### Designed for Small Business Reality
Account for:
- Budget
- Time
- Staffing
- Existing tools
- Operational constraints

#### Direct Partnership
Work closely with the person building the solution rather than navigating a large agency structure.

### Supporting Copy Direction

NorthWing Labs is built around a simple belief:

Small businesses should have access to useful software, AI, and automation without enterprise complexity or unnecessary agency overhead.

---

## 10a. About Teaser (Homepage)

**Status: APPROVED** — reviewed and approved by the Product Owner on 2026-07-13 (see `docs/WEBSITE-CONTENT.md` §8a).

### Purpose

Personalize the trust case Why NorthWing Labs just made in the abstract, with the founder story, immediately before the Final CTA closes the page. Previews the `/about` page.

### Recommended Eyebrow

`ABOUT NORTHWING LABS`

### Recommended Headline

**The business came first. The technology followed.** (verbatim reuse of the `/about` H1)

### Supporting Copy Direction

Condensed founder-story synthesis (thirty years of business-systems consulting, opened his own small business, built the software he needed) plus the approved `/about` trust line, verbatim: "Not a large agency. Not a generic dev shop. A practical technology partner."

### CTA

**Learn More About Us** → `/about`

### Design Direction

- Light section background — keeps the tinted → light → dark alternation intact between Why NorthWing Labs (tinted) and Final CTA (dark)
- Text-only statement band (reuses the `ServiceNarrative` component already used on service pages) — no card grid, this is a narrative beat, not an enumeration

---

## 11. Results / Value Section

### Purpose

Reinforce business value without unsupported claims.

### Recommended Eyebrow

`WHAT GOOD TECHNOLOGY SHOULD DO`

### Recommended Headline

**The goal is not more software. The goal is a better business.**

### Result-Oriented Cards

- Less manual work
- Faster customer response
- Clearer business visibility
- More consistent processes
- Better customer experiences
- Systems ready for growth

### Design Rules

- Do not invent percentages
- Do not imply unverified client outcomes
- Use qualitative value statements until measured project results exist
- Replace with documented case-study metrics later

Style guide reference:

`/public/images/mockups/northwing-metric-result-card-style-guide.png`

---

## 12. Final CTA

### Purpose

Convert an interested visitor into a conversation.

### Recommended Eyebrow

`LET'S TALK ABOUT THE PROBLEM`

### Recommended Headline

**What is slowing your business down?**

### Supporting Copy

You do not need to know whether the answer is software, AI, automation, or something simpler.

Start with the problem. NorthWing Labs will help determine what makes sense.

### Primary CTA

**Start a Conversation**

### Secondary CTA

**See How We Work**

### Visual Direction

- NorthWing Midnight or NorthWing Navy background
- Blue radial glow
- Restrained Flight Gold trajectory accent
- No complex illustration required

Approved assets:

`/public/images/backgrounds/northwing-radial-glow-blue.png`

`/public/images/backgrounds/northwing-flight-path-gold.png`

---

## 13. Footer

### Purpose

Provide final brand reinforcement, structured navigation, and legal links.

### Brand Area

NorthWing Labs logo

Tagline:

**Helping Your Business Take Flight.**

Short description:

Practical software, AI tools, and automation for small businesses.

### Navigation Groups

#### Company
- About
- Process
- Contact

#### Services
- Custom Software
- AI Tools
- Business Automation
- Mobile Apps
- SaaS Development

#### Explore
- Solutions
- Work

#### Legal
- Privacy Policy
- Terms of Use

### Footer Visual Direction

- Dark NorthWing background
- Use reversed logo
- Anchor network wave at bottom
- Do not tile or repeat the wave texture

Approved asset:

`/public/images/backgrounds/northwing-footer-network-wave.png`

---

## 14. Homepage Conversion Path

The homepage should support this visitor journey:

```text
1. I understand what this company does.
2. They understand the problems businesses like mine face.
3. They can build several types of solutions.
4. They care about outcomes, not just technology.
5. Their process looks clear and manageable.
6. They have built real products and systems.
7. Their approach feels practical and credible.
8. I understand what happens next.
9. I am ready to start a conversation.
```

---

## 15. Implementation Principles

Claude Code should follow these homepage architecture rules:

1. Preserve the approved section order.
2. Do not remove sections without explicit approval.
3. Do not invent new sections without explicit approval.
4. Use approved assets from the Asset Manifest.
5. Use live HTML for all production copy.
6. Keep section hierarchy visually distinct.
7. Use reusable components.
8. Maintain deliberate responsive behavior.
9. Do not fabricate testimonials, client logos, or business metrics.
10. Keep the site practical, clear, modern, and business-focused.
11. Follow the Brand Guide, Asset Manifest, Component System, and Responsive Spec.
12. Build the homepage in controlled, reviewable stages.

---

## 16. Next Documentation Step

The next required document is:

`WEBSITE-CONTENT.md`

That file should contain the exact approved production copy for every homepage section before implementation begins.
