import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // TODO: Change to S3 (or other CDN) later
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/*.png',
      },
    ],
  },
  experimental: {
    typedEnv: true,
  },
}

export default nextConfig
