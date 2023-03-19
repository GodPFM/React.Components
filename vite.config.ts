import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
      },
    },
  },
});
