import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensorCadastroComponent } from './sensor-cadastro.component';

const routes: Routes = [
    { path: '', component: SensorCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorCadastroRoutingModule { }
