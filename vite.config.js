import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewares: [],
  },
  resolve: {
    alias: {
      '@products': resolve(__dirname, '../Website-Information/All Products'),
    },
  },
})
