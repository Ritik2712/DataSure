/** @type {import('next').NextConfig} */
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

module.exports = nextConfig;
