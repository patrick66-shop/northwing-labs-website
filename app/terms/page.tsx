import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import LegalDocument from "@/components/LegalDocument";
import SiteFooter from "@/components/SiteFooter";

/* Copy per docs/LEGAL-PAGES-CONTENT.md (drafted 2026-07-12; governing
   law Tennessee per Product Owner), pending Product Owner review.
   The layout template appends "| NorthWing Labs". */
const PAGE_TITLE = "Terms of Service";
const PAGE_DESCRIPTION =
  "The terms that apply to using northwinglabs.com — in plain language.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    siteName: "NorthWing Labs",
    title: `${PAGE_TITLE} | NorthWing Labs`,
    description: PAGE_DESCRIPTION,
    url: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <LegalDocument
        eyebrow="LEGAL"
        title="Terms of Service"
        effectiveDate="July 12, 2026"
        intro="Use the site normally, don't abuse it, and understand that the content here is general information — client engagements are governed by their own written agreements. Here are the details."
      >
        <h2>1. Agreement to These Terms</h2>
        <p>
          By using northwinglabs.com, you agree to these terms. If you do not
          agree with them, please do not use the site. &ldquo;NorthWing
          Labs,&rdquo; &ldquo;we,&rdquo; and &ldquo;us&rdquo; refer to the
          NorthWing Labs business; &ldquo;you&rdquo; means the person or
          business using the site.
        </p>

        <h2>2. What This Site Is</h2>
        <p>
          This website describes NorthWing Labs services and shares
          information about how we work. Its content is provided for general
          information only — it is not professional, legal, or financial
          advice, and descriptions of services, examples, and outcomes are
          illustrative rather than promises about your specific situation.
        </p>

        <h2>3. Inquiries Are Not Engagements</h2>
        <p>
          Submitting the contact form starts a conversation — it does not
          create a client relationship, an engagement, or any obligation on
          either side. Actual project work is governed by a separate written
          agreement between you and NorthWing Labs, and if anything in that
          agreement conflicts with these terms, the agreement wins.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          The content of this site — text, illustrations, design, and
          branding — belongs to NorthWing Labs. You may not copy, reuse, or
          republish it without our permission, apart from ordinary sharing
          and quoting with attribution. Ownership of software we build for
          clients is defined in the applicable project agreement; our
          standard practice is that clients own what we build for them.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>
          Use the site lawfully and normally. Do not attempt to disrupt or
          compromise it, probe or test its security without permission,
          scrape it at scale, misrepresent who you are, or use the contact
          form to send spam or unlawful content.
        </p>

        <h2>6. Third-Party Services and Links</h2>
        <p>
          The site may reference or link to third-party sites and services.
          We do not control them and are not responsible for their content,
          policies, or practices.
        </p>

        <h2>7. Disclaimer</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; and &ldquo;as
          available.&rdquo; To the fullest extent permitted by law, we make
          no warranties about the site — including its availability,
          accuracy, or fitness for a particular purpose.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, NorthWing Labs will not be
          liable for indirect, incidental, special, or consequential damages
          arising from your use of this website. This section is about the
          website itself; responsibilities in client engagements are defined
          in their own written agreements.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of Tennessee,
          without regard to its conflict-of-law principles.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Changes take effect
          when posted on this page with an updated effective date, and
          continuing to use the site after that means you accept them.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href="mailto:hello@northwinglabs.com">hello@northwinglabs.com</a>.
        </p>
      </LegalDocument>
      <SiteFooter />
    </>
  );
}
