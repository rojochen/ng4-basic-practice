import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo-5',
  templateUrl: './component-demo-5.component.html',
  styleUrls: ['./component-demo-5.component.css']
})
export class ComponentDemo5Component implements OnInit {
  title: string;
  isUnchanged: boolean;
  imgUrl: string;
  help: string;
  isSpecial: boolean;
  evilTitle: string;
  actionName: string;
  canSave: boolean;
  bigNum: number;
  smallNum: number;
  isString: string;
  myVar: string;
  color: string;
  constructor() {
    this.title = 'Template Syntax';
    this.isUnchanged = true;
    this.imgUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
    this.isSpecial = true;
    this.evilTitle = 'Hello Angular.';
    this.actionName = 'Go for it.';
    this.canSave = false;
    this.bigNum = 10;
    this.smallNum = 5;
    this.isString = 'str';
    this.myVar = 'A';
  }

  ngOnInit() {
  }
  getMember() {
    return [{
      id: 1,
      name: 'Roger'
    }, {
      id: 2,
      name: 'Louis'
    }];
  }
  trackByIndex(index, item) {
    return index;
  }
  trackByMemberId(index, item) {
    return item.id;
  }

  validationFun() {
    return true;
  }
}
