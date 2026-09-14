import type { NextConfig } from "next";
import path from "path";

const posthogIngestHost =
  process.env.POSTHOG_INGEST_HOST ?? "https://us.i.posthog.com";
const posthogAssetsHost =
  process.env.POSTHOG_ASSETS_HOST ?? "https://us-assets.i.posthog.com";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // PostHog capture endpoints include trailing slashes. Keeping them intact is
  // required for reliable events, flags, session recordings, and SDK assets.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/moss/static/:path*",
        destination: `${posthogAssetsHost}/static/:path*`,
      },
      {
        source: "/moss/array/:path*",
        destination: `${posthogAssetsHost}/array/:path*`,
      },
      {
        source: "/moss/:path*",
        destination: `${posthogIngestHost}/:path*`,
      },
    ];
  },
};

export default nextConfig;
