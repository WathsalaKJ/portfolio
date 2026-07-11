import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up a
  // stray package-lock.json in the parent (home) directory.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
