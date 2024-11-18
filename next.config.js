/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,  // Optional: Adds trailing slashes to URLs
  images: {
    unoptimized: true,  // Disables image optimization
  },
}

module.exports = nextConfig
