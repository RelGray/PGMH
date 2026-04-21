/// <reference types="vitest/config" />

import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  
  resolve: {
    alias: {
      '~app': path.resolve(__dirname, './src/app'),
      '~assets': path.resolve(__dirname, './src/assets'),
      '~components': path.resolve(__dirname, './src/components'),
      '~features': path.resolve(__dirname, './src/features'),
      '~hooks': path.resolve(__dirname, './src/hooks'),
      '~i18n': path.resolve(__dirname, './src/i18n'),
      '~libs': path.resolve(__dirname, './src/libs'),
      '~testing': path.resolve(__dirname, './src/testing'),
      '~types': path.resolve(__dirname, './src/types'),
      '~utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    viteTsConfigPaths({
      root: './',
    }),
  ],
  test: {
    globals: true,
    browser: {
      provider: playwright(),
      enabled: true,
      headless: true,
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})
