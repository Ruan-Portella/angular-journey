import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{comida: string, preco: string}>>([
    {comida: 'Pizza', preco: 'R$ 20,00'},
    {comida: 'Hamburguer', preco: 'R$ 15,00'},
    {comida: 'Batata frita', preco: 'R$ 10,00'},
    {comida: 'Salada', preco: 'R$ 8,00'},
    {comida: 'Refrigerante', preco: 'R$ 5,00'}
  ]);

  onSubmit(form: NgForm) {
    console.log('Formulário enviado com sucesso!');
    console.log('Dados do formulário:', form.value);
    console.log('Comidas selecionadas:', form.valid);
  };
}
