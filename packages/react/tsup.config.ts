import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: ['src/index.ts', 'src/components.ts', 'src/plugin.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: ['react'],
  ...options,
}))
