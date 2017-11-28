import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

interface IService {
  getMember(): Observable<any>;
  getPromiseMember(): Promise<any>;
  getPostMember(): Observable<any>;
}
@Injectable()
export class Api2Service implements IService {

  constructor(
    @Inject('API_URL') private apiDomain: string,
    private http: HttpClient
  ) {
  }
  getMember(): Observable<any> {
    return  null;
  }
  getPromiseMember(): Promise<any> {
    return null;
  }
  getPostMember(): Observable<any> {
    return null;
  }

}
