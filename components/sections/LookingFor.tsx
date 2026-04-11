import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";

export default function LookingFor() {
  return (
    <section id="looking-for" className="relative px-6 md:px-12 lg:px-20 py-32 md:py-56">
      <div className="max-w-5xl mx-auto space-y-16">
        <Reveal>
          <SectionLabel index="04">What I&apos;m Looking For</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className="font-display font-light leading-[1.1] tracking-[-0.02em] text-pearl"
            style={{
              fontSize: "clamp(1.875rem, 4.2vw, 3.75rem)",
              fontVariationSettings: '"opsz" 96, "SOFT" 50',
            }}
          >
            An AI strategy role for{" "}
            <span className="text-accent italic">Summer 2026</span> where I
            help a company figure out where AI fits into their operations —
            what to adopt, how to govern it, how to measure whether it&apos;s
            working, and how to get teams actually using it.{" "}
            <span className="text-pearl/60">
              I want to learn how experienced leaders think about
              enterprise-wide AI transformation.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
