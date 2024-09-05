import createMDX from 'fumadocs-mdx/config'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: { remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos' }] },
}

export default withMDX(config)
