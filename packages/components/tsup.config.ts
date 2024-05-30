import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: ['./index.ts'],
  format: ['cjs', 'esm'],
  name: 'react',
  clean: true,
  target: 'es2019',
  ...options,
}))
