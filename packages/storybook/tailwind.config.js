import { openui } from '@openui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.storybook/welcome.stories.mdx',
  ],
  darkMode: 'class',
  plugins: [openui()],
}
