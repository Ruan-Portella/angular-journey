import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';

registerLocaleData(localePt);

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule, CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class AngularPipesComponent {
  public date = signal(new Date());
}
