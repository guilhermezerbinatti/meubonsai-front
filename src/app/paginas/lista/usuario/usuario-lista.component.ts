import { Component, OnInit, Input } from '@angular/core';
import { UsuarioModel } from '../../../paginas/model/usuario';
@Component({
    moduleId: module.id,
    selector: 'app-usuario-lista',
    templateUrl: './usuario-lista.component.html',
    styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

    usuarios: Array<UsuarioModel>;

    constructor() { }
    ngOnInit() {
        this.usuarios = new Array<UsuarioModel>();

        let usuario = new UsuarioModel();
        usuario.nome = "Guilherme";
        usuario.email = "guilhermezerbinatti@gmail.com";

        this.usuarios.push(usuario);

        usuario = new UsuarioModel();
        usuario.nome = "Joao";
        usuario.email = "joao@gmail.com";

        this.usuarios.push(usuario);

        usuario = new UsuarioModel();
        usuario.nome = "jose";
        usuario.email = "Jose@gmail.com";

        this.usuarios.push(usuario);
    }
}
