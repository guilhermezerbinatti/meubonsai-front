import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantaListaComponent } from './planta-lista.component';

const routes: Routes = [
    { path: '', component: PlantaListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantaCadastroRoutingModule { }
