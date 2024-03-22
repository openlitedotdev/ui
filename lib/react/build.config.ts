import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index'],
  declaration: true,
  peerDependencies: ['react', 'react-dom'],
  clean: true,
  rollup: {
    inlineDependencies: true,
  },
})
