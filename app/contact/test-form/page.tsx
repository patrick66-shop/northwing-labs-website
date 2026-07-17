import type { Metadata } from "next";
import SiteContainer from "@/components/SiteContainer";
import styles from "./test-form.module.css";

export const metadata: Metadata = {
  title: { absolute: "CRM Form Test | NorthWing Labs" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CrmTestFormPage() {
  return (
    <SiteContainer className={styles.wrapper}>
      <h1 className={styles.heading}>CRM Form Test</h1>
      <p className={styles.note}>Internal testing page — not linked from site navigation.</p>
      <div className={styles.frameShell}>
        <iframe
          src="https://crm.northwinglabs.com/forms/lcf_9cmwsOpuQKbqLmw0SlyE3M0q6J13LqZYFuk9B_h-UYw?embed=1"
          title="Tell us about your project"
          width="100%"
          height={750}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          style={{ border: 0, width: "100%", minHeight: 750 }}
        />
      </div>
    </SiteContainer>
  );
}
