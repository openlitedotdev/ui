import { react } from '@openui-org/react/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./stories/**/*.{html,js,jsx,tsx}', './node_modules/@openui-org/react/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [react],
}
