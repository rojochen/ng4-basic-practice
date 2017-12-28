import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo-1',
  templateUrl: './pipe-demo-1.component.html',
  styleUrls: ['./pipe-demo-1.component.css']
})
export class PipeDemo1Component implements OnInit {
  today: number = Date.now();
  a: number;
  value: string;
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  numberList: Array<number> = [];
  searchNum: number;
  constructor() {
  }
  ngOnInit() {
    this.a = 0.259;
    this.value = 'hello world';
    for (let index = 1; index <= 10; index++) {
      this.numberList.push(index);
    }
  }

}
