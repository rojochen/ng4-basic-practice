import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo-2',
  templateUrl: './directive-demo-2.component.html',
  styleUrls: ['./directive-demo-2.component.css']
})
export class DirectiveDemo2Component implements OnInit {
  color: string;
  count: number;
  constructor() {
  }

  ngOnInit() {
    this.count = 0;
  }
  // 當 子組件發送event，父組件接收後會執行countChange
  countChange(e) {
    console.log('e: ', e);
    this.count = e;
  }

}
