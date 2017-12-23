import { Component, OnInit } from '@angular/core';
import { Dynamic2Service } from '../dynamic2.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dynamic2-parent',
  templateUrl: './dynamic2-parent.component.html',
  styleUrls: ['./dynamic2-parent.component.css']
})
export class Dynamic2ParentComponent implements OnInit {
  memberList: Array<any>;
  constructor(
    private memberSvc: Dynamic2Service,
    private router: Router
  ) { }

  ngOnInit() {
    this.memberList = this.memberSvc.getMemberList();
  }
  trackByIndex(index, item) {
    return index;
  }
  // 使用navigate()方法來導頁
  jumpToMemberInfoPage(memId) {
    this.router.navigate(['/dynamic2/child', memId]);
  }
}
