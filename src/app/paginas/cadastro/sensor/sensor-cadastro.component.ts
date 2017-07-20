import { Component, OnInit, Input } from '@angular/core';
import { SensorModel } from '../../../paginas/model/sensor';
@Component({
    moduleId: module.id,
    selector: 'app-sensor-cadastro',
    templateUrl: './sensor-cadastro.component.html',
    styleUrls: ['./sensor-cadastro.component.scss']
})
export class SensorCadastroComponent implements OnInit {

    sensor: SensorModel =  new SensorModel();

    constructor() { }
    ngOnInit() {}


    salvar() {
        console.log( this.sensor );
    }
}
