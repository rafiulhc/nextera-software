/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir is default in Next 13/14; keep here for clarity
  },
  output: 'standalone',
};

module.exports = nextConfig;
