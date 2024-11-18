/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,  // Optional: Adds trailing slashes to URLs
  images: {
    unoptimized: true,  // Disables image optimization
  },
  basePath: '/dutyuzh.github.io', // Adjust to the name of your repository
  assetPrefix: '/dutyuzh.github.io/', // Ensure all static assets use the correct base URL
}

module.exports = nextConfig
