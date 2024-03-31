import { Routes } from '@angular/router';
import { AuthGuard } from '@angular-nestjs-vite/frontend-modules-auth';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@angular-nestjs-vite/frontend-welcome').then((m) => m.WelcomePageComponent),
  },
  {
    path: 'public',
    loadChildren: () =>
      import('@angular-nestjs-vite/frontend-public').then((m) => m.routes),
  },

  {
    path: 'private',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@angular-nestjs-vite/frontend-private').then((m) => m.routes),
  },
];
