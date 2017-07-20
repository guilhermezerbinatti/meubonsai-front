import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DispositivoListaRoutingModule } from './dispositivo-lista-routing.module';
import { DispositivoListaComponent } from './dispositivo-lista.component';
import { StatModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DispositivoListaRoutingModule,
        StatModule
    ],
    declarations: [DispositivoListaComponent]
})
export class DispositivoListaModule { }
