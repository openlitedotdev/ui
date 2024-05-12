const withContentlayer = require('next-contentlayer').withContentlayer

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@openui-org/react', '@openui-org/theme'],
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

module.exports = withContentlayer(nextConfig)
