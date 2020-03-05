import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  cars: any[];

  constructor() { }

  ngOnInit(): void {

    this.cars = [
      { nome: 'vin', valor: 'Vin' },
      {nome: 'year', valor: 'Year' },
      { nome: 'brand', valor: 'Brand' },
      { nome: 'color', valor: 'Color' }
    ];
  }

}
