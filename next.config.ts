import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [60, 70, 75],
  },
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bestdigitalmarket.in" }],
        destination: "https://www.bestdigitalmarket.in/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.bestdigitalmarket.in" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://www.bestdigitalmarket.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
