"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";

const NAME = "ZACK HANNA";

export default function Hero() {
  const lenis = useLenis();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -40, duration: 1.6 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.4em] text-ash uppercase flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <span className="h-px w-6 sm:w-10 bg-accent" />
            <span>Sophomore · Builder · AI Strategist</span>
          </motion.div>

          <h1
            className="font-display font-light leading-[0.9] tracking-[-0.01em] md:tracking-[-0.03em] text-pearl md:whitespace-nowrap break-words"
            style={{ fontSize: "clamp(2.25rem, 12vw, 9rem)" }}
          >
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block ${char === " " ? "w-[0.4em]" : ""}`}
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1',
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2 + NAME.length * 0.05 + 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl text-lg md:text-xl text-pearl/75 leading-relaxed font-light"
          >
            I build software that solves business problems — and I&apos;m looking
            for an AI strategy role this summer where I can help a company
            operationalize AI across its operations.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2 + NAME.length * 0.05 + 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap items-center gap-4"
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
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-3 flex md:justify-end"
        >
          <div className="relative group w-48 sm:w-56 md:w-full md:max-w-[260px]">
            {/* Accent frame */}
            <motion.div
              className="absolute -inset-2 border border-accent/30"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
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
        </motion.div>
      </div>

      {/* Scroll hint (clickable) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] text-ash uppercase"
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
      </motion.div>
    </section>
  );
}
