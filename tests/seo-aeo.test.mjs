import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const read = (relativePath) => readFileSync(join(root, relativePath), "utf8");

test("metadata and discovery files consistently use the www canonical host", () => {
  const layout = read("app/layout.tsx");
  const robots = read("app/robots.ts");
  const sitemap = read("app/sitemap.ts");
  const llms = read("public/llms.txt");

  assert.match(layout, /const SITE_URL = "https:\/\/www\.zackhanna\.com"/);
  assert.match(robots, /sitemap:\s*"https:\/\/www\.zackhanna\.com\/sitemap\.xml"/);
  assert.match(robots, /host:\s*"https:\/\/www\.zackhanna\.com"/);
  assert.match(sitemap, /const base = "https:\/\/www\.zackhanna\.com"/);

  for (const file of [layout, robots, sitemap, llms]) {
    assert.doesNotMatch(
      file,
      /https:\/\/zackhanna\.com(?!\/?["#\w-]*www)/,
      "expected non-www canonical URLs to be removed"
    );
  }
});

test("robots and sitemap expose the added crawl targets", () => {
  const robots = read("app/robots.ts");
  const sitemap = read("app/sitemap.ts");

  assert.match(robots, /userAgent:\s*"Claude-SearchBot"/);
  assert.match(robots, /userAgent:\s*"Claude-User"/);
  assert.match(sitemap, /url:\s*`\$\{base\}\/resume\.pdf`|url:\s*"https:\/\/www\.zackhanna\.com\/resume\.pdf"/);
});

test("layout schema graph includes richer profile and organization connections", () => {
  const layout = read("app/layout.tsx");

  assert.match(layout, /const ORGANIZATION_ID = `\$\{SITE_URL\}\/#organization`/);
  assert.match(layout, /mainEntityOfPage:\s*\{\s*"@id": `\$\{SITE_URL\}\/#profilepage`\s*\}/);
  assert.match(layout, /dateCreated:/);
  assert.match(layout, /dateModified:/);
  assert.match(layout, /"@type": "Organization"/);
  assert.match(layout, /worksFor:\s*\{\s*"@id": ORGANIZATION_ID\s*\}/);
});

test("navigation exposes crawlable hrefs for section discovery", () => {
  const nav = read("components/Nav.tsx");

  assert.match(nav, /import Link from "next\/link"/);
  assert.match(nav, /href=\{`\/#\$\{l\.id\}`\}/);
});
