import { Component, OnInit, Input } from '@angular/core';
import {  DispositivoModel } from '../../../paginas/model/dispositivo';
@Component({
    moduleId: module.id,
    selector: 'app-dispositivo-lista',
    templateUrl: './dispositivo-lista.component.html',
    styleUrls: ['./dispositivo-lista.component.scss']
})
export class DispositivoListaComponent implements OnInit {

    dispositivos: Array<DispositivoModel>;

    constructor() { }
    ngOnInit() {
        this.dispositivos = new Array<DispositivoModel>();

        let dipositivo = new DispositivoModel();
        dipositivo.nome = "Dispositivo 1";
        dipositivo.url = "http://teste.com.br/dispositivo1";
        dipositivo.desligar = "off";
        dipositivo.ligar = "on";

        this.dispositivos.push(dipositivo);

    }
}
