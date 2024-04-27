import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2019',
  ...options,
}))
