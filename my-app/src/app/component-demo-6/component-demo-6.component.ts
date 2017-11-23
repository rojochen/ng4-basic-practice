import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo-6',
  templateUrl: './component-demo-6.component.html',
  styleUrls: ['./component-demo-6.component.css']
})
export class ComponentDemo6Component implements OnInit {
  color: string;
  count: number;
  constructor() {
    this.count = 0;
   }

  ngOnInit() {
  }
  countChange(e) {
    this.count = e;
  }
}
