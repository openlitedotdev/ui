import { openui } from '@openlabs/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.storybook/welcome.stories.mdx',
    './node_modules/@openlabs/theme/dist/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [openui()],
}
