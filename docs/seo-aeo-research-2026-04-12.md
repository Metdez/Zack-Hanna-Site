# Zack Hanna SEO + AEO Research

Date: 2026-04-12

## Scope

Goal: improve Google visibility and increase the odds that Zack Hanna is surfaced or cited in AI systems like ChatGPT Search, Google AI Overviews/AI Mode, Bing/Copilot, and similar tools.

Constraint: do not change the homepage's visible design, layout, or current copy.

Allowed: technical SEO, metadata, schema, crawl/indexing operations, new support URLs, non-visual internal linking changes, off-site profile corroboration, and machine-readable assets.

## Method

- Ran 8 parallel research passes across Google SEO, structured data, AI crawler access, performance/rendering, information architecture, entity corroboration, search operations, and evidence-based AEO.
- Ran 1 separate synthesis pass to consolidate overlaps and sort the work by impact.
- Verified the live site directly with HTTP checks and HTML inspection.
- Prioritized official documentation. Anything not directly supported by vendor docs is labeled as inference.

## Executive Summary

- The clearest technical problem right now is canonical inconsistency: the live site redirects to `https://www.zackhanna.com/`, but the site's canonical URLs, schema URLs, sitemap, `robots.txt`, and `llms.txt` still publish the non-`www` host.
- The site already has a better AEO base than most portfolios: it ships SSR HTML, JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt`, and a live resume PDF.
- The biggest ceiling after canonical cleanup is URL architecture. A single homepage can rank, but it gives Google and AI systems very few stable, citeable targets beyond `/` and `/resume.pdf`.
- Structured data is worth tightening, but only to sharpen entity clarity and freshness. More schema is not automatically better.
- AI visibility still depends mostly on ordinary SEO fundamentals: crawlable URLs, consistent canonicals, indexable HTML, valid schema, bot access, and corroborating profiles.
- `llms.txt` is worth keeping, but it should be treated as a convenience layer, not a primary ranking or citation signal.

## What We Verified Live

### Production behavior

- `https://zackhanna.com` returns `307 Temporary Redirect` to `https://www.zackhanna.com/`.
- `https://www.zackhanna.com/` returns `200 OK`.
- `https://www.zackhanna.com/resume.pdf` returns `200 OK` with `application/pdf`.
- `https://www.zackhanna.com/llms.txt` returns `200 OK` with `text/plain`.

### Discovery and metadata conflicts

- Live `robots.txt` publishes `Host: https://zackhanna.com` and `Sitemap: https://zackhanna.com/sitemap.xml`.
- Live `sitemap.xml` uses non-`www` URLs.
- Live HTML canonical, author link, Open Graph URL, and social image URLs use non-`www`.
- Local code currently sets the base site URL to non-`www` in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, and `public/llms.txt`.

### Structural observations

- The homepage is already readable in initial HTML, which is good for Google rendering and indexing.
- The navigation uses JS scroll buttons instead of crawlable `<a href>` links in `components/Nav.tsx`.
- The current sitemap only exposes the homepage URL.
- The current JSON-LD graph is solid, but the Person/ProfilePage/Organization relationships can be tightened.

## Highest-Impact Fix

### 1. Normalize the canonical host everywhere

Category: canonicalization

Action:
- Pick `https://www.zackhanna.com/` as the single canonical host, since production already redirects there.
- Update every canonical signal to match that host:
  - `app/layout.tsx`
  - `app/robots.ts`
  - `app/sitemap.ts`
  - `public/llms.txt`
  - any JSON-LD `@id`, `url`, `image`, `og:url`, `twitter:image`, author URLs, and manifest/start URLs

Why it matters:
- This is the only issue in the current setup that is clearly wrong today.
- Conflicting host signals weaken URL consolidation, canonical selection, sitemap accuracy, and entity consistency.
- It is the cleanest technical fix available that requires zero visual change.

Visible homepage UI/copy impact: No

Confidence: Official

Key sources:
- Google canonicalization docs: <https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls>
- Google URL structure docs: <https://developers.google.com/search/docs/crawling-indexing/url-structure>

## Priority Recommendations

### 2. Regenerate truthful discovery files

Category: sitemap + robots

Action:
- Regenerate `robots.txt` and `sitemap.xml` so they reflect the `www` host.
- Keep the sitemap listed in `robots.txt`.
- Include every real canonical URL you want indexed, starting with:
  - `https://www.zackhanna.com/`
  - `https://www.zackhanna.com/resume.pdf`
  - any future support pages such as `/resume`, `/work`, `/about`, or project pages

Why it matters:
- Search engines use sitemaps as discovery hints.
- Right now the site's sitemap and robots file are real, but they are not truthful to the deployed canonical host.

Visible homepage UI/copy impact: No

Confidence: Official

Key sources:
- Google sitemap overview: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview>
- Google robots docs: <https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt>
- Bing sitemap guidance: <https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search>

### 3. Add real support URLs without changing the homepage

