/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    unoptimized:true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  // ... existing config options ...
}

module.exports = nextConfig