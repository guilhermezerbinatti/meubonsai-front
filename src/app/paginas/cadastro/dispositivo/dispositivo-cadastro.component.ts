import { Component, OnInit, Input } from '@angular/core';
import { DispositivoModel } from '../../../paginas/model/dispositivo';
@Component({
    moduleId: module.id,
    selector: 'app-dispositivo-cadastro',
    templateUrl: './dispositivo-cadastro.component.html',
    styleUrls: ['./dispositivo-cadastro.component.scss']
})
export class DispositivoCadastroComponent implements OnInit {

    dispositivo: DispositivoModel =  new DispositivoModel();

    constructor() { }
    ngOnInit() {}


    salvar() {
        console.log( this.dispositivo );
    }
}
