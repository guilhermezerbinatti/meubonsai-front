import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-planta-cadastro',
    templateUrl: './planta-cadastro.component.html',
    styleUrls: ['./planta-cadastro.component.scss']
})
export class PlantaCadastroComponent implements OnInit {
        _id: string;
    nome: string;
    nomeCientifico: string;
    familia: string;
    origem: string;
    tipo: string;
    nivel: string;
    estilo: string;
    dataInicio: Date;
    dataProximaAdubacao: Date;
    //sensores: Array<SensoresComponent>;
    //dispotivo: Array<DispositivoComponent>;
    constructor() { }
    ngOnInit() {}
}
