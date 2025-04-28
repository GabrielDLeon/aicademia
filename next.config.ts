import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "urnfpvprkcyyxfphqeln.supabase.co",
      },
    ],
  },
};

export default nextConfig;
