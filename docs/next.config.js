const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
})

module.exports = withNextra({
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'en-US',
  },
  redirects: () => {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        statusCode: 301,
      },
    ]
  },
  reactStrictMode: true,
})
