import { Component, OnInit, Input } from '@angular/core';
import { UsuarioModel } from '../../../paginas/model/usuario';
@Component({
    moduleId: module.id,
    selector: 'app-usuario-cadastro',
    templateUrl: './usuario-cadastro.component.html',
    styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

    usuario: UsuarioModel =  new UsuarioModel();

    constructor() { }
    ngOnInit() {}


    salvar() {
        console.log( this.usuario );
    }
}
