import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: [
      "api.microlink.io",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
