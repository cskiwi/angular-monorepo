import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

// This module is imported on client, inside src/main.ts
// This module is imported on server, inside server/app.module.ts
// SharedModule provides AppService on client and server

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
