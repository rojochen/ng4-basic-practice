import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-ajax-demo-2',
  templateUrl: './ajax-demo-2.component.html',
  styleUrls: ['./ajax-demo-2.component.css']
})
export class AjaxDemo2Component implements OnInit {
  addStoreId: string;
  searchStoreId: string;
  deleteStoreId: string;
  constructor(
    private Http: HttpClient
  ) { }

  ngOnInit() {
  }
  addData(): void {
    this.Http.post('http://petstore.swagger.io/v2/store/order', {
      "id": this.addStoreId,
      "petId": this.addStoreId,
      "quantity": 0,
      "shipDate": new Date(),
      "status": "placed",
      "complete": false
    }).subscribe(res => {
      console.log('res: ', res);
    })
  }
  searchData(): void {
    this.Http.get(`http://petstore.swagger.io/v2/store/order/${this.searchStoreId}`).subscribe(res => {
      console.log('res: ', res);
    })
  }
  deleteData(): void {
    this.Http.delete(`http://petstore.swagger.io/v2/store/order/${this.deleteStoreId}`).subscribe(res => {
      console.log('res: ', res);
    });
  }
}
