import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioCadastroRoutingModule } from './usuario-cadastro-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UsuarioCadastroRoutingModule,
        PageHeaderModule
    ],
    declarations: [UsuarioCadastroComponent]
})
export class UsuarioCadastroModule { }
