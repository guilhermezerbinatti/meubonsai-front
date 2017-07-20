import { Component, OnInit, Input } from '@angular/core';
import {  SensorModel } from '../../../paginas/model/sensor';
@Component({
    moduleId: module.id,
    selector: 'app-sensor-lista',
    templateUrl: './sensor-lista.component.html',
    styleUrls: ['./sensor-lista.component.scss']
})
export class SensorListaComponent implements OnInit {

    sensores: Array<SensorModel>;

    constructor() { }
    ngOnInit() {
    }
}
