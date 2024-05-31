import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'theme',
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  target: 'es2019',
})
