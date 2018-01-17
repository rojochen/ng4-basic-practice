import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dynamic2Service } from '../dynamic2.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dynamic2-child',
  templateUrl: './dynamic2-child.component.html',
  styleUrls: ['./dynamic2-child.component.css']
})
export class Dynamic2ChildComponent implements OnInit {
  memberInfo: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private memberSvc: Dynamic2Service,
    private location: Location
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log('params: ', params);
      // this.id = params.id;
      this.memberInfo = this.memberSvc.getMemberInfo(params.id);
    });
  }
  goBack() {
    this.location.back();
  }

}
