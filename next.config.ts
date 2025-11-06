import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
