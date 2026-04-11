"use client";

import { useEffect, useRef } from "react";
import Reveal from "../Reveal";

export default function OutroLoop() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Guarantee no audio regardless of browser state
    video.muted = true;
    video.volume = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.muted = true;
            video.volume = 0;
            void video.play().catch(() => {
              /* autoplay may be blocked — ignore */
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="outro-loop"
      className="relative w-screen left-1/2 -translate-x-1/2 h-screen overflow-hidden motion-reduce:hidden"
    >
      {/* Fullscreen video — plays only when in view, always silent */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/outro-loop.mp4"
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Taller top wash — fades out of the Contact section above */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-ink via-ink/70 to-transparent pointer-events-none" />

      {/* Subtle overall mood wash */}
      <div className="absolute inset-0 bg-ink/20 pointer-events-none" />

      {/* Top label strip */}
      <Reveal>
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 right-6 sm:right-10 flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-pearl/80 uppercase">
          <span className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            Fin
          </span>
          <span>No audio · ↺</span>
        </div>
      </Reveal>

      {/* Bottom caption */}
      <Reveal delay={0.2}>
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-pearl/70 uppercase">
          <span>End transmission</span>
          <span className="text-accent">2026 ↺</span>
        </div>
      </Reveal>
    </section>
  );
}
