import { react } from '@openui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx}',
    './pages/**/*.{md,mdx}',
    './theme.config.js',
    './node_modules/@openui-org/react/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { },
  },
  plugins: [react],
}
