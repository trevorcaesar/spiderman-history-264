import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['.e2b.app'],
    proxy: {
      // Proxy /api/llm requests to agent server for AI-powered features
      '/api/llm': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      // Proxy /api requests to Express backend for external API data fetching
      // NOTE: This MUST come AFTER /api/llm so that /api/llm matches first!
      // See agents.md "Fetching External API Data" section for setup instructions.
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})

