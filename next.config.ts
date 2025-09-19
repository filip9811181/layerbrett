import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  output: "export",
  distDir: "build",
};

export default nextConfig;
