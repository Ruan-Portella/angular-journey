import { Component, signal } from '@angular/core';
import { OutputComponent } from '../output/output.component';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pai-ou-mae',
  imports: [CommonModule, OutputComponent, InputComponent],
  templateUrl: './pai-ou-mae.component.html',
  styleUrl: './pai-ou-mae.component.scss'
})
export class PaiOuMaeComponent {
  outputName = signal<string>('');
}
