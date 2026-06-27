import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Stamp the build/deploy date so the footer "Last updated" auto-updates on each build.
  env: {
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString(),
  },
  images: {
    unoptimized: true,
  },
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.bib$/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
