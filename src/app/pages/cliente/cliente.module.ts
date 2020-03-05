import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ClientesListComponent,
    ClientesFormComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    LayoutModule,
    TableModule
  ]
})
export class ClienteModule { }
