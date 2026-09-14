import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (projectToken) {
  posthog.init(projectToken, {
    // /moss is routed to the regional PostHog ingestion endpoint in next.config.ts.
    // Keeping this first-party helps keep events, replays, flags, and surveys
    // available to visitors who use common tracking blockers.
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "/moss",
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST ?? "https://us.posthog.com",
    defaults: "2026-05-30",

    // Product analytics, Web Analytics, heatmaps, and key engagement signals.
    autocapture: true,
    capture_pageview: "history_change",
    capture_pageleave: true,

    // Error Tracking and Session Replay. PostHog masks input values by default.
    capture_exceptions: true,
    disable_session_recording: false,

    // This public portfolio has no authenticated users, so leave visitors
    // anonymous unless the site later gains a genuine, stable account ID.
    person_profiles: "identified_only",
  });
}
