import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantaCadastroRoutingModule } from './planta-lista-routing.module';
import { PlantaListaComponent } from './planta-lista.component';
import { StatModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        PlantaCadastroRoutingModule,
        FormsModule,
        StatModule
    ],
    declarations: [PlantaListaComponent]
})
export class PlantaListaModule { }
