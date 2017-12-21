import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class TimingInterceptorService implements HttpInterceptor {

  constructor() { }
  // 計算Request時間範例
  // HttpRequest 請求URL，header etc.
  // HttpHandler 處理攔截
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).do(e => {
      // 處理response
      // 判斷 e 是否跟 HttpResponse 相同
      if (e instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.error(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
      }
    });
  }
}
