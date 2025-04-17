import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Ruan Portella";
  public age = 22;
  public isDisabled = true;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }

  public sum(): number {
    return this.age++
  };

  public subtract(): number {
    return this.age--
  }

  public onKeyDown(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  };

  public onMouseEvent(event: MouseEvent): void {
    console.log(event);
  }
}
