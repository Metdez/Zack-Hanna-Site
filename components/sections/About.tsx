import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";

export default function About() {
  return (
    <section id="about" className="relative px-6 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 md:py-48">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <SectionLabel index="05">About Me</SectionLabel>
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
              About me.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-pearl/75 font-light max-w-3xl">
              Sophomore at{" "}
              <span className="text-accent">Hobart and William Smith</span>.
              I founded Licom AI and have spent the last year building real
              software for real companies — from full ERP systems to AI
              chatbot integrations. I manage a small dev team, close my own
              deals, and operate like a founder. This summer I want to pair
              that experience with corporate mentorship and learn how
              experienced leaders think about strategy at scale.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
