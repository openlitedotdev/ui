import { openui } from '@openui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.storybook/welcome.stories.mdx',
    './node_modules/@openui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [openui()],
}
