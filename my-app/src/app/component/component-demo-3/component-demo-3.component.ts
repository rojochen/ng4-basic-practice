import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo-3',
  templateUrl: './component-demo-3.component.html',
  styleUrls: ['./component-demo-3.component.css']
})

export class ComponentDemo3Component implements OnInit {
  oneWayValue: string;
  selectValue: string;
  twoWayValue: string;
  twoWayValue1: string;
  radioValue: string;
  boxValue1: string;
  boxList: Array<{ selected: boolean; value: string }>;
  constructor() {
  }
  ngOnInit() {
    this.oneWayValue = '';
    this.selectValue = 'angular';
    this.twoWayValue = '';
    this.boxList = [];
    this.boxList.push({ selected: false, value: 'angular' });
    this.boxList.push({ selected: false, value: 'react' });
    this.boxList.push({ selected: false, value: 'vue' });
  }
  // get input value
  input(event) {
    this.oneWayValue = event.target.value;
  }
  log() {
    console.log(this.twoWayValue);
  }
}
