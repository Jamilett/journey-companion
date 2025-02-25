import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Agrega alias para `src/`
    },
  },
  base: '/',
  build: {
    outDir: 'client/dist', // `client/dist`
  },
  publicDir: "public"
})
