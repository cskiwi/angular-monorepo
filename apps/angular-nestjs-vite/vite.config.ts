import { angular } from '@nitedani/vite-plugin-angular/plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { vavite } from 'vavite';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/angular-nestjs-vite',
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    passWithNoTests: true,
    include: ['src/**/*.{test,spec}.{js,mjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/angular-nestjs-vite',
      provider: 'v8',
    },
  },
  publicDir: 'src/public',
  build: {
    outDir: '../../dist/apps/angular-nestjs-vite',
  },
  ssr: {},
  plugins: [
    angular({
      swc: true,
    }),
    vavite({
      serverEntry: './src/server/main.ts',
      serveClientAssetsInDev: true,
    }),
    nxViteTsPaths(),
    splitVendorChunkPlugin(),
  ],
  server: {
    fs: {
      allow: [
        '../../node_modules/@fontsource/roboto/files/',
        '../../node_modules/material-icons/iconfont/',
      ],
    },
  },
});
