import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public name = signal<string>('Sem dados');
    @Input({
      // alias: 'inputName',
      required: true,
      transform: (value: string) => value.toUpperCase(),
    }) set inputName(value: string) {
      this.name.set(value);
    }
}
