import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-demo-4',
  templateUrl: './route-demo-4.component.html',
  styleUrls: ['./route-demo-4.component.css']
})
export class RouteDemo4Component implements OnInit {
  username: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params.username;
      console.log('this.username: ', this.username);
    });
  }

}
