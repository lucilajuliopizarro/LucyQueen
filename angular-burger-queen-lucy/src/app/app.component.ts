import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //estos estilo solo afectan a la plantilla asociada a este componente './app.component.html'
})
export class AppComponent {
  title = 'Bienvenidos al Hamburgezon!!';
  public mostrar: boolean = true;

  ocultar(value) {
    this.mostrar = value;
  }
}
