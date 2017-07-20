import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivoListaComponent } from './dispositivo-lista.component';

const routes: Routes = [
    { path: '', component: DispositivoListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivoListaRoutingModule { }
