"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealTag = "div" | "section" | "p" | "span" | "h1" | "h2" | "h3";

/**
 * Scroll-reveal wrapper. Uses native IntersectionObserver + CSS class
 * toggle instead of Framer Motion so that content is always visible in
 * the SSR HTML (no initial opacity:0), which prevents the "all black"
 * symptom when Motion's client-side animation chain doesn't complete.
 *
 * Without JS: content visible (no classes applied → browser defaults).
 * With JS:    IO adds .reveal-hidden when below fold, then .reveal-shown
 *             when the element enters the viewport → CSS transition plays.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-shown");
          observer.disconnect();
        } else {
          // Below the fold — hide so we can animate it in on scroll
          el.classList.add("reveal-hidden");
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Polymorphic tag — TypeScript can't narrow the ref type for dynamic tags
  const El = Tag as React.ElementType;

  return (
    <El
      ref={ref}
      className={className}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </El>
  );
}
