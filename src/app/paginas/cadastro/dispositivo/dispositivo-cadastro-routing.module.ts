import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivoCadastroComponent } from './dispositivo-cadastro.component';

const routes: Routes = [
    { path: '', component: DispositivoCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivoCadastroRoutingModule { }
