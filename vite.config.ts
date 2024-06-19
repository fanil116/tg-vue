import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';

import { babel } from '@rollup/plugin-babel'; // Проверьте правильность импорта

export default defineConfig({
  plugins: [
    vue2(),
    babel({
      babelHelpers: 'runtime',
      presets: [
        ['@babel/preset-env', { targets: 'defaults' }]
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'runtime',
          presets: [
            ['@babel/preset-env', { targets: 'defaults' }]
          ],
          plugins: [
            '@babel/plugin-transform-runtime'
          ]
        })
      ]
    }
  }
});
