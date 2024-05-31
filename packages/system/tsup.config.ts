import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'system',
  entry: ['src/index.ts'],
  clean: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  banner: { js: '"use client";' },
})
