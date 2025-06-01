import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'public',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  publicDir: false // отключаем копирование из public при сборке
})