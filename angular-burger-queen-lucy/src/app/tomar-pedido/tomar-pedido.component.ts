import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Mostrar } from '../pedidoMostrarNombre';

@Component({
  selector: 'app-tomar-pedido',
  templateUrl: './tomar-pedido.component.html',
  styleUrls: ['./tomar-pedido.component.css']
})
export class TomarPedidoComponent implements OnInit, DoCheck, OnDestroy {
  public menu_mesero: string;
  public menu_meseroListo: string;

  pedidoMostrarNombre: Mostrar = {
    id: 1,
    name: 'nombre cliente'
  };
  constructor() {
    //this.menu_mesero = 'MESERO/DESAYUNO';
    //this.menu_meseroListo =
    // 'CAFE AMERICANO $500,CAFE CON LECHE $700,SANDWICH JAMON QUESO $1000,JUGO NATURAL $700,';
  }

  ngOnInit() {
    // se ejecuta al inicio
    console.log('OnInit ejecutado');
  }
  ngDoCheck() {
    //revisa el estado
    console.log('DoCheck ejecutado');
  }
  ngOnDestroy() {
    //destruye el componente dentro del ciclo de vida
    console.log('ondestroy ejecutado');
  }
  //cambiarMenuAlmuerzo() {
  //aqui declaro la funcion cambiar menu y la llamo en pedido.component.html
  //this.menu_meseroListo =
  //'HAMBURGUESA SIMPLE $1500,HAMBURGUESA DOBLE $2500,AGUA 500/cc $500,AGUA 750/cc $800,GASEOSA 500/cc $700,GASEOSA 750/cc $1000';
  //}
}
