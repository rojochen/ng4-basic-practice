import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-basic-child-2',
  templateUrl: './basic-child-2.component.html',
  styleUrls: ['./basic-child-2.component.css']
})
export class BasicChild2Component implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }

}
