import type { NextConfig } from "next";
import pwa from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  turbopack: {},
};

const withPWA = pwa({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});
export default withPWA(nextConfig);
