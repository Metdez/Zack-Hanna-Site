"use client";

import posthog from "posthog-js";

type PortfolioEvent =
  | "portfolio_cta_clicked"
  | "portfolio_project_link_clicked"
  | "portfolio_resume_interacted"
  | "portfolio_section_navigated";

type PortfolioEventProperties = Record<string, string>;

/**
 * Captures the handful of actions that represent genuine portfolio intent.
 * These properties deliberately describe the site interaction only: never a
 * visitor's form input, email address, or other personal data.
 */
export function capturePortfolioEvent(
  event: PortfolioEvent,
  properties: PortfolioEventProperties,
) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;

  posthog.capture(event, properties);
}
