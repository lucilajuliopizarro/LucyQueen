import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PedidoComponent } from './pedido/pedido.component';
// import { TomarPedidoComponent } from './tomar-pedido/tomar-pedido.component';
import { CocinaComponent } from './cocina/cocina.component';
import { DespachoComponent } from './despacho/despacho.component';

const routes: Routes = [
  // { path: 'pedido', component: PedidoComponent },
  // { path: 'tomar_pedido', component: TomarPedidoComponent },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
  { path: 'cocina/id', component: CocinaComponent },
  { path: 'despacho', component: DespachoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'despacho' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
