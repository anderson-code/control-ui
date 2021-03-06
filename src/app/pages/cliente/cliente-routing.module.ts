import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { LayoutComponent } from '../../layout/layout.component';

const routes: Routes = [
    
  {
    path: '', component: LayoutComponent, children: [
    {
        path: '', component: ClientesListComponent
    },
    {
        path: 'cadastro', component: ClientesFormComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {
}
