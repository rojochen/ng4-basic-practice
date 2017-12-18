import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //表頭塞token  HHH
    const authReq = req.clone({headers: req.headers.set('Authorization', 'my-auth-token')});
    console.log('authReq: ', authReq);
    return next.handle(authReq);
  }
}
