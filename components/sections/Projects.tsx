import { projects } from "@/lib/projects";
import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="built" className="relative px-6 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 md:py-48">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-24 md:mb-36">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <SectionLabel index="02">What I&apos;ve Built</SectionLabel>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2
                className="font-display font-light leading-[0.95] tracking-[-0.03em] text-pearl"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                  fontVariationSettings: '"opsz" 96, "SOFT" 30',
                }}
              >
                What I&apos;ve built.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="space-y-24 sm:space-y-32 md:space-y-44">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
