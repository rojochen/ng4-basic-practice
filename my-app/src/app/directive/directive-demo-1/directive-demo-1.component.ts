import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-directive-demo-1',
  templateUrl: './directive-demo-1.component.html',
  styleUrls: ['./directive-demo-1.component.css']
})
export class DirectiveDemo1Component implements OnInit {
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
  auth: boolean;
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
    this.auth = false;
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
  // ng1.x 的 track by index
  trackByIndex(index, item) {
    return index;
  }
  // ng1.x 的 track by value.id
  trackByMemberId(index, item) {
    return item.id;
  }
  // *ngIf 用 func 判斷
  validationFun() {
    return true;
  }
  // select on changed 會觸發的 func
  selectChange(e) {
    console.log('e: ', e);
  }
}
