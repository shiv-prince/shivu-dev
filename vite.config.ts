import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  base: '/shivu-dev/',
  server: {
    host: true, // allows access from network
    strictPort: true,
    port: 5173,
    cors: true,
    hmr: {
      host: 'f59efed977ad.ngrok-free.app',
      protocol: 'wss',
    },
  },
})
