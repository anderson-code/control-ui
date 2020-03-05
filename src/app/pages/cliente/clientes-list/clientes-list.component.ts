import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  clientes: any[];

  constructor() { }

  ngOnInit(): void {

    this.clientes = [
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' },
      { nomeFantasia: 'Makro Atacadista', razaoSocial: 'Makro Atacadista', cnpj: '00000000000000', telefone: '99999999999' }
    ];
  }

}
