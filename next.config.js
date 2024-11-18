/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,  // Optional: Adds trailing slashes to URLs
  images: {
    unoptimized: true,  // Disables image optimization
  },
  basePath: '', // Repository name or base path for the deployment
  assetPrefix: '', // Don't add another prefix here
}

module.exports = nextConfig
