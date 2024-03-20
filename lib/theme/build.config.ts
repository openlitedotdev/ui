import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index', './src/tailwindcss'],
  declaration: true,
  peerDependencies: ['tailwindcss'],
  clean: true,
  rollup: {
    inlineDependencies: true,
  },
})
