import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'clientes', loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
