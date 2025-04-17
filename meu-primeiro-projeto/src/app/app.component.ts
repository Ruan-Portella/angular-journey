import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule ,RouterOutlet, NewComponent],
  template: `
   <router-outlet />

    <h1>Meu primeiro projeto Angular</h1>
    <app-new-component />
  `
})
export class AppComponent {}
