import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: 'jsdom',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
      },
    },
  },
});
