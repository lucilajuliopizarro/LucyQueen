import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CocinaComponent } from './cocina/cocina.component';
import { TomarPedidoComponent } from './tomar-pedido/tomar-pedido.component';
import { DespachoComponent } from './despacho/despacho.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel está aquí

@NgModule({
  //decorador que nos permite configurar el modulo
  declarations: [
    //nos permite dentro de este declarar las directivas o componentes,para registrar y utilizar en la aplicacion de forma global
    AppComponent,
    PedidoComponent,
    CocinaComponent,
    TomarPedidoComponent,
    DespachoComponent
  ],
  imports: [
    // nos permite declarar diferentes modulo y funcionalidades, para cargarlo en la aplicacion
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //se cargan ciertos servicios y configuraciones
  bootstrap: [
    // se carga el componente o se indica el componente principal con el modulo que va a lansarce
    AppComponent
  ]
})
export class AppModule {}
