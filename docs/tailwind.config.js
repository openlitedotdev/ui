import { openui } from '@openlite/ui/tailwind'
import { createPreset } from 'fumadocs-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx,js,jsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './node_modules/@openlite/ui/dist/**/*.{js,ts,tsx,mdx}',
  ],
  presets: [createPreset()],
  plugins: [openui()],
}
