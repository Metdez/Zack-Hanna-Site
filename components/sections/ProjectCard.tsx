"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-12 gap-6 md:gap-10 items-center"
    >
      {/* Screenshot */}
      <div
        className={`col-span-12 md:col-span-7 ${
          isEven ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-6"
        }`}
      >
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-pearl/8 ${
            project.image ? "fluid-panel fluid-media-shell" : "shimmer"
          }`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className={`object-cover ${project.imagePosition ?? "object-left"}`}
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-mist/40 to-transparent" />
              <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.25em] text-ash uppercase">
                Screenshot — TBD
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.25em] text-ash/60 uppercase">
                16 : 10
              </div>
            </>
          )}
          {/* Corner accent — scaleX is composite-only (no layout/paint) */}
          <motion.div
            className="absolute bottom-0 left-0 h-px w-full bg-accent z-10 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`col-span-12 md:col-span-5 space-y-5 ${
          isEven ? "md:order-2" : "md:order-1 md:col-start-1"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.25em] text-ash">
            0{index + 1}
          </span>
          <span className="h-px w-6 bg-ash/40" />
          <span className="font-mono text-[9px] tracking-[0.25em] text-accent uppercase border border-accent/40 px-2 py-0.5">
            {project.status}
          </span>
        </div>
        <h3
          className="font-display font-light text-pearl leading-[1] tracking-[-0.02em]"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
            fontVariationSettings: '"opsz" 72, "SOFT" 30',
          }}
        >
          {project.name}
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-pearl/70 font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {project.link && (
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-pearl border border-pearl/20 px-4 py-2.5 transition-all duration-500 hover:border-accent hover:text-accent hover:bg-accent/5 focus-visible:outline-none focus-visible:border-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <span>{project.link}</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          )}
          {project.download && (
            <a
              href={project.download.href}
              download
              className="inline-flex cursor-pointer items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-accent border border-accent/40 px-4 py-2.5 transition-all duration-500 hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <span>{project.download.label}</span>
              <span aria-hidden="true">↓</span>
            </a>
          )}
          {project.secondaryLink && (
            <a
              href={project.secondaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-pearl border border-pearl/20 px-4 py-2.5 transition-all duration-500 hover:border-accent hover:text-accent hover:bg-accent/5 focus-visible:outline-none focus-visible:border-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <span>{project.secondaryLink.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        {project.download?.note && (
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ash/70">
            {project.download.note}
          </p>
        )}
      </div>
    </motion.article>
  );
}
