import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component-demo-4',
  templateUrl: './component-demo-4.component.html',
  styleUrls: ['./component-demo-4.component.css']
})
export class ComponentDemo4Component implements OnInit {
  name: string;
  constructor() { }
  setValue() {
    this.name = 'Nancy';
  }
  ngOnInit() {
  }

}
