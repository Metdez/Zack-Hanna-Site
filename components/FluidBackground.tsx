"use client";

import { motion, useReducedMotion } from "motion/react";

type BackgroundMass = {
  className: string;
  gradient: string;
  blurOffset: number;
  animate: {
    x: number[];
    y: number[];
  };
  duration: number;
  delay?: number;
};

const backgroundMasses: BackgroundMass[] = [
  {
    className: "-top-[18%] -left-[16%] h-[72vmax] w-[72vmax]",
    gradient:
      "radial-gradient(circle at 35% 35%, var(--fluid-smoke) 0%, rgba(0, 0, 0, 0) 64%)",
    blurOffset: 0,
    animate: {
      x: [0, 60, -20, 0],
      y: [0, -48, 20, 0],
    },
    duration: 38,
  },
  {
    className: "top-[6%] right-[-18%] h-[76vmax] w-[76vmax]",
    gradient:
      "radial-gradient(circle at 45% 45%, var(--fluid-graphite) 0%, rgba(0, 0, 0, 0) 62%)",
    blurOffset: 12,
    animate: {
      x: [0, -78, 36, 0],
      y: [0, 56, -28, 0],
    },
    duration: 46,
    delay: -8,
  },
];

export default function FluidBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "var(--fluid-base)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "var(--fluid-depth), radial-gradient(90% 70% at 82% 10%, rgba(104, 114, 128, 0.12) 0%, rgba(104, 114, 128, 0) 62%)",
        }}
      />

      {!shouldReduceMotion &&
        backgroundMasses.map((mass) => (
          <motion.div
            key={mass.className}
            className={`absolute rounded-full ${mass.className}`}
            style={{
              background: mass.gradient,
              filter:
                mass.blurOffset === 0
                  ? "blur(var(--fluid-blob-blur))"
                  : `blur(calc(var(--fluid-blob-blur) + ${mass.blurOffset}px))`,
              willChange: "transform",
            }}
            animate={mass.animate}
            transition={{
              duration: mass.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: mass.delay ?? 0,
            }}
          />
        ))}

      {shouldReduceMotion &&
        backgroundMasses.map((mass) => (
          <div
            key={mass.className}
            className={`absolute rounded-full ${mass.className}`}
            style={{
              background: mass.gradient,
              filter:
                mass.blurOffset === 0
                  ? "blur(var(--fluid-blob-blur))"
                  : `blur(calc(var(--fluid-blob-blur) + ${mass.blurOffset}px))`,
            }}
          />
        ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 36% at 50% 0%, var(--fluid-gloss) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 38%, rgba(0, 0, 0, var(--fluid-vignette-strength)) 100%)",
        }}
      />
    </div>
  );
}
