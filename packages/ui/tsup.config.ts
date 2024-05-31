import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'react',
  entryPoints: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  target: 'es2019',
})
