import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/catch';

interface UserResponse {
  login: string;
  bio: string;
  company: string;
  id: number;
}
@Component({
  selector: 'app-ajax-demo-1',
  templateUrl: './ajax-demo-1.component.html',
  styleUrls: ['./ajax-demo-1.component.css']
})
export class AjaxDemo1Component implements OnInit {
  user: any;
  userObserver: Observable<UserResponse>;
  userSubscription: Subscription;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // 回傳Observable的物件
    this.userObserver = this.http.get<UserResponse>('https://api.github.com/users/seeschweiler');
    //this.userObserver.catch((err) => { throw new Error('error in source. Details: ' + err); });

  }

  queryData(): void {
    // subcscribe 才會執行
    this.userSubscription = this.userObserver.subscribe(data => {
      console.log('callback');
      this.user = data;
      console.log(`is unsubscribe ? ${this.userSubscription.closed}`);
    });

  }
  queryData2(): void {
    this.userSubscription = this.userObserver.subscribe({
      next: (data) => {
        console.log('queryData2');
        this.user = data;
      },
      complete: () => {
        console.log('query complete');
        console.log(`is unsubscribe ? ${this.userSubscription.closed}`);

      },
      error: (error) => {
        console.log(`is unsubscribe ? ${this.userSubscription.closed}`);
      }
    });
  }

  unsubscriber(): void {
    this.userSubscription.unsubscribe();
    console.log(`is unsubscribe ? ${this.userSubscription.closed}`);
  }

}
