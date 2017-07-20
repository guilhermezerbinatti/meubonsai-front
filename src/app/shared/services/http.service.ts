import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Injectable()
export class HttpService {
  http: Http;
  headers: Headers;
  patch: string;

  constructor(http: Http) {
    this.http = http;
    this.patch = "http://localhost:3000/";

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
   
     if (localStorage.getItem('token')) {
         this.headers.append('x-acess-token', localStorage.getItem('token'));
     }
  }

  get(url: string): Observable<Response> {
    return this.http.get(this.patch + url, { headers: this.headers });
  }

  post(url: string, dado:Object): Observable<Response> {
    console.log('post: ' + this.patch + url);
    console.log('dados: ' + JSON.stringify(dado));
	  return this.http.post(this.patch + url, JSON.stringify(dado),  { headers: this.headers });
  }
}
