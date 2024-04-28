import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  name: 'theme',
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2019',
  ...options,
}))
