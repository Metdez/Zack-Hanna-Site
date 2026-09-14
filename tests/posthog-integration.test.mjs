import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const read = (relativePath) => readFileSync(join(root, relativePath), "utf8");

test("PostHog initializes from public environment configuration", () => {
  assert.equal(
    existsSync(join(root, "instrumentation-client.ts")),
    true,
    "expected the App Router client instrumentation entry point",
  );

  const instrumentation = read("instrumentation-client.ts");

  assert.match(instrumentation, /import posthog from "posthog-js"/);
  assert.match(instrumentation, /NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN/);
  assert.match(instrumentation, /if \(projectToken\)/);
  assert.match(instrumentation, /posthog\.init\(projectToken,/);
  assert.match(instrumentation, /api_host:\s*process\.env\.NEXT_PUBLIC_POSTHOG_HOST/);
  assert.match(instrumentation, /ui_host:\s*process\.env\.NEXT_PUBLIC_POSTHOG_UI_HOST/);
  assert.match(instrumentation, /defaults:\s*"2026-05-30"/);
});

test("PostHog enables the installed web product capabilities", () => {
  const instrumentation = read("instrumentation-client.ts");

  for (const option of [
    'capture_pageview: "history_change"',
    "capture_pageleave: true",
    "autocapture: true",
    "capture_exceptions: true",
    "disable_session_recording: false",
    'person_profiles: "identified_only"',
  ]) {
    assert.ok(instrumentation.includes(option), `missing ${option}`);
  }
});

test("PostHog requests are served through a first-party proxy path", () => {
  const nextConfig = read("next.config.ts");

  assert.match(nextConfig, /skipTrailingSlashRedirect:\s*true/);
  assert.match(nextConfig, /source:\s*"\/moss\/static\/:path\*"/);
  assert.match(nextConfig, /source:\s*"\/moss\/array\/:path\*"/);
  assert.match(nextConfig, /source:\s*"\/moss\/:path\*"/);
  assert.match(nextConfig, /us-assets\.i\.posthog\.com/);
  assert.match(nextConfig, /us\.i\.posthog\.com/);
});

test("the checked-in PostHog environment template is safe to share", () => {
  assert.equal(existsSync(join(root, ".env.example")), true);

  const envExample = read(".env.example");

  assert.match(envExample, /NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_your_project_token/);
  assert.match(envExample, /NEXT_PUBLIC_POSTHOG_HOST=\/moss/);
  assert.match(envExample, /NEXT_PUBLIC_POSTHOG_UI_HOST=https:\/\/us\.posthog\.com/);
  assert.match(envExample, /POSTHOG_INGEST_HOST=https:\/\/us\.i\.posthog\.com/);
  assert.doesNotMatch(envExample, /phc_[A-Za-z0-9]{20,}/);
});

test("high-intent portfolio interactions are captured without PII", () => {
  const analytics = read("lib/portfolio-analytics.ts");
  const hero = read("components/sections/Hero.tsx");
  const navigation = read("components/Nav.tsx");
  const projectCard = read("components/sections/ProjectCard.tsx");
  const resumeViewer = read("components/ResumeViewer.tsx");
  const contact = read("components/sections/Contact.tsx");

  assert.match(analytics, /posthog\.capture\(event,/);
  assert.match(analytics, /portfolio_cta_clicked/);
  assert.match(analytics, /portfolio_section_navigated/);
  assert.match(analytics, /portfolio_project_link_clicked/);
  assert.match(analytics, /portfolio_resume_interacted/);

  for (const source of [hero, navigation, projectCard, resumeViewer]) {
    assert.match(source, /capturePortfolioEvent/);
  }

  assert.match(contact, /data-ph-capture-attribute-portfolio-cta/);
  assert.doesNotMatch(analytics, /\b(email|mailto|linkedin_url)\s*:/i);
});
