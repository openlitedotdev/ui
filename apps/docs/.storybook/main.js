import { dirname, join, resolve } from 'node:path'

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config = {
  stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  core: {},

  // eslint-disable-next-line unused-imports/no-unused-vars
  async viteFinal(config, { configType }) {
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: 'react',
            replacement: resolve(__dirname, '../../../packages/react/'),
          },
        ],
      },
    }
  },

  docs: {
    autodocs: true,
  },
}

export default config
