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
  if (import.meta.env.PROD) {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    const port = import.meta.env.VITE_PORT || 3000;
    app.listen(port);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let globalApp = (global as any).__app;

    if (globalApp) {
      console.log('Reloading server...');
      globalApp.close();
    }

    globalApp = await NestFactory.create(AppModule);
    await globalApp.init();
    const expressApp = (await globalApp
      .getHttpAdapter()
      .getInstance()) as Express;
    if (httpDevServer) httpDevServer.on('request', expressApp);
  }
}
