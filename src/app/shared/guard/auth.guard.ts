import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private user: UsuarioService, private router: Router) { }

    canActivate() {
        console.log('canActivate');
        let isLoggedin = this.user.isLoggedIn();

        if (!isLoggedin) {
            this.router.navigate(['/login']);
            
        }
        
        return isLoggedin;
    }
}
