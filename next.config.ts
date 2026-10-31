import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "stilis.md", pathname: "/**" },
      { protocol: "https", hostname: "mobildor.md", pathname: "/**" },
      { protocol: "https", hostname: "bafimob-standard.md", pathname: "/**" },
      { protocol: "https", hostname: "www.crinela.md", pathname: "/**" },
      { protocol: "https", hostname: "crinela.md", pathname: "/**" },
      { protocol: "https", hostname: "www.yasen.md", pathname: "/**" },
      { protocol: "https", hostname: "yasen.md", pathname: "/**" },
      { protocol: "https", hostname: "bomba.md", pathname: "/**" },
      { protocol: "https", hostname: "www.bomba.md", pathname: "/**" },
      { protocol: "https", hostname: "ultra.md", pathname: "/**" },
      { protocol: "https", hostname: "www.ultra.md", pathname: "/**" },
      { protocol: "https", hostname: "eshop.ultra.md", pathname: "/**" },
      { protocol: "https", hostname: "cdn.ultra.md", pathname: "/**" },
      { protocol: "https", hostname: "images.bomba.md", pathname: "/**" },
    ],
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
