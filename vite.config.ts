/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import monkey, { cdn } from 'vite-plugin-monkey';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: 'src/index.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        name: 'boss直聘自动沟通助手',
        namespace: 'npm/vite-plugin-monkey',
        grant: ['GM_xmlhttpRequest'],
        match: ['https://www.zhipin.com/*'],
        require: [
          'http://code.jquery.com/jquery-2.1.1.min.js',
          // 'https://cdn.jsdelivr.net/npm/core-js-bundle@latest/minified.js',
          // 或者使用 polyfill.io 智能 polyfill, 不过 polyfill.io 在大陆网络连通性很差, 几乎不能用
          // 'https://polyfill.io/v3/polyfill.min.js',
          // 或者使用字节的cdn
          'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/core-js/3.21.1/minified.min.js',
        ],
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr('ReactDOM', 'umd/react-dom.production.min.js'),
        },
      },
    }),
  ],
  test: {
    environment: 'happy-dom',
  },
  build: {
    // minify: false,
    minify: true,
    // sourcemap: true,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src'),
      },
    ],
  },
  css: {
    devSourcemap: true,
  },
});
