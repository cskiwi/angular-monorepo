import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'angular-nestjs-vite-some-component',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <p>{{ title }}</p>

    <mat-card>
      <mat-card-header>
        <mat-card-title>Some Component</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Some Component Content</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-stroked-button>Some Action</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class HeavyComponent implements OnInit {
  title = 'Some Component started';

  ngOnInit(): void {
    this.title = 'Some Component Loaded';
  }
}

@Component({
  standalone: true,
  imports: [CommonModule, HeavyComponent],
  template: `
    <h1>Welcome to angular-nestjs-vite!</h1>

    <h2>Load on server</h2>
    <angular-nestjs-vite-some-component></angular-nestjs-vite-some-component>

    @defer {
      <h2>Load on client</h2>
      <angular-nestjs-vite-some-component></angular-nestjs-vite-some-component>
    } @placeholder {
      <!-- placeholder template fragment -->
      <p>Placeholder</p>
    } @error {
      <!-- error template fragment -->
      <p>An loading error occured</p>
    }
  `,
})
export class WelcomePageComponent {
  title = inject(Title);

  constructor() {
    this.title.setTitle('Welcome!');
  }
}
