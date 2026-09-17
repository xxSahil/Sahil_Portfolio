import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use the current project folder as the root for tracing files and resolving modules.
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  webpack(config, { dev }) {
    if (dev) {
      // Poll once a second instead of opening thousands of file watchers.
      config.watchOptions = {
        // Spread preserves Next.js defaults before overriding the settings below.
        ...config.watchOptions,
        poll: 1000,
        // Combine rapid edits into one rebuild after a 300ms pause.
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.git/**", "**/.next/**"],
      };
    }

    return config;
  },
};

export default nextConfig;
