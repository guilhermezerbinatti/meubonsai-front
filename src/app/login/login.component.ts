import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../shared/services/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    usuario: Usuario;
    mensagem: string;
    constructor(private userService: UsuarioService, public router: Router) { 
        this.mensagem = '';
    }
   

    ngOnInit() { 
        console.log('ngOnInit');
        this.usuario = new Usuario();
    }

    onLoggedin() {
        console.log('this.usuario');
        console.log(this.usuario);
        this.userService.autentica(this.usuario)
            .subscribe(
                data => {
                    if (data) {
                        this.router.navigate(['/paginas']);    
                    }
                    else {
                        this.mensagem = 'Usuário ou senha inválidos.'
                    }
                    
                },
                err => console.log(err),
                () => console.log('Random Quote Complete')
            );
        


    }

}
