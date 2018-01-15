import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/retry';
@Component({
  selector: 'app-ajax-demo-3',
  templateUrl: './ajax-demo-3.component.html',
  styleUrls: ['./ajax-demo-3.component.css']
})
export class AjaxDemo3Component implements OnInit {

  constructor(
    private Http: HttpClient
  ) { }

  ngOnInit() {
  }
  manyRequests(): void {
    this.Http.get(`http://petstore.swagger.io/v2/store/order/2`)
      .retry(3)
      .subscribe(res => {
        console.log('res: ', res);
      });
  }
}
