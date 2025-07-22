/** @type {import('next').NextConfig} */


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'github.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});
// Gabungkan semua konfigurasi: MDX -> PWA -> Next
module.exports = withPWA(withMDX(nextConfig));
