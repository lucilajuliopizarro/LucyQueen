import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public pedido: Array<Pedido>;
  constructor() {
    this.pedido = [
      new Pedido('Hamburguesa Simple', 1500),
      new Pedido('Hamburguesa Doble', 2500),
      new Pedido('Huevo', 500),
      new Pedido('Queso', 500)
    ];
  }
}