Category: information architecture

Action:
- Add support pages that give engines more than one citeable target:
  - `/resume`
  - `/work`
  - `/about` or `/bio`
  - strongest project or case-study pages
- Only create pages that have genuinely useful, unique, text-first content.

Why it matters:
- A single-page portfolio can rank, but it gives search and answer engines very few stable URLs to index, rank, or cite.
- Support pages are the best non-visual way to expand the crawl graph.

Visible homepage UI/copy impact: No

Confidence: Mixed

Key sources:
- Google link crawlability docs: <https://developers.google.com/search/docs/crawling-indexing/links-crawlable>
- Google URL structure docs: <https://developers.google.com/search/docs/crawling-indexing/url-structure>
- Google sitelinks docs: <https://developers.google.com/search/docs/appearance/sitelinks>

### 4. Make internal discovery crawlable

Category: internal linking

Action:
- Replace or augment JS-only scroll buttons in `components/Nav.tsx` with real `<a href>` links.
- If new support URLs are created, point the navigation or secondary links to those URLs.
- If the homepage keeps section links, anchors can stay for UX, but they should not be the only discovery path for important content.

Why it matters:
- Google can discover URLs through real links, not just JS button handlers.
- Hash fragments and scroll buttons are weaker than real URLs for discoverability.

Visible homepage UI/copy impact: No

Confidence: Official

Key sources:
- Google links and crawlability: <https://developers.google.com/search/docs/crawling-indexing/links-crawlable>
- Google JavaScript SEO basics: <https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics>

### 5. Tighten the entity graph

Category: structured data

Action:
- Keep the current graph, but tighten it:
  - add `ProfilePage.dateCreated`
  - add `ProfilePage.dateModified`
  - add `Person.mainEntityOfPage`
  - create a dedicated `Organization` node for Licom AI with a stable `@id`
  - point `Person.worksFor` to that Organization node
  - add `identifier`, `givenName`, `familyName`, `affiliation`, or `alumniOf` only if true
  - give each project `CreativeWork` a stable `@id`
  - add dates to project nodes where known

Why it matters:
- The current schema is already useful; this is about making Zack Hanna easier to reconcile as a person/entity across Google and AI systems.
- This is higher-confidence than inventing new schema types or stuffing markup.

Visible homepage UI/copy impact: No

Confidence: Mixed

Key sources:
- Google ProfilePage docs: <https://developers.google.com/search/docs/appearance/structured-data/profile-page>
- Google Organization docs: <https://developers.google.com/search/docs/appearance/structured-data/organization>
- Schema.org Person: <https://schema.org/Person>
- Schema.org ProfilePage: <https://schema.org/ProfilePage>

### 6. Verify the right AI crawlers are actually covered

Category: AI crawler access

Action:
- Keep `OAI-SearchBot` allowed.
- Add explicit allowances for `Claude-SearchBot` and `Claude-User`.
- Verify CDN/WAF/firewall rules do not block:
  - `OAI-SearchBot`
  - Googlebot
  - Bingbot
  - Applebot
  - already-allowed agents

Why it matters:
- OpenAI distinguishes ChatGPT search crawling from training bots.
- Anthropic now distinguishes general crawling from search/user retrieval.
- A bot name in `robots.txt` only helps if the bot can actually fetch the site.

Visible homepage UI/copy impact: No

Confidence: Mixed

Key sources:
- OpenAI bots docs: <https://developers.openai.com/api/docs/bots>
- Anthropic crawler docs: <https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler>

### 7. Treat Search Console and Bing Webmaster Tools as required ops

Category: search operations

Action:
- Verify the `www` property in Google Search Console.
- Import or verify the same property in Bing Webmaster Tools.
- Submit the corrected sitemap in both.
- Use post-deploy checks for:
  - canonical selection
  - index coverage
  - crawl stats
  - URL inspection
  - crawl errors and blocked resources

Why it matters:
- This is how you confirm whether fixes are being honored instead of guessing.
- It becomes especially important once new support URLs are added.

Visible homepage UI/copy impact: No

Confidence: Official

Key sources:
- Google Search Console start docs: <https://developers.google.com/search/docs/monitor-debug/search-console-start>
- Google recrawl docs: <https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl>
- Bing Webmaster setup: <https://blogs.bing.com/webmaster/June-2025/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility>

## Second Wave Actions

### Evidence pages

Action:
- Publish text-first proof pages for the strongest claims, projects, or outcomes.
- Good candidates:
  - strongest project summaries
  - a resume landing page
  - founder/about page
  - project proof pages or public case studies

Why it matters:
- AI systems need good source targets to cite.
- Right now the homepage and PDF are doing most of the heavy lifting.

Visible homepage UI/copy impact: No

Confidence: Inference

### Profile corroboration

Action:
- Normalize LinkedIn, GitHub, Calendly, and Licom AI profiles so they use:
  - the same canonical `www` homepage link
  - consistent name
  - consistent avatar/headshot
  - consistent role wording

