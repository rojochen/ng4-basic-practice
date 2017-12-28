import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo-2',
  templateUrl: './component-demo-2.component.html',
  styleUrls: ['./component-demo-2.component.css']
})
export class ComponentDemo2Component implements OnInit {
  disabledValue: boolean;
  textPlaceholder: string;
  textReadonly: boolean;
  constructor() {
  }
  ngOnInit() {
    this.disabledValue = false;
    this.textPlaceholder = '';
  }
  init() {
    this.disabledValue = true;
    console.log('init ');
  }
  isDisalbed(): boolean {
    return this.disabledValue;
  }
  // 切換 input readony
  changeReadonly(): void {
    this.textReadonly = !this.textReadonly;
  }
  // input added Placeholder
  appendPlaceholder(): void {
    this.textPlaceholder = 'input phone number';
  }
  // button change disabled
  changeDisable(): void {
    this.disabledValue = !this.disabledValue;
  }
  // show dom log
  consoleEvent(event: Event): void {
    console.log(event);
  }


}
