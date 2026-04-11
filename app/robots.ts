import type { MetadataRoute } from "next";

// Next.js 16 native metadata route — generates /robots.txt at build time.
// Explicitly opts in answer-engine crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.)
// so Zack's portfolio can be discovered AND cited by LLM-based search.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // OpenAI / ChatGPT
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Google (AI Overviews / Gemini training)
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      // Anthropic / Claude
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Apple Intelligence
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Common Crawl (feeds many LLMs)
      { userAgent: "CCBot", allow: "/" },
      // Microsoft / Bing
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://zackhanna.com/sitemap.xml",
    host: "https://zackhanna.com",
  };
}
