import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  name: 'theme',
  entryPoints: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  target: 'es2019',
  ...options,
}))
