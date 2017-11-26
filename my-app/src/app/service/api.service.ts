import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    @Inject('API_URL') private apiDomain: string,
    private http: HttpClient
  ) {
  }
  getMember() {
    this.http.get(this.apiDomain + '/posts').subscribe(res => {
      console.log('res: ', res);
    });
  }

}
