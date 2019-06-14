import { Component, OnInit } from '@angular/core';
// import { PedidoModel } from '../models/modelsJsonMenu';

@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.css']
})
export class DespachoComponent implements OnInit {
  // Pedidos = new PedidoModel();

  constructor() {
    console.log('se ha cargado el componente: despacho.component.ts');
  }

  ngOnInit() {}
}
