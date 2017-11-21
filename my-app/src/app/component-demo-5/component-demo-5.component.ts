import { Component, OnInit } from '@angular/core';

interface MemberInfo {
  id: number;
  name: string;
}

@Component({
  selector: 'app-component-demo-5',
  templateUrl: './component-demo-5.component.html',
  styleUrls: ['./component-demo-5.component.css']
})
export class ComponentDemo5Component implements OnInit {
  title: string;
  isUnchanged: boolean;
  imgUrl: string;
  constructor() {
    this.title = 'Template Syntax';
    this.isUnchanged = true;
    this.imgUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  }

  ngOnInit() {
  }
  getMember(): MemberInfo[] {
    return [{
      id: 1,
      name: 'Roger'
    }, {
      id: 2,
      name: 'Louis'
    }];
  }
}


class Member {
  constructor() {
  }
}