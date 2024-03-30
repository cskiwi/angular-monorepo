/* eslint-disable @typescript-eslint/no-explicit-any */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { Express } from 'express';
import httpDevServer from 'vavite/http-dev-server';
import { AppModule } from './app.module';

try {
  bootstrap();
} catch (error) {
  Logger.error(error);
}

async function bootstrap() {
  if ((global as any).__app) {
    console.log('Reloading server...');
    await (global as any).__app.close();
  }

  (global as any).__app = await NestFactory.create(AppModule);
  (global as any).__app.setGlobalPrefix('api');

  if (import.meta.env.PROD) {
    const port = import.meta.env.VITE_PORT || 8080;
    (global as any).__app.listen(port);
  } else {
    await (global as any).__app.init();
    const expressApp = (await (global as any).__app.getHttpAdapter().getInstance()) as Express;
    if (httpDevServer) httpDevServer.on('request', expressApp);
  }
}
