import Reveal from "../Reveal";
import ResumeViewer from "../ResumeViewer";
import SectionLabel from "../SectionLabel";

export default function Contact() {
  const rows = [
    {
      label: "Book a Call",
      value: "calendly.com/zh-licom/30min",
      placeholder: false,
      href: "https://calendly.com/zh-licom/30min",
    },
    {
      label: "Email",
      value: "zh@licom.ai",
      placeholder: false,
      href: "mailto:zh@licom.ai",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/zackary-hanna",
      placeholder: false,
      href: "https://www.linkedin.com/in/zackary-hanna-515138331/",
    },
    {
      label: "Website",
      value: "licom.ai",
      placeholder: false,
      href: "https://licom.ai",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24 md:py-48 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <SectionLabel index="06">Contact</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="mt-12 font-display font-light leading-[0.85] tracking-[-0.04em] text-pearl break-words hyphens-auto"
            style={{
              fontSize: "clamp(3rem, 14vw, 14rem)",
              fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1',
            }}
          >
            Let&apos;s talk.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 md:mt-20 max-w-4xl">
            <ResumeViewer />
          </div>
        </Reveal>

        <div className="mt-20 md:mt-32 max-w-3xl">
          {rows.map((row, i) => (
            <Reveal key={row.label} delay={0.2 + i * 0.1}>
              <div className="flex flex-col gap-2 sm:grid sm:grid-cols-12 sm:items-baseline sm:gap-4 py-6 border-t border-pearl/10 last:border-b">
                <div className="sm:col-span-3 md:col-span-2 font-mono text-[10px] tracking-[0.25em] text-ash uppercase">
                  {row.label}
                </div>
                <div className="sm:col-span-9 md:col-span-10 min-w-0">
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 font-display text-xl sm:text-2xl md:text-4xl text-pearl hover:text-accent transition-colors duration-500 focus-visible:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink rounded-sm break-all"
                    >
                      {row.value} →
                    </a>
                  ) : (
                    <span
                      className={`font-display text-xl sm:text-2xl md:text-4xl break-all ${
                        row.placeholder
                          ? "text-accent/70 italic border-b border-dashed border-accent/40"
                          : "text-pearl"
                      }`}
                    >
                      {row.value}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] tracking-[0.25em] text-ash uppercase">
        <span>© 2026 Zack Hanna</span>
        <span>Liquid Obsidian — v1.0</span>
      </div>
    </section>
  );
}
