import type { MetadataRoute } from "next";

// Next.js 16 native metadata route — generates /sitemap.xml at build time.
// Single-page portfolio: only the root URL is a real page. Anchor sections
// (#what-i-do, #built, etc.) are surfaced to answer engines via the
// ProfilePage `hasPart` JSON-LD graph in app/layout.tsx, not here —
// URL fragments aren't independently indexable sitemap entries.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zackhanna.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      images: [`${base}/zack.jpg`],
    },
  ];
}
