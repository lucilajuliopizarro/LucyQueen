import { Component } from '@angular/core';
//import { modelsjsonMenu } from './models/modelsJsonMenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //estos estilo solo afectan a la plantilla asociada a este componente './app.component.html'
})
export class AppComponent {
  title = 'BIENVENIDOS BURGER QUEEN INICIA TU PEDIDO!!';
  public mostrar: boolean = true;

  constructor() {}
  ocultar(value) {
    this.mostrar = value;
  }
}
