import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/kivo-website/',
  build: {
    outDir: process.env.VERCEL ? 'dist' : '../docs',
    emptyOutDir: true
  }
})
