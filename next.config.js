/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.harvard.edu',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 