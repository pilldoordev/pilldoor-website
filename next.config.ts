import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/patients",
        destination: "/family-care",
        permanent: true,
      },
      {
        source: "/pharmacies",
        destination: "/pharmacy-partners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

