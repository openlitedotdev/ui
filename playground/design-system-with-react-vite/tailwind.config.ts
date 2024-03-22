import type { Config } from 'tailwindcss'
import { designSystem } from '@design-system/react'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { },
  plugins: [designSystem()],
}
export default config
