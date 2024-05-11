import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects() {
    return [
      {
        source: '/components',
        destination: '/docs/components/accordion',
        permanent: true,
      },
      {
        source: '/docs/components',
        destination: '/docs/components/accordion',
        permanent: true,
      },
      {
        source: '/figma',
        destination: '/docs/figma',
        permanent: true,
      },
    ]
  },
}

export default withContentlayer(nextConfig)
