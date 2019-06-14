import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoComponent } from './pedido.component';
import { CocinaComponent } from '../cocina/cocina.component';
import { TomarPedidoComponent } from '../tomar-pedido/tomar-pedido.component';
import { FormsModule } from '@angular/forms';

describe('PedidoComponent', () => {
  let component: PedidoComponent;
  let fixture: ComponentFixture<PedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PedidoComponent, CocinaComponent, TomarPedidoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
