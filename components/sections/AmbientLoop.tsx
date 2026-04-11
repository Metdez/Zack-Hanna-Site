"use client";

export default function AmbientLoop() {
  return (
    <section
      id="ambient-loop"
      className="relative overflow-hidden motion-reduce:hidden w-screen left-1/2 -translate-x-1/2 py-10 md:py-0 md:h-[100svh]"
    >
      <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
        {/* Fullscreen video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/ambient-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />

        {/* Top + bottom ink washes — fuse edges into surrounding page */}
        <div className="absolute inset-x-0 top-0 h-20 md:h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-48 bg-gradient-to-t from-ink via-ink/70 to-transparent pointer-events-none" />

        {/* Subtle overall wash to keep it moody and on-brand */}
        <div className="absolute inset-0 bg-ink/20 pointer-events-none" />
      </div>
    </section>
  );
}
