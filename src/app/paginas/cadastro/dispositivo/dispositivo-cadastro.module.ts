import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DispositivoCadastroRoutingModule } from './dispositivo-cadastro-routing.module';
import { DispositivoCadastroComponent } from './dispositivo-cadastro.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DispositivoCadastroRoutingModule
    ],
    declarations: [DispositivoCadastroComponent]
})
export class DispositivoCadastroModule { }
