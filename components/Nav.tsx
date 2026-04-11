"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const links = [
  { id: "what-i-do", label: "What I Do", index: "01" },
  { id: "built", label: "Built", index: "02" },
  { id: "how-i-work", label: "How I Work", index: "03" },
  { id: "looking-for", label: "Looking For", index: "04" },
  { id: "about", label: "About", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];

export default function Nav() {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -40, duration: 1.6 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "fluid-nav-surface border-b border-pearl/8"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <button
          onClick={() => {
            if (lenis) lenis.scrollTo(0, { duration: 1.6 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          type="button"
          aria-label="Scroll to top"
          className="cursor-pointer font-display text-xl tracking-[-0.02em] text-pearl hover:text-accent transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
          style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1' }}
        >
          Zack Hanna
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => go(l.id)}
                className="group relative cursor-pointer px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-ash uppercase hover:text-pearl transition-colors duration-500 focus-visible:text-pearl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
              >
                <span className="text-accent/50 mr-2 group-hover:text-accent transition-colors duration-500">
                  {l.index}
                </span>
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] p-3 -mr-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
        >
          <span
            className={`h-px w-6 bg-pearl transition-transform duration-500 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-pearl transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-pearl transition-transform duration-500 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <ul className="px-6 pb-8 pt-2 space-y-1 border-t border-pearl/8 fluid-nav-surface">
          {links.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => go(l.id)}
                className="w-full min-h-[56px] flex items-baseline justify-between py-4 border-b border-pearl/5 group cursor-pointer focus-visible:outline-none focus-visible:bg-pearl/5 rounded-sm"
              >
                <span className="font-mono text-[10px] tracking-[0.25em] text-accent/60">
                  {l.index}
                </span>
                <span
                  className="font-display text-2xl sm:text-3xl text-pearl group-hover:text-accent transition-colors duration-500"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 30' }}
                >
                  {l.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
