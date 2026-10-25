import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep development output separate so `next build` cannot overwrite a
  // running dev server's manifests and webpack bundles.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  // Pin the workspace root to this project so Next doesn't pick up a
  // stray package-lock.json in the parent (home) directory.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
