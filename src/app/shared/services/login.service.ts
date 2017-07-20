import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SignupComponent } from '../../signup/signup.component';

@Injectable()
export class LoginService {
  http: Http;
  headers: Headers;
  url: string;

  constructor(http: Http) {
    this.url = 'v1/usuario/';
    this.http = http;
  }

  registar(novoUsuario: SignupComponent): Observable<SignupComponent> {
    return this.http.post(this.url, JSON.stringify(novoUsuario))
      .map(res => res.json());
  }

}
