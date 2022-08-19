/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
}

module.exports = nextConfig










