# NorthWing Labs Work Page Content (`/work`)

**Status: APPROVED — copy written by Claude Code (2026-07-12) from the
approved brand voice (docs/08_Voice_and_Tone.md) and `docs/SITEMAP.md`
§6 (Work): purpose "Demonstrate capability through real, clearly
labeled examples," the transparency rule (label every item; no
fictional case studies), and the approved initial content (NorthWing
Labs Website Project, Woodworkers Pricing & Profit Toolkit). The
featured case study reuses the approved homepage copy verbatim
(GitHub issue #8 + polish pass). Reviewed and approved by the Product
Owner on 2026-07-12.**

This document is the source of truth for the Work page, following the
same convention as the other page content documents. Do not rewrite,
shorten, expand, or replace production copy during implementation
without explicit approval.

## SEO and Metadata

- **Page title:** Our Work | NorthWing Labs
- **Meta description:** Real NorthWing Labs work, honestly labeled — a connected business management platform built for a custom woodworking business, and the systems behind this website.
- **Canonical route:** `/work`
- **Open Graph title:** Our Work | NorthWing Labs
- **Open Graph description:** Real work, honestly labeled — no fictional clients, no invented results. See what NorthWing Labs actually builds.
- **Social image:** `/images/social/northwing-social-share-default.png` (approved default)

## 1. Hero

### Eyebrow

`OUR WORK`

### H1

**Real work, honestly labeled.**

### Supporting Copy

NorthWing Labs shows working software, not borrowed logos. Everything on this page is something we actually built — and each example is labeled for exactly what it is.

### Primary CTA

**Start a Conversation** → contact route

### Secondary CTA

**See the Featured Build** → anchor to the case study (`#woodworking-toolkit`)

### Trust Line

No fictional clients. No invented results. As new work ships, it appears here the same way.

## 2. How to Read This Page (narrative)

### Eyebrow

`HOW TO READ THIS PAGE`

### Heading

**Every example is labeled for what it is.**

### Supporting Copy

Some studios fill this page with embellished case studies and logos you cannot verify. We would rather show you fewer things that are real. Each item here carries a label: an internal product we built and run, a demonstration we created to show an approach, or a client project.

As client work ships, it will appear here the same way — real, specific, and labeled.

## 3. Featured Case Study — Woodworking Business Platform

Section ID: `woodworking-toolkit`

> Reuses the approved homepage case study copy verbatim (GitHub issue
> #8 + approved polish pass): title, description, challenge, solution
> lead, solution, and the six results. Only the transparency label and
> the CTA are page-specific.

### Eyebrow

`CASE STUDY`

### Transparency Label

Internal product — built for our founder's woodworking business

### Title / Description / Challenge / Solution / Results

(Approved homepage copy, verbatim — see `app/page.tsx`
`WOODWORKING_CASE_STUDY` and GitHub issue #8.)

### CTA

**Start a Conversation →** → contact route

## 4. Inside the Build (narrative)

### Eyebrow

`INSIDE THE BUILD`

### Heading

**From spreadsheet chaos to one connected platform.**

### Supporting Copy

The platform connects the numbers a small shop lives on: pricing that accounts for materials, labor, and overhead; a quote and proposal builder that turns pricing into professional paperwork; order tracking from deposit to delivery; and dashboards that show revenue, profit, and what deserves attention — all driven by one set of business settings.

It began inside our founder's own custom woodworking business, which means it was built by someone who had to live with the results. That is the standard we bring to client work.

## 5. This Website (narrative)

### Eyebrow

`THIS WEBSITE`

### Heading

**You are looking at one of our builds right now.**

### Supporting Copy (with contextual links)

This website is a NorthWing Labs project like any other: a documented brand system, a reusable component library, and the same seven-step process [link: /process] we run for client work — designed, built, reviewed, and improved in stages.

It also runs on what we sell. The contact workflow [link: /contact] that receives your inquiry — validation, delivery, confirmation — is the same kind of practical automation we build for customers.

## 6. What This Work Shows (checklist)

### Eyebrow

`WHAT THIS WORK SHOWS`

### Heading

**Capabilities you can see for yourself.**

### Supporting Copy

Between the platform and this site, the work demonstrates:

### Checklist Items

- Connected business platforms, not isolated tools.
- Pricing, quoting, and order workflows.
- Dashboards and profit visibility.
- Design systems built from a brand foundation.
- Responsive, accessible implementation.
- A staged, reviewable build process.

## 7. Final CTA

### Eyebrow

`LET'S BUILD THE NEXT ONE`

### Heading

**Your project could be the next thing on this page.**

### Supporting Copy

Tell us about the workflow, the product idea, or the manual process that needs to become software. We would rather show real work than talk about hypothetical work — and that starts with yours.

### Primary CTA

**Start a Conversation** → contact route

### Secondary CTA

**Explore Our Services** → services page

### Reassurance Line

Every project starts with a conversation—not a commitment.

## Related Change

The homepage case study CTA (`View the Complete Case Study →`) has
carried a recorded placeholder link (`#`) since GitHub issue #8,
pending a dedicated case-study destination. With `/work` implemented,
that button now links to `/work#woodworking-toolkit`.
