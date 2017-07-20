import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SensorListaRoutingModule } from './sensor-lista-routing.module';
import { SensorListaComponent } from './sensor-lista.component';
import { StatModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SensorListaRoutingModule,
        StatModule
    ],
    declarations: [SensorListaComponent]
})
export class SensorListaModule { }
