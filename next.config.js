/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.scum.art",
      },
    ],
  },
  env: {
    CLOUDFLARE_STORAGE: "https://images.scum.art",
  },
};

module.exports = nextConfig;
