/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // this tells Next.js to generate static files to export
  // images: {
  //   unoptimized: true, //disabled the build-in image optimization
  // },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}

module.exports = nextConfig
