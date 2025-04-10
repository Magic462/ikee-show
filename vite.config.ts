import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ikee-show/',
  plugins: [react()],
  build: {
    outDir: 'dist', // 确保这里是 'dist'
  },
  assetsInclude: ['**/*.png'],
})
