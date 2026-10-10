import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/nextjs-vs-non-nextjs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
