import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";
import { SignalsComponent } from "./components/signals/signals.component";
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from "./components/pipes/angular-pipes/angular-pipes.component";
import { TemplateDrivenFormsComponent } from "./components/forms/template-driven-forms/template-driven-forms.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent, SignalsComponent, PaiOuMaeComponent, AngularPipesComponent, TemplateDrivenFormsComponent],
  template: `
   <router-outlet />

    <h1>Meu primeiro projeto Angular</h1>
    <app-new-component />

    <app-template-binding />
    <app-template-variables />
    <app-template-control-flow />
    <app-template-deferrable-views />
    <app-signals />
    <app-pai-ou-mae />
    <app-angular-pipes />
    <app-template-driven-forms />
  `
})
export class AppComponent {}
