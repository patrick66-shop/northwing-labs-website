# NorthWing Labs Contact Page Content

**Status:** Implemented, production verified, and Product Owner approved
**Route:** `/contact`
**Production URL:** `https://northwinglabs.com/contact`
**Production verification commit:** `ab92782`
**Purpose:** Convert the primary `Start a Conversation` action into a useful project inquiry centered on the visitor’s business problem, current process, desired outcome, timing, constraints, and contact information.

## Contact Hero

- Eyebrow: `START A CONVERSATION`
- H1: `Tell us what you’re trying to improve.`
- Supporting copy:
  - `You do not need a technical brief or a finished solution. Start with the business problem, the process that is slowing you down, or the idea you want to bring to life.`
  - `NorthWing Labs will review what you share and help determine the most practical next step.`
- Primary CTA: `Start a Conversation` → `#project-inquiry`

## Project Inquiry Form

- Eyebrow: `TELL US ABOUT THE OPPORTUNITY`
- H2: `Start with the business problem.`
- Supporting copy: `A few details about your business, current process, and desired outcome will help make the first conversation more useful.`
- Required note: `Fields marked with an asterisk are required.`

Fields, in order:

1. `Full name` — required
2. `Business or organization` — optional
3. `Email address` — required
4. `Phone number` — optional
5. `Website` — optional
6. `What type of project are you considering?` — required; Custom Software, AI Tools, Business Automation, Mobile App, SaaS Product, Not Sure Yet
7. `What are you trying to improve?` — required; helper: `Describe the process, bottleneck, customer experience, operational issue, or product idea.`
8. `What would a better result look like?` — required; helper: `Explain what you want to become faster, easier, clearer, more reliable, or possible.`
9. `How does the process work today?` — optional; helper: `Share any spreadsheets, software, manual steps, or disconnected tools currently involved.`
10. `What is your general timeline?` — optional; Just Exploring, As Soon as Practical, Within 1–3 Months, Within 3–6 Months, More Than 6 Months, Not Sure Yet
11. `Budget, constraints, or other considerations` — optional; helper: `Share any budget, deadline, staffing, existing-tool, or operational constraints that may shape the approach.`
12. `How would you prefer to be contacted?` — optional; Email or Phone

- Submit: `Start a Conversation`
- Privacy note: `NorthWing Labs will use the information you provide to review your inquiry and respond to you.`

## Form States

### Success

- Heading: `Thank you. Your inquiry has been received.`
- Copy: `NorthWing Labs will review what you shared and follow up using the contact information you provided.`

After confirmed delivery of both emails, the browser redirects to `/contact/thank-you`, which displays the approved success content from `/docs/CONTACT-THANK-YOU-PAGE-SPEC.md`.

### Error

- Heading: `Your inquiry could not be sent.`
- Copy: `Please review the form and try again. If the problem continues, no information has been confirmed as delivered.`

## Supporting Discovery Panel

- Eyebrow: `A USEFUL FIRST CONVERSATION`
- Heading: `You do not need to have everything figured out.`
- Copy:
  - `Many business problems could be solved in several different ways. Start with what is happening now and what you want to improve.`
  - `NorthWing Labs will help evaluate the problem before recommending technology.`
- Useful details:
  - `Where work slows down or becomes repetitive`
  - `Which people, customers, or teams are affected`
  - `Which tools or spreadsheets are involved`
  - `What a better outcome would look like`
  - `Any important timing, budget, or operational constraints`
- Reassurance: `A clear description of the problem is more useful than a technical solution request.`

## What Happens Next

- Eyebrow: `WHAT HAPPENS NEXT`
- H2: `A clear next step—not a high-pressure sales process.`
- Review: `NorthWing Labs reviews the business problem, current process, desired outcome, and practical constraints you shared.`
- Initial Conversation: `If the opportunity appears aligned, the next step is a focused conversation to clarify the problem and ask useful questions.`
- Practical Recommendation: `NorthWing Labs recommends the most sensible next step, which may be discovery, a defined project, a smaller improvement, or a simpler solution.`

## Not Sure What You Need

- Eyebrow: `NOT SURE WHAT TO ASK FOR?`
- H2: `You do not need to choose the technology first.`
- Copy:
  - `You do not need to know whether the answer is software, AI, automation, or something simpler.`
  - `Start with the problem. NorthWing Labs will help determine what makes sense.`
- CTA: `Start a Conversation` → `#project-inquiry`

## Metadata

- Title: `Contact NorthWing Labs | Start a Conversation`
- Description: `Tell NorthWing Labs what is slowing your business down and start a practical conversation about software, AI, automation, mobile apps, or SaaS development.`
- Canonical: `https://northwinglabs.com/contact`
- Open Graph title: `Start a Conversation | NorthWing Labs`
- Open Graph description: `Start with the business problem, current process, or product idea. NorthWing Labs will help determine the most practical next step.`
- Social image: `/images/social/northwing-social-share-default.png`

## Submission Delivery Status

**Status:** Implemented, production verified, and Product Owner approved with the Vercel + Resend integration.

- Provider: Resend through the Vercel Marketplace integration
- Recipient: `hello@northwinglabs.com`
- Sender: `NorthWing Labs Website <inquiries@forms.northwinglabs.com>`
- Reply-To: the validated visitor email address
- Visitor confirmation recipient: the validated visitor email address
- Visitor confirmation sender: `NorthWing Labs <inquiries@forms.northwinglabs.com>`
- Visitor confirmation Reply-To: `hello@northwinglabs.com`
- Visitor confirmation subject: `We received your NorthWing Labs inquiry`
- Server-only environment variables: `RESEND_API_KEY`, `RESEND_EMAIL_DOMAIN`

The server action validates all submitted values, applies payload and abuse guards, escapes user content in the HTML email, sends the internal inquiry first, and then sends the approved visitor confirmation. The page displays success only after Resend confirms acceptance of both messages. Secret values are never exposed to the browser or written to application logs.

Successful submission behavior:

1. The visitor submits the contact form.
2. The server validates and processes the request.
3. The NorthWing Labs inquiry email is sent.
4. The visitor confirmation email is sent.
5. The browser redirects to `/contact/thank-you`.

A failed submission does not redirect. Existing validation and delivery-error messaging remains available on `/contact`.

Production verification confirmed:

- `/contact` loads successfully.
- Internal inquiries are delivered to `hello@northwinglabs.com`.
- Visitor confirmation emails are delivered.
- Internal inquiry Reply-To targets the submitted visitor email.
- Both outgoing messages appear in Resend.
- The verified sender domain is `forms.northwinglabs.com`.
- The form success state works correctly.
- The Vercel production deployment for commit `ab92782` is Ready.

### Visitor Confirmation Copy

```text
Hi [First Name],

Thank you for contacting NorthWing Labs.

We received the information you shared and will review your business problem, current process, desired outcome, and practical constraints.

If the opportunity appears aligned, the next step will be a focused conversation to clarify the problem and determine the most practical path forward.

You do not need to prepare a technical brief. Starting with the business problem is enough.

Patrick Nichols
NorthWing Labs
Helping Your Business Take Flight.
```