Why it matters:
- Stronger entity corroboration usually helps search systems trust who the site represents.

Visible homepage UI/copy impact: No

Confidence: Inference

### Media/schema polish

Action:
- Add `ImageObject` for the profile image.
- Provide multiple aspect-ratio profile assets if available.
- Keep the resume PDF and primary portrait crawlable and stable.

Why it matters:
- This helps profile/entity reuse without touching the homepage design.

Visible homepage UI/copy impact: No

Confidence: Mixed

### Performance hygiene

Action:
- Keep important content in initial HTML.
- Optimize the likely LCP image.
- Reduce non-essential JS cost from animations, smooth scrolling, and the resume viewer where possible.
- Keep videos and below-the-fold media lightweight.

Why it matters:
- Core Web Vitals are directly ranking-related.
- Much of the rest is indirect, but still improves renderability and crawl reliability.

Visible homepage UI/copy impact: No

Confidence: Official

Key sources:
- Google Core Web Vitals: <https://developers.google.com/search/docs/appearance/core-web-vitals>
- Google page experience docs: <https://developers.google.com/search/docs/appearance/page-experience>

### IndexNow later, not first

Action:
- Add IndexNow only if the site starts shipping more URLs or updating more frequently.

Why it matters:
- It is more useful as a freshness workflow than as a first-order fix for a mostly static single-page site.

Visible homepage UI/copy impact: No

Confidence: Mixed

Key sources:
- IndexNow overview: <https://www.bing.com/indexnow>
- Bing setup guidance: <https://www.bing.com/indexnow/IndexNowView/IndexNowGetStartedView>

## Do Not Overclaim

- `llms.txt` is not an official Google, OpenAI, Anthropic, or Microsoft guarantee for indexing or citation.
- Allowing bots in `robots.txt` does not guarantee crawling, indexing, ranking, or AI citation.
- Canonicals, sitemaps, and IndexNow are hints and signals, not commands that engines must obey.
- There is no special AI-only markup that reliably forces appearance in Google AI Overviews, ChatGPT Search, or Bing/Copilot.
- More schema is not automatically better. Inaccurate `sameAs`, fake `SearchAction`, or false identifiers can weaken trust.
- Google Indexing API is not the right tool for a normal personal portfolio site.

## Best Current Opportunities

If the goal is highest ROI with zero homepage redesign, the strongest order is:

1. Fix the `www` vs non-`www` canonical conflict.
2. Regenerate truthful `robots.txt`, `sitemap.xml`, schema URLs, and `llms.txt`.
3. Verify everything in Search Console and Bing Webmaster Tools.
4. Add support URLs that give search and AI systems citeable destinations beyond the homepage.
5. Tighten the entity graph and off-site profile corroboration.

## Local Files Most Relevant To The Fixes

- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `public/llms.txt`
- `components/Nav.tsx`

## Source Appendix

### Google

- AI features and AI Mode: <https://developers.google.com/search/docs/appearance/ai-features>
- Technical requirements: <https://developers.google.com/search/docs/essentials/technical>
- Canonicalization: <https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls>
- URL structure: <https://developers.google.com/search/docs/crawling-indexing/url-structure>
- Link crawlability: <https://developers.google.com/search/docs/crawling-indexing/links-crawlable>
- JavaScript SEO basics: <https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics>
- Sitemap overview: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview>
- Robots docs: <https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt>
- Search Console start: <https://developers.google.com/search/docs/monitor-debug/search-console-start>
- Ask Google to recrawl: <https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl>
- ProfilePage structured data: <https://developers.google.com/search/docs/appearance/structured-data/profile-page>
- Organization structured data: <https://developers.google.com/search/docs/appearance/structured-data/organization>
- Structured data policies: <https://developers.google.com/search/docs/appearance/structured-data/sd-policies>
- Sitelinks: <https://developers.google.com/search/docs/appearance/sitelinks>
- Indexable file types: <https://developers.google.com/search/docs/crawling-indexing/indexable-file-types>
- Core Web Vitals: <https://developers.google.com/search/docs/appearance/core-web-vitals>
- Page experience: <https://developers.google.com/search/docs/appearance/page-experience>

### OpenAI

- Bots and crawlers: <https://developers.openai.com/api/docs/bots>

### Anthropic

- Crawler docs: <https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler>

### Bing / Microsoft

- Bing Webmaster Tools visibility: <https://blogs.bing.com/webmaster/June-2025/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility>
- Bing sitemap guidance for AI-powered search: <https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search>
- IndexNow: <https://www.bing.com/indexnow>
- IndexNow setup: <https://www.bing.com/indexnow/IndexNowView/IndexNowGetStartedView>

### Schema.org

- Person: <https://schema.org/Person>
- ProfilePage: <https://schema.org/ProfilePage>
- CreativeWork: <https://schema.org/CreativeWork>
