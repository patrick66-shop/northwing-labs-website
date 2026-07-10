import Image from "next/image";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  title: string;
  icon: string;
  /** Per-icon presentation: the approved icon files share a 1536×1024
   * canvas but their artwork density varies, so each icon carries a
   * computed display width and offsets that center its visible artwork
   * in the 112×96 icon area at consistent perceived size. The source
   * assets are used as provided — no cropping or filters. */
  iconDisplay: { width: number; left: number; top: number };
  children: React.ReactNode;
};

/**
 * ServiceCard — one NorthWing Labs service (docs/COMPONENT-SYSTEM.md §15).
 * Approved service icon (empty alt — the live title names the service),
 * Navy heading, Slate copy, slight hover lift.
 */
export default function ServiceCard({
  title,
  icon,
  iconDisplay,
  children,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconFrame}>
        <Image
          src={icon}
          alt=""
          width={1536}
          height={1024}
          sizes="256px"
          className={styles.icon}
          style={{
            width: `${iconDisplay.width}px`,
            left: `${iconDisplay.left}px`,
            top: `${iconDisplay.top}px`,
          }}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
