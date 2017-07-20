import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioListaRoutingModule } from './usuario-lista-routing.module';
import { UsuarioListaComponent } from './usuario-lista.component';
import { StatModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UsuarioListaRoutingModule,
        StatModule
    ],
    declarations: [UsuarioListaComponent]
})
export class UsuarioListaModule { }
