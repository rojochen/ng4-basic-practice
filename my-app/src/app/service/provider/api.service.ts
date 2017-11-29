import { Injectable } from '@angular/core';
import { IApi } from '../interface/IApi';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService implements IApi {

  constructor(
    private http: HttpClient
  ) { }
  get(aipUrl): Observable<any> {
    return this.http.get(aipUrl);
  }
  getPromise(aipUrl): Promise<any> {
    return this.http.get(aipUrl).toPromise();
  }
  post(aipUrl, resData): Observable<any> {
    return this.http.post(aipUrl, resData);
  }
}
