"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import LookingForSpec from "../LookingForSpec";

const NAME = "ZACK HANNA";

export default function Hero() {
  const lenis = useLenis();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -40, duration: 1.6 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  // Delay offsets mirror the previous motion timings so the visual cadence
  // is unchanged. Kept as constants for readability.
  const NAME_DONE = 0.2 + NAME.length * 0.05;

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 py-10 pt-24 sm:pt-28">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] text-ash uppercase">
        <span>Portfolio · 2026</span>
        <span>v1.0</span>
      </div>

      {/* Center grid: text + portrait */}
      <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="col-span-12 md:col-span-9 flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="hero-reveal font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.4em] text-ash uppercase flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="h-px w-6 sm:w-10 bg-accent" />
            <span>Sophomore · Builder · AI Strategist</span>
          </div>

          <h1
            className="font-display font-light leading-[0.9] tracking-[-0.01em] md:tracking-[-0.03em] text-pearl md:whitespace-nowrap break-words"
            style={{ fontSize: "clamp(2.25rem, 12vw, 9rem)" }}
          >
            {NAME.split("").map((char, i) => (
              <span
                key={i}
                className={`hero-char ${char === " " ? "w-[0.4em]" : ""}`}
                style={{
                  animationDelay: `${0.2 + i * 0.05}s`,
                  fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1',
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p
            className="hero-reveal max-w-2xl text-lg md:text-xl text-pearl/75 leading-relaxed font-light"
            style={{ animationDelay: `${NAME_DONE + 0.2}s` }}
          >
            I build software that solves business problems — and I&apos;m looking
            for an AI strategy role this summer where I can help a company
            operationalize AI across its operations.
          </p>

          {/* Primary CTAs */}
          <div
            className="hero-reveal flex flex-wrap items-center gap-4"
            style={{ animationDelay: `${NAME_DONE + 0.45}s` }}
          >
            <button
              type="button"
              onClick={() => scrollTo("built")}
              className="group inline-flex min-h-[44px] cursor-pointer items-center gap-3 border border-accent bg-accent/10 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-accent transition-all duration-500 hover:bg-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <span>View work</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>
            <a
              href="https://calendly.com/zh-licom/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] cursor-pointer items-center gap-3 border border-pearl/20 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-pearl transition-all duration-500 hover:border-pearl hover:bg-pearl/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pearl focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <span>Book a call</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div
            className="hero-reveal"
            style={{ animationDelay: `${NAME_DONE + 0.7}s` }}
          >
            <LookingForSpec />
          </div>
        </div>

        {/* Portrait */}
        <div
          className="hero-reveal-lg col-span-12 md:col-span-3 flex flex-col items-center md:items-end gap-4"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative group w-48 sm:w-56 md:w-full md:max-w-[260px]">
            {/* Accent frame */}
            <div
              className="hero-frame absolute -inset-2 border border-accent/30"
              style={{ animationDelay: "1.4s" }}
            />
            <div className="relative aspect-square w-full overflow-hidden fluid-panel fluid-media-shell">
              <Image
                src="/zack.jpg"
                alt="Zack Hanna"
                fill
                priority
                sizes="(max-width: 768px) 224px, 320px"
                className="object-cover"
              />
              {/* Soft black wash to fuse into bg */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
              {/* Bottom mono caption */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-pearl/80 uppercase">
                <span>Zack Hanna</span>
                <span className="text-accent">2026</span>
              </div>
            </div>
          </div>
          {/* LinkedIn button */}
          <a
            href="https://www.linkedin.com/in/zackary-hanna-515138331/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zack Hanna on LinkedIn"
            className="group inline-flex min-h-[44px] items-center gap-2 border border-pearl/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-pearl transition-all duration-500 hover:border-accent hover:text-accent hover:bg-accent/5 focus-visible:outline-none focus-visible:border-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.78 13.019H3.555V9h3.562v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Scroll hint (clickable) */}
      <div
        className="hero-fade flex items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] text-ash uppercase"
        style={{ animationDelay: "2s" }}
      >
        <button
          type="button"
          onClick={() => scrollTo("what-i-do")}
          aria-label="Scroll to next section"
          className="group flex cursor-pointer items-center gap-3 px-1 py-1 transition-colors duration-500 hover:text-pearl focus-visible:text-pearl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent"
          >
            ↓
          </motion.span>
        </button>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-accent to-transparent"
          aria-hidden
        />
        <span>06 sections</span>
      </div>
    </section>
  );
}
