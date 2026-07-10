import styles from "./OutcomeCard.module.css";

export type OutcomeIconName =
  | "clock"
  | "bolt"
  | "shield-check"
  | "eye"
  | "people"
  | "growth";

/* Restrained single-weight line icons, drawn to one 24px grid with a
   1.8 stroke so all six read at identical visual weight. Decorative —
   the card titles carry the meaning. */
const PATHS: Record<OutcomeIconName, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </>
  ),
  bolt: <path d="M13 2 3.8 14h6.4l-1.2 8L18.2 10h-6.4L13 2z" />,
  "shield-check": (
    <>
      <path d="M12 3l7 2.8v5.4c0 4.4-2.9 7.4-7 8.8-4.1-1.4-7-4.4-7-8.8V5.8L12 3z" />
      <path d="m8.8 11.8 2.2 2.2 4.2-4.2" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 6.2 12 6.2 21.5 12 21.5 12 18 17.8 12 17.8 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8.2" r="3.4" />
      <path d="M3.4 19.5c.8-3.2 3-4.9 5.6-4.9s4.8 1.7 5.6 4.9" />
      <circle cx="17.2" cy="9.4" r="2.6" />
      <path d="M16.4 14.9c2 .4 3.6 1.7 4.2 3.9" />
    </>
  ),
  growth: (
    <>
      <path d="M3 17.5 9 11.5l4 4 8-8.5" />
      <path d="M15.5 7h5.5v5.8" />
    </>
  ),
};

export default function OutcomeIcon({ name }: { name: OutcomeIconName }) {
  return (
    <svg
      className={styles.icon}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
