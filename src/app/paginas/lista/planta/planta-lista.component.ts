import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-planta-lista',
    templateUrl: './planta-lista.component.html',
    styleUrls: ['./planta-lista.component.scss']
})
export class PlantaListaComponent implements OnInit {
    plantas: Object[];

    constructor() { }
    ngOnInit() {
        this.plantas = [{
    "nome": "nome",
    "nomeCientifico": "nomeCientifico",
    "familia": "familia",
    "origem": "origem",
    "tipo": "tipo",
    "nivel": "nivel",
    "estilo": "estilo",
    "dataInicio": "2017-06-27",
    "proximaAdubacao": "2017-06-27",
    "dispositivo": [{
        "nome": "nomeDispositivo",
        "descricao": "descricao",
        "urlLiga": "urlLiga",
        "urlDesliga": "urlDesliga",
        "autonomo": "true",
        "periodoLigado": 12,
        "periodoDesligado": 12
    }],
    "sensores": [{
        "nome": "nomeSensor",
        "descricao": "descricaoSensor",
        "url": "url",
        "formatoDados": "formato"
    }],
    "adubacao": [{
        "data": "2017-01-01",
        "modoAdubacao": "modoAdubacao",
        "tipoAdubacao": "tipoAdubacao",
        "formula": "formula"
    }],
    "dono": "595079bd348c2a4aec4d57e4"
},
{
    "nome": "nome2",
    "nomeCientifico": "nomeCientifico2",
    "familia": "familia2",
    "origem": "origem2",
    "tipo": "tipo2",
    "nivel": "nivel2",
    "estilo": "estilo2",
    "dataInicio": "2017-06-27",
    "proximaAdubacao": "2017-06-27",
    "dispositivo": [{
        "nome": "nomeDispositivo",
        "descricao": "descricao",
        "urlLiga": "urlLiga",
        "urlDesliga": "urlDesliga",
        "autonomo": "true",
        "periodoLigado": 12,
        "periodoDesligado": 12
    }],
    "sensores": [{
        "nome": "nomeSensor",
        "descricao": "descricaoSensor",
        "url": "url",
        "formatoDados": "formato"
    }],
    "adubacao": [{
        "data": "2017-01-01",
        "modoAdubacao": "modoAdubacao",
        "tipoAdubacao": "tipoAdubacao",
        "formula": "formula"
    }],
    "dono": "595079bd348c2a4aec4d57e4"
}];
    console.log(this.plantas);
    }
}
