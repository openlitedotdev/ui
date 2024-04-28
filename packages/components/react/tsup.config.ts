import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: ['./index.ts'],
  format: ['cjs', 'esm'],
  name: 'react',
  tsconfig: './tsconfig.json',
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2019',
  external: ['react'],
  ...options,
}))
