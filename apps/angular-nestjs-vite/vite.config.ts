/// <reference types="vavite/vite-config" />

import { defineConfig } from 'vite';
import { angular } from '@nitedani/vite-plugin-angular/plugin';
import tsConfigPaths from 'vite-tsconfig-paths';
import vavite from 'vavite';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  buildSteps: [
    {
      name: 'client',
    },
    {
      name: 'server',
      config: {
        build: {
          ssr: true,
        },
      },
    },
  ],
  plugins: [
    angular(),
    vavite({
      serverEntry: '/src/server/main.ts',
      serveClientAssetsInDev: true,
    }),
    tsConfigPaths({
      root: '../../',
    }),
    vercel(),
  ],
});
