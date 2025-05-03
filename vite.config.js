import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ensures Vite listens on all network interfaces
    allowedHosts: [
      'bogantiles.onrender.com', // Add your Render URL here
      'localhost', // Optionally allow localhost for local development
    ],
  },
})
