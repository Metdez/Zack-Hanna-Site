import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <SectionLabel index="01">What I Do</SectionLabel>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8 space-y-10">
          <Reveal>
            <h2
              className="font-display font-light leading-[0.95] tracking-[-0.03em] text-pearl"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontVariationSettings: '"opsz" 96, "SOFT" 30',
              }}
            >
              What I do.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl leading-relaxed text-pearl/75 font-light max-w-3xl">
              I run <span className="text-pearl">Licom AI</span>, a consulting
              firm where we audit businesses, find the highest-ROI
              opportunities, and build the systems — whether that&apos;s custom
              software, AI agents, or full ERP platforms. I&apos;ve been doing
              this since my freshman year.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
