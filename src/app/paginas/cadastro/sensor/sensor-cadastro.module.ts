import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SensorCadastroRoutingModule } from './sensor-cadastro-routing.module';
import { SensorCadastroComponent } from './sensor-cadastro.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SensorCadastroRoutingModule
    ],
    declarations: [SensorCadastroComponent]
})
export class SensorCadastroModule { }
