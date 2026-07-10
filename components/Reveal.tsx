"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: React.ReactNode;
  /** "up" fades upward; "scale" fades with a slight scale-in. */
  variant?: "up" | "scale";
  /** Stagger delay in ms, applied only to the entry transition. */
  delay?: number;
  /** Render element — "li" for grid/list items. */
  as?: "div" | "li";
  className?: string;
};

/**
 * Reveal — subtle scroll-entry animation (fade + rise/scale).
 * Content is server-rendered visible and only hidden after hydration,
 * and only when it is still below the viewport — so nothing is ever
 * lost without JavaScript and nothing already on screen flickers.
 * prefers-reduced-motion skips the animation entirely.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already at or above the viewport (e.g. restored scroll position):
    // leave it visible rather than animating content the user can see.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    styles.reveal,
    styles[variant],
    state === "hidden" ? styles.hidden : "",
    state === "shown" ? styles.shown : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
