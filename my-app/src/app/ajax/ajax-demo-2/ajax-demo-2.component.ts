import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


interface Store {
  "id": string
  "petId": string;
  "quantity": number;
  "shipDate": Date;
  "status": string;
  "complete": boolean;
}
@Component({
  selector: 'app-ajax-demo-2',
  templateUrl: './ajax-demo-2.component.html',
  styleUrls: ['./ajax-demo-2.component.css']
})
export class AjaxDemo2Component implements OnInit {
  addStoreId: string;
  searchStoreId: string;
  deleteStoreId: string;
  storeBody: Store;
  constructor(
    private Http: HttpClient
  ) { }

  ngOnInit() {
  }
  addData(): void {
    this.storeBody = {
      "id": this.addStoreId,
      "petId": this.addStoreId,
      "quantity": 0,
      "shipDate": new Date(),
      "status": "placed",
      "complete": false
    };
    this.Http.post<Store>('http://petstore.swagger.io/v2/store/order', this.storeBody).subscribe(res => {
      console.log('res: ', res);
    });
  }
  searchData(): void {
    this.Http.get(`http://petstore.swagger.io/v2/store/order/${this.searchStoreId}`).subscribe(res => {
      console.log('res: ', res);
    });
  }
  deleteData(): void {
    this.Http.delete(`http://petstore.swagger.io/v2/store/order/${this.deleteStoreId}`).subscribe(res => {
      console.log('res: ', res);
    });
  }

  callApiWhenSendParams(): void {
    this.Http.get(`http://petstore.swagger.io/v2/store/order/2`, {
      params: new HttpParams().set('id', '3'),
    }).subscribe(res => {
      console.log('res: ', res);
    });
  }
  callApiWhenSendHeader(): void {
    this.Http.get(`http://petstore.swagger.io/v2/store/order/2`, {
      headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    }).subscribe(res => {
      console.log('res: ', res);
    });
  }
}
