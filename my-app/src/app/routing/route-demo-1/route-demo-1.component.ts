import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-route-demo-1',
  templateUrl: './route-demo-1.component.html',
  styleUrls: ['./route-demo-1.component.css']
})
export class RouteDemo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(f: NgForm) {
    console.log(f);
  }
}
