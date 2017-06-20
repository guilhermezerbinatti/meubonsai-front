import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantaCadastroRoutingModule } from './planta-cadastro-routing.module';
import { PlantaCadastroComponent } from './planta-cadastro.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        PlantaCadastroRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [PlantaCadastroComponent]
})
export class PlantaCadastroModule { }
