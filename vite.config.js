import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate libraries into their own chunks
          if (id.includes('node_modules')) {
            return 'vendor'; // All node_modules will go to vendor.js
          }
          
          // Example: Separate your assets into another chunk
          if (id.includes('/src/assets/js/')) {
            return 'assets'; // All assets will go to assets.js
          }
        },
      },
    },
  },
});