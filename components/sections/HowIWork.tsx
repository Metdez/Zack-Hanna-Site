import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative px-6 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 md:py-48">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <SectionLabel index="03">How I Work</SectionLabel>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8 space-y-12">
          <Reveal>
            <h2
              className="font-display font-light leading-[0.95] tracking-[-0.03em] text-pearl"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontVariationSettings: '"opsz" 96, "SOFT" 30',
              }}
            >
              How I work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-pearl/75 font-light max-w-3xl">
              I talk to the customer. I figure out what&apos;s broken. I
              prototype fast, build it, ship it, and iterate. I manage a small
              team — a developer and QA — and I use Claude Code, GitHub,
              Vercel, Supabase, and Cursor to move quickly.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
