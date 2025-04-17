import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule ,RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent],
  template: `
   <router-outlet />

    <h1>Meu primeiro projeto Angular</h1>
    <app-new-component />

    <app-template-binding />
    <app-template-variables />
  `
})
export class AppComponent {}
