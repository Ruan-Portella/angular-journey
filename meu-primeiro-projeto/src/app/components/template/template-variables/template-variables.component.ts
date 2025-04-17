import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})


export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild(NewComponent) public newComponent!: NewComponent;

  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.newComponent.name);
  }
}
