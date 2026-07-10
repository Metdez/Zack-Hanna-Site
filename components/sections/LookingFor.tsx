import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";

export default function LookingFor() {
  return (
    <section id="looking-for" className="relative px-6 sm:px-8 md:px-12 lg:px-20 pt-12 sm:pt-16 md:pt-24 pb-24 sm:pb-32 md:pb-56">
      <div className="max-w-5xl mx-auto space-y-16">
        <Reveal>
          <SectionLabel index="04">What I&apos;m Looking For</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className="font-display font-light leading-[1.1] tracking-[-0.02em] text-pearl break-words"
            style={{
              fontSize: "clamp(1.5rem, 5.5vw, 3.75rem)",
              fontVariationSettings: '"opsz" 96, "SOFT" 50',
            }}
          >
            Open to roles in{" "}
            <span className="text-accent italic pr-[0.15em]">AI strategy</span>
            , forward-deployed engineering, AI consulting, or solutions
            architecture — helping a company figure out where AI fits into
            their operations, what to adopt, how to deploy it, and how to get
            teams actually using it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
