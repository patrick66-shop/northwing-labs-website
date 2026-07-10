import Image from "next/image";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  title: string;
  icon: string;
  children: React.ReactNode;
};

/**
 * ServiceCard — one NorthWing Labs service (docs/COMPONENT-SYSTEM.md §15).
 * Approved service icon (96px, empty alt — the live title names the
 * service), Navy heading, Slate copy, slight hover lift.
 */
export default function ServiceCard({ title, icon, children }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconFrame}>
        <Image src={icon} alt="" width={96} height={96} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
