/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174,
    strictPort: true,
  },
  plugins: [react()],
  test: {
    globals: false,
  },
  resolve: {
    alias: {
      'src/': 'src/',
    },
  },
})