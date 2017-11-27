import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    @Inject('API_URL') private apiDomain: string,
    private http: HttpClient
  ) {
  }
  getMember(): Observable<any> {
    return this.http.get(this.apiDomain + '/posts');
  }
  getPromiseMember(): Promise<any> {
    return this.http.get(this.apiDomain + '/posts').toPromise();
  }

}
