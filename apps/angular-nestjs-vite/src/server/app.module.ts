// needs to be first import, it loads the polyfills
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { AuthorizationModule } from '@angular-nestjs-vite/backend-authorization';
import { DatabaseModule } from '@angular-nestjs-vite/backend-database';
import { GraphqlModule } from '@angular-nestjs-vite/backend-graphql';
import { SyncModule } from '@angular-nestjs-vite/backend-sync';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AngularRendererModule } from '@nitedani/angular-renderer-nestjs';
import { AppComponent } from '../app/app.component';
import { SharedModule } from '../shared.module';

@Module({
  imports: [
    // Angular imports
    AngularRendererModule.forRoot({
      // import only on server's version of the app
      page: AppComponent,
      imports: [SharedModule],
      providers: [provideNoopAnimations()],
    }),

    // Server imports
    ConfigModule,
    DatabaseModule,
    AuthorizationModule,
    GraphqlModule,
    SyncModule,
  ],
  controllers: [],
})
export class AppModule {}
