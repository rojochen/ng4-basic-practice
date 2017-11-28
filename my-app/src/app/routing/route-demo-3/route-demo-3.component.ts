import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-demo-3',
  templateUrl: './route-demo-3.component.html',
  styleUrls: ['./route-demo-3.component.css']
})
export class RouteDemo3Component implements OnInit {
  username: string;
  constructor() {
    this.username = 'louis';
  }

  ngOnInit() {
  }
}
