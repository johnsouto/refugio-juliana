import type { NextConfig } from "next";

const repo = "refugio-juliana";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // Só aplica no GitHub Pages (produção)
  ...(isProd
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;
