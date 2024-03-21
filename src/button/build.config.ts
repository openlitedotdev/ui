import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index'],
  declaration: true,
  clean: true,
  rollup: {
    esbuild: {
      jsx: 'automatic',
      format: 'esm',
      target: 'es2019',
      jsxFragment: 'Fragment',
      jsxFactory: 'h',
    },
  },
})
