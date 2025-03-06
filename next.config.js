/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/CoreyMcKay.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CoreyMcKay.github.io' : '',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  },
}

module.exports = nextConfig 