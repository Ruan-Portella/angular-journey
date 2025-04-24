import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Lucas ');
  public lastName = signal('Lima');

  public fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`;
  })

  constructor() {
    effect(() => {
      console.log(this.firstName());
      console.log(this.lastName());
    });
  };

  public updateName() {
    this.firstName.set('Ruan ');
    this.lastName.set('Portella');
  }

  public updateLastName() {
    this.lastName.update((oldValue) => {
      return oldValue === 'Lima' ? 'Portella' : 'Lima';
    });
  }
}
