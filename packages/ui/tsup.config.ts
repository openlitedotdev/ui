import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'react',
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  target: 'es2019',
})
