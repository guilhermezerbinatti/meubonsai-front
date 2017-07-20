import { Injectable } from '@angular/core';
import { Request, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ExtendedXHRBackend extends XHRBackend {

  constructor(browserXhr: BrowserXhr, baseResponseOptions: ResponseOptions, xsrfStrategy: XSRFStrategy) {
    super(browserXhr, baseResponseOptions, xsrfStrategy);
  }

  createConnection(request: Request) {
    console.log('createConnection');
    let token = localStorage.getItem('token');
    if (token) {
      request.headers.set('x-access-token', `${token}`); 
    }
    
    request.headers.set('Accept','*/*');
    request.headers.set('Content-Type', 'application/json;');
    request.headers.set('Accept-Language','pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4');
    
    let xhrConnection = super.createConnection(request);
    xhrConnection.response = xhrConnection.response.catch((error: Response) => {
      if (error.status === 401 || error.status === 403) {
        console.log('acesso não autorizado');
        localStorage.removeItem('token');
      }
      return Observable.throw(error);
    });
    console.log('xhrConnection');
    console.log(xhrConnection);
    return xhrConnection;
  }
}