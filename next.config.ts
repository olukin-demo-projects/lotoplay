import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://zra0j6cq7i.ufs.sh/**')],
  },
};

export default nextConfig;
