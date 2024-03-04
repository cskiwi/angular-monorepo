import { provideAnimations } from '@angular/platform-browser/animations';
import { renderPage } from '@nitedani/vite-plugin-angular/client';
import { AppComponent } from '../app/app.component';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { GraphQLModule } from './graphql.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { APP_ID } from '@angular/core';

renderPage({
  page: AppComponent,
  imports: [
    SharedModule,
    HttpClientModule,
    GraphQLModule.forRoot({
      api: './graphql',
    }),
    AuthModule.forRoot({
      domain: import.meta.env.VITE_AUTH0_ISSUER_URL,
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      useRefreshTokens: true,
      useRefreshTokensFallback: true,
      authorizationParams: {
        redirect_uri:
          typeof window !== 'undefined' ? window.location.origin : '',
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      },
    }),
  ],
  providers: [
    provideAnimations(),
    { provide: APP_ID, useValue: import.meta.env.VITE_APP_ID },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', subscriptSizing: 'dynamic' },
    },
  ],
});
