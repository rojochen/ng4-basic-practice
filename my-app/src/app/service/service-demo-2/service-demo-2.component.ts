import { Component, OnInit, Inject } from '@angular/core';
import { LoggerService } from '../provider/logger.service';
import { ApiService } from '../provider/api.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/observable/forkJoin';
import { Item } from '../interface/Item';

class OtherPartsOfTheRequest {
  constructor() {
  }
  setHeader(HTTP, domainUrl, reqBody, reqHeader) {
    return HTTP.post(domainUrl, reqBody, reqHeader);
  }
  setParams(HTTP, domainUrl, reqBody, reqParams) {
    return HTTP.post(domainUrl, reqBody, reqParams);
  }
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
  items: any[];
  asyncItems: any;
  promiseItems: any[];
  request: any;
  otherPartsOfTheRequest: any;
  postDomainUrl: string;
  constructor(
    // private Log: LoggerService //這邊無法使用LogService 因為沒有在這邊inject providers
    @Inject('API_URL') private apiDomain: string, // useValue
    private apiService: ApiService,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.postDomainUrl = 'https://jsonplaceholder.typicode.com/posts';
    this.request = {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    };

    // this.http add interface
    this.http.get<Item>(this.apiDomain + '/posts?userId=1').toPromise().then(data => {
      console.log(data.body);
    });

    // this.http add class
    this.http.get<Item[]>(this.apiDomain + '/posts?userId=1').toPromise().then(data => {
      console.log('data: ', data);
    }, (err: HttpErrorResponse) => {
      console.log('err: ', err);
      console.log('Something went wrong!');
    });

    this.apiService.get(this.apiDomain + '/posts').subscribe(res => {
      console.log('res type json: ', typeof res);
      this.items = res;
    });

    // pipe Async
    this.asyncItems = this.apiService.get(this.apiDomain + '/posts');

    // es6 標準promise的寫法
    this.apiService.getTypeText(this.apiDomain + '/posts').subscribe(res => {
      console.log('res type text: ', typeof res);
    });
    // Format Promise
    this.apiService.getPromise(this.apiDomain + '/posts').then(res => {
      this.promiseItems = res;
    });


    this.apiService.post(this.postDomainUrl, this.request).subscribe(res => {
      console.log('res', res);
    });

    // Rxjs promise.all
    this.forkJoin();

    // many Requests
    this.manyRequests();

    // otherPartsOfTheRequest
    this.otherPartsOfTheRequest = new OtherPartsOfTheRequest();
    this.otherPartsOfTheRequest.setHeader(this.http, this.postDomainUrl, this.request, {
      headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    }).subscribe(res => {
    });

    this.otherPartsOfTheRequest.setParams(this.http, this.postDomainUrl, this.request, {
      params: new HttpParams().set('id', '3'),
    }).subscribe(res => {
    });
  }
  // Rxjs forkJoin = promise.all([])
  forkJoin() {
    Observable.forkJoin([this.apiService.get(this.apiDomain + '/posts'), this.apiService.get(this.apiDomain + '/posts')])
      .subscribe(results => {
        console.error('results: ', results);
      });
  }
  manyRequests() {
    const req = this.apiService.post(this.postDomainUrl, this.request);
    // 0 requests made - .subscribe() not called.
    req.subscribe();
    // 1 request made.
    req.subscribe();
    // 2 requests made.
  }

}
