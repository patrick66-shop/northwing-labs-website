import styles from "./CapabilityCardGrid.module.css";

export type CapabilityIconName =
  | "customers"
  | "tracking"
  | "estimating"
  | "scheduling"
  | "inventory"
  | "reporting"
  | "portal"
  | "employee"
  | "documents"
  | "workflow"
  | "assistant"
  | "drafting"
  | "extract"
  | "email"
  | "spark";

/* Line icons on the site's 24px grid / 1.8 stroke convention
   (OutcomeIcon family). Decorative — card titles carry the meaning. */
const PATHS: Record<CapabilityIconName, React.ReactNode> = {
  customers: (
    <>
      <circle cx="9.2" cy="8.4" r="3.2" />
      <path d="M3.8 19.4c.8-3.1 2.9-4.8 5.4-4.8s4.6 1.7 5.4 4.8" />
      <circle cx="17" cy="9.6" r="2.4" />
      <path d="M16.4 14.8c1.9.4 3.4 1.6 4 3.7" />
    </>
  ),
  tracking: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
      <path d="m7.5 9 1.8 1.8 3-3.4" />
      <path d="M14.5 9.6h2" />
      <path d="m7.5 15 1.8 1.8 3-3.4" />
      <path d="M14.5 15.6h2" />
    </>
  ),
  estimating: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M8.5 7.5h7" />
      <path d="M8.5 11.5h2M8.5 15h2M13.5 11.5h2M13.5 15h2" />
      <path d="M13.5 18.5h2" />
    </>
  ),
  scheduling: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <circle cx="14.8" cy="15" r="2.6" />
      <path d="M14.8 13.6v1.4l1 1" />
    </>
  ),
  inventory: (
    <>
      <path d="M12 3.2 20 7v10l-8 3.8L4 17V7l8-3.8z" />
      <path d="M4 7l8 3.8L20 7" />
      <path d="M12 10.8V20.8" />
      <path d="M16 5.1 8 8.9" />
    </>
  ),
  reporting: (
    <>
      <path d="M4 4v16h16" />
      <rect x="7.5" y="12" width="3" height="5" rx="1" />
      <rect x="12.5" y="9" width="3" height="8" rx="1" />
      <path d="m8 7.5 3.4-2.4 3 2 3.6-3" />
    </>
  ),
  portal: (
    <>
      <rect x="3.5" y="4.5" width="17" height="12.5" rx="2.5" />
      <path d="M9 21h6M12 17v4" />
      <circle cx="9" cy="9.4" r="1.9" />
      <path d="M5.8 14.3c.7-1.8 1.9-2.7 3.2-2.7s2.5.9 3.2 2.7" />
      <path d="M15 9.5h3M15 12.5h3" />
    </>
  ),
  employee: (
    <>
      <rect x="4" y="6.5" width="16" height="13" rx="2.5" />
      <path d="M9 6.5V5a3 3 0 0 1 6 0v1.5" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M8.6 17.4c.6-1.6 1.9-2.4 3.4-2.4s2.8.8 3.4 2.4" />
    </>
  ),
  documents: (
    <>
      <path d="M7 3.5h7l4 4V18a2.5 2.5 0 0 1-2.5 2.5h-8.5A2.5 2.5 0 0 1 4.5 18V6A2.5 2.5 0 0 1 7 3.5z" />
      <path d="M14 3.5V8h4.5" />
      <path d="M8 12.5h8M8 16h5.5" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3.5" width="6" height="6" rx="1.6" />
      <rect x="15" y="14.5" width="6" height="6" rx="1.6" />
      <path d="M9 6.5h6a3 3 0 0 1 3 3v5" />
      <path d="M15 17.5H9a3 3 0 0 1-3-3v-5" />
    </>
  ),
  assistant: (
    <>
      <path d="M20 10.6c0 3.7-3.6 6.6-8 6.6-.9 0-1.8-.1-2.6-.35L5.2 18.4l1.1-2.9C4.4 14.3 3.5 12.5 3.5 10.6 3.5 7 7.1 4 12 4s8 3 8 6.6z" />
      <path d="m12 8 .8 1.9 1.9.8-1.9.8L12 13.4l-.8-1.9-1.9-.8 1.9-.8L12 8z" />
      <path d="M19 18.5v.01M20.7 20.8v.01" />
    </>
  ),
  drafting: (
    <>
      <path d="M7 3.5h7l4 4V18a2.5 2.5 0 0 1-2.5 2.5h-8.5A2.5 2.5 0 0 1 4.5 18V6A2.5 2.5 0 0 1 7 3.5z" />
      <path d="M14 3.5V8h4.5" />
      <path d="m8 16.6 6-6a1.35 1.35 0 0 1 1.9 1.9l-6 6-2.5.6.6-2.5z" />
    </>
  ),
  extract: (
    <>
      <path d="M13 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h6" />
      <path d="M8 8h4M8 11.5h3M8 15h3" />
      <path d="M13.5 11.8h7" />
      <path d="m17.5 8.8 3 3-3 3" />
      <path d="M16 16.9h4.5M16 19.6h3" />
    </>
  ),
  email: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.6 7.5-5.6" />
      <path d="m17.6 14.1.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4z" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18.2l-1.8-5.6L4.7 10.8 10.2 9 12 3.5z" />
      <path d="m18.8 16.2.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
      <path d="M5.6 17.5v.01" />
    </>
  ),
};

export default function CapabilityIcon({ name }: { name: CapabilityIconName }) {
  return (
    <span className={styles.iconPanel} aria-hidden="true">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PATHS[name]}
      </svg>
    </span>
  );
}
