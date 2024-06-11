/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.slimes.xyz",
      },
    ],
  },
  env: {
    CLOUDFLARE_STORAGE: "https://images.slimes.xyz",
  },
};

module.exports = nextConfig;
