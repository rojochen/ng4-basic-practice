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
  getPostMember(): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }

}
