import { openui } from '@openui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx}',
    './pages/**/*.{md,mdx}',
    './theme.config.js',
    './node_modules/@openui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { },
  },
  plugins: [openui()],
}
