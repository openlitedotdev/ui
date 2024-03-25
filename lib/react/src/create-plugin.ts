import plugin from 'tailwindcss/plugin'
import { cssBase, cssBaseDark } from './shadcn-ui'
import { config } from './theme'

export const useDesign = plugin(({ addBase }) => {
  addBase({ ...cssBase, ...cssBaseDark })
}, config)
