/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
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
