import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dynamic3-parent',
  templateUrl: './dynamic3-parent.component.html',
  styleUrls: ['./dynamic3-parent.component.css']
})
export class Dynamic3ParentComponent implements OnInit, OnDestroy {
  pageId: string;
  sub: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      console.log('params: ', params);
      this.pageId = params.page || 0;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();

  }
  goBack() {
    this.location.back();
  }

}
