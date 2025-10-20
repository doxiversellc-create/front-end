import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doxiverse-server-production.up.railway.app",
        pathname: "/**", // allow all paths
      },
      {
        protocol: "https",
        hostname: "doxiverse-media.s3.amazonaws.com",
        pathname: "/**", // allow all paths
      },
      {
        protocol: "https",
        hostname: "doxiverse-media.s3.us-east-2.amazonaws.com",
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
