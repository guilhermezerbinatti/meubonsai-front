import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantaCadastroComponent } from './planta-cadastro.component';

const routes: Routes = [
    { path: '', component: PlantaCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantaCadastroRoutingModule { }
