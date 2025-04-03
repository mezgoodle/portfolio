import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if your images are served over HTTP (not recommended)
        hostname: "*.supabase.co",
        port: "", // Leave empty if you don't have a custom port
        pathname: "/**", // Allow any path on this hostname
      },
    ],
  },
};

export default nextConfig;
