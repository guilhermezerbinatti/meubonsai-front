import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../../model/usuario';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http.service';

@Injectable()
export class UsuarioService {
  private url: string = 'autenticar';

  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn: Observable<boolean> = this._loggedIn.asObservable();

  constructor(private http: HttpService) { }

  autentica(usuario: Usuario) {
    console.log( JSON.stringify(usuario));
      return this.http
                 .post(this.url, usuario)
                 .map((res) => {   
                   console.log(res);
                    var token = res.json().token;
                    if (token) {
                        this._loggedIn.next(true);
                        localStorage.setItem('token', token);
                        return true;
                    }
                    else {
                      return false;
                    }
                 });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if(token){ //essa atribuição é feita para atualizar a variavel e o resto do sistema ser notificado
      this._loggedIn.next(true);
    } else {
      this._loggedIn.next(false);
    }

    return this._loggedIn.getValue();
  }
}
