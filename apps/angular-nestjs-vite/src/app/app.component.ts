import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '@angular-nestjs-vite/frontend-components';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  template: ` <angular-nestjs-vite-navigation>
    <router-outlet #outlet="outlet"></router-outlet>
  </angular-nestjs-vite-navigation>`,
})
export class AppComponent {}
