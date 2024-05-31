import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  name: 'react',
  entryPoints: ['./index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  target: 'es2019',
  ...options,
}))
