import type { MetadataRoute } from "next";

// Next.js 16 native metadata route — generates /sitemap.xml at build time.
// The homepage is the primary indexable route today, with the resume PDF added
// as a second crawl target so search engines can discover it directly.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.zackhanna.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      images: [`${base}/zack.jpg`],
    },
    {
      url: `${base}/resume.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
