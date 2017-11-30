import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-child',
  templateUrl: './dynamic-child.component.html',
  styleUrls: ['./dynamic-child.component.css']
})
export class DynamicChildComponent implements OnInit {
  id: string;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // 可以從ActivatedRoute 取得 動態的資訊
    this.activeRoute.params.subscribe(params => {
      console.log('params: ', params);
      this.id = params.id;
    });
  }

}
