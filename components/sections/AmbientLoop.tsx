"use client";

export default function AmbientLoop() {
  return (
    <section
      id="ambient-loop"
      className="relative w-screen left-1/2 -translate-x-1/2 h-screen overflow-hidden motion-reduce:hidden"
    >
      {/* Fullscreen video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/ambient-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Top + bottom ink washes — fuse edges into surrounding page */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/70 to-transparent pointer-events-none" />

      {/* Subtle overall wash to keep it moody and on-brand */}
      <div className="absolute inset-0 bg-ink/20 pointer-events-none" />

    </section>
  );
}
