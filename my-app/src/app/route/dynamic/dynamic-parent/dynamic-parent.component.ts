import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-parent',
  templateUrl: './dynamic-parent.component.html',
  styleUrls: ['./dynamic-parent.component.css']
})
export class DynamicParentComponent implements OnInit {
  id: string;
  constructor() { }

  ngOnInit() {
    this.id = 'Louis';
  }

}
