import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      name: 'vue',
      entry: './index.ts',
      formats: ['es'],
      fileName(entryName) {
        return `index.${entryName}.js`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: { vue: 'Vue' },
      },
    },
    emptyOutDir: false,
  },
})
