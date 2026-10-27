import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces (IPv4 and IPv6 dual-stack)
    port: 5173,
    strictPort: false,
    cors: true,
    watch: {
      ignored: ['**/dist/**', '**/.git/**', '**/scratch/**']
    }
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: false
  }
})
