import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListaComponent } from './usuario-lista.component';

const routes: Routes = [
    { path: '', component: UsuarioListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioListaRoutingModule { }
