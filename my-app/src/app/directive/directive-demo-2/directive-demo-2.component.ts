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
    this.count = 0;
  }

  ngOnInit() {
  }
  countChange(e) {
    this.count = e;
  }

}
