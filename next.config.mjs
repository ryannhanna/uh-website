/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/uh-website',
  assetPrefix: '/uh-website/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
