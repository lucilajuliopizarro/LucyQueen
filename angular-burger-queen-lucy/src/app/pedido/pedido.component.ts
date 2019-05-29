import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'; //se importa OnInit ya que este es un hook del ciclo de vida de un componente
import { Pedido } from '../models/pedido';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html', //template solo es plantilla en linea templateUrl es plantilla separada en un fichero html
  styleUrls: ['./pedido.component.css'],
  providers: [MenuService]
})
export class PedidoComponent implements OnInit, DoCheck, OnDestroy {
  public number_component: string;
  public menu_breakfast: string;
  public pedido: Array<Pedido>;

  constructor(public _menuService: MenuService) {
    this.number_component = 'ACOMPAÑAMIENTOS';
    this.menu_breakfast = 'PAPAS FRITAS';
    this.pedido = new Array();
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
  cambiarMenu() {
    //aqui declaro la funcion cambiar menu y la llamo en pedido.component.html
    this.menu_breakfast = 'ONION RINGS';
  }
}
