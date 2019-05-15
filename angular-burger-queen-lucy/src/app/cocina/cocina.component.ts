import { Component, OnInit } from '@angular/core'; //se importa OnInit ya que este es un hook del ciclo de vida de un componente

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html', //template solo es plantilla en linea ,templateUrl('./products.component.html') es plantilla separada en un fichero html
  styleUrls: ['./cocina.component.css']
}) //no se pone punto y coma ya que es un decorador para una clase
export class CocinaComponent implements OnInit {
  constructor() {
    console.log('se ha cargado el componente: cocina.component.ts');
  }

  ngOnInit() {}
}
