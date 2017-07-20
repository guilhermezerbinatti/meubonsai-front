import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
import { Usuario } from '../model/usuario';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    
    usuario: Usuario;
    senhaConfirmar: string;

    service: UsuarioService;

    constructor(service: UsuarioService) {
      this.service = service;
    }

    ngOnInit() { 
      this.usuario = new Usuario();

    }


    registar(event) {
        event.preventDefault();
       
        console.log('registar');
        console.log(this.usuario);
        // this.service.registar(this.usuario).subscribe(res => {
        //   console.log(res);
        // });
    }

}
