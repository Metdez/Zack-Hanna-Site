import type { MetadataRoute } from "next";

// Next.js 16 native metadata route — generates /manifest.webmanifest at build.
// Backend-only: browsers read this for install prompts, theme color, and
// app identity; it never affects rendered layout. Colors match the site's
// design tokens in app/globals.css (--ink / --pearl).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zack Hanna — Builder, Founder, AI Strategist",
    short_name: "Zack Hanna",
    description:
      "Portfolio of Zack Hanna — builder, founder, and AI strategist. Founder of Licom AI. Seeking a Summer 2026 AI strategy role.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "en-US",
    categories: ["portfolio", "business", "technology"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
