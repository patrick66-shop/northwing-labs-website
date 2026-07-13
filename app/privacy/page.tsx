import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import LegalDocument from "@/components/LegalDocument";
import SiteFooter from "@/components/SiteFooter";

/* Copy per docs/LEGAL-PAGES-CONTENT.md (drafted 2026-07-12, grounded
   in the site's audited practices), pending Product Owner review.
   The layout template appends "| NorthWing Labs". */
const PAGE_TITLE = "Privacy Policy";
const PAGE_DESCRIPTION =
  "How NorthWing Labs collects, uses, and protects information on northwinglabs.com — in plain language.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: PAGE_DESCRIPTION,
    url: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <LegalDocument
        eyebrow="LEGAL"
        title="Privacy Policy"
        effectiveDate="July 12, 2026"
        intro="We collect only what you send us through the contact form, we use it to respond to you, we never sell it, and this site currently sets no cookies and runs no advertising or analytics trackers. Here are the details."
      >
        <h2>1. Who We Are</h2>
        <p>
          NorthWing Labs builds custom software, AI tools, automation, mobile
          apps, and SaaS products for small businesses. This policy describes
          how we handle information collected through this website,
          northwinglabs.com. Questions? Email{" "}
          <a href="mailto:hello@northwinglabs.com">hello@northwinglabs.com</a>.
        </p>

        <h2>2. Information You Send Us</h2>
        <p>
          The only information this site collects directly is what you choose
          to submit through the contact form: your name, organization, email
          address, phone number, website, and the project details you provide
          (project type, the business problem, desired outcome, current
          process, timeline, constraints, and your preferred contact method).
        </p>

        <h2>3. Information Collected Automatically</h2>
        <p>
          Like nearly every website, our hosting provider (Vercel) generates
          standard server logs — such as IP address, browser type, and pages
          requested — used for security and keeping the site running. This
          site currently sets no cookies and runs no analytics or advertising
          trackers. If that changes, we will update this policy first.
        </p>

        <h2>4. How We Use Your Information</h2>
        <p>
          We use what you send us to respond to your inquiry, evaluate whether
          we are a good fit for your project, and communicate with you about
          it — including the automatic confirmation email you receive after
          submitting the form. We do not add you to marketing lists, and we do
          not send newsletters or promotional email unless you ask for
          something like that in the future.
        </p>

        <h2>5. How Information Is Shared</h2>
        <p>
          We do not sell, rent, or trade your information — ever. It is shared
          only with the service providers that make this site work: Resend,
          which delivers our email (your inquiry to us, and your confirmation
          to you), and Vercel, which hosts the site. We may also disclose
          information if the law genuinely requires it.
        </p>

        <h2>6. How Long We Keep It</h2>
        <p>
          Inquiries are kept as ordinary business correspondence for as long
          as they remain useful for working together or answering follow-up
          questions. If you would like your inquiry deleted, email{" "}
          <a href="mailto:hello@northwinglabs.com">hello@northwinglabs.com</a>{" "}
          and we will remove it.
        </p>

        <h2>7. Your Choices</h2>
        <p>
          There is no account to manage and nothing to unsubscribe from. If
          you want to see, correct, or delete the information you sent us,
          email{" "}
          <a href="mailto:hello@northwinglabs.com">hello@northwinglabs.com</a>{" "}
          and we will take care of it.
        </p>

        <h2>8. Children</h2>
        <p>
          This site is for businesses and is not directed to children under
          13. We do not knowingly collect information from children; if you
          believe a child has submitted information, contact us and we will
          delete it.
        </p>

        <h2>9. Security</h2>
        <p>
          We use reasonable safeguards — encrypted connections (HTTPS),
          reputable providers, and limited access — to protect your
          information. No method of transmission or storage is completely
          secure, but we treat what you send us with care.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          If our practices change, we will update this page and its effective
          date. Meaningful changes will not be applied retroactively to
          information collected under an earlier version.
        </p>

        <h2>11. Contact</h2>
        <p>
          NorthWing Labs —{" "}
          <a href="mailto:hello@northwinglabs.com">hello@northwinglabs.com</a>
        </p>
      </LegalDocument>
      <SiteFooter />
    </>
  );
}
