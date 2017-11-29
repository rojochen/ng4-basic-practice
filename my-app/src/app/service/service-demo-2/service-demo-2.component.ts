import { Component, OnInit, Inject } from '@angular/core';
import { LoggerService } from '../provider/logger.service';
import { ApiService } from '../provider/api.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/observable/forkJoin';
interface ItemsResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-service-demo-2',
  templateUrl: './service-demo-2.component.html',
  styleUrls: ['./service-demo-2.component.css'],
  providers: [
    { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com' },  // useValue
    ApiService
  ]
})
export class ServiceDemo2Component implements OnInit {
  get: any[];
  getAsync: any;
  getPromise: any[];
  constructor(
    // private Log: LoggerService //這邊無法使用LogService 因為沒有在這邊inject providers
    @Inject('API_URL') private apiDomain: string, // useValue
    private api: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.Log.debug('Service demo 2'); 這邊無法使用LogService 因為沒有在這邊inject

    this.http.get<ItemsResponse>(this.apiDomain + '/posts?userId=1').toPromise().then(data => {
      console.log(data.body);
    });

    this.http.get<ItemsResponse>(this.apiDomain + '/posts?userId=1').toPromise().then(data => {
      console.log(data.userId);
    }, (err: HttpErrorResponse) => {
      console.log('err: ', err);
      console.log('Something went wrong!');
    });


    this.api.get(this.apiDomain + '/posts').subscribe(res => {
      console.log('res type json: ', typeof res);
      this.get = res;
    });

    this.getAsync = this.api.get(this.apiDomain + '/posts');

    // es6 標準promise的寫法
    this.api.getTypeText(this.apiDomain + '/posts').subscribe(res => {
      console.log('res type text: ', typeof res);
    });

    this.api.getPromise(this.apiDomain + '/posts').then(res => {
      this.getPromise = res;
    });

    setTimeout(() => {
      this.api.post('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).subscribe(res => {
        console.log('res', res);
      });
    }, 1000);
    this.forkJoin();
  }
  // forkJoin = promise.all([])
  forkJoin() {
    Observable.forkJoin([this.api.get(this.apiDomain + '/posts'), this.api.get(this.apiDomain + '/posts')])
      .subscribe(results => {
        console.error('results: ', results);
      });
  }

}
