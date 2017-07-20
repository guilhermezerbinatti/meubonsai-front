import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensorListaComponent } from './sensor-lista.component';

const routes: Routes = [
    { path: '', component: SensorListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorListaRoutingModule { }
