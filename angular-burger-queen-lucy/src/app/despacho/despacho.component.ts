import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.css']
})
export class DespachoComponent implements OnInit {
  constructor() {
    console.log('se ha cargado el componente: despacho.component.ts');
  }

  ngOnInit() {}
}
