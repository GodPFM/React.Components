import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import istanbul from 'vite-plugin-istanbul';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.tsx'],
  },
};

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: vitestConfig.test,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
      },
    },
  },
});
