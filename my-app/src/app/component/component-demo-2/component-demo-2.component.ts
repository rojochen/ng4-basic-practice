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
  changeReadonly(): void {
    this.textReadonly = true;
  }
  appendPlaceholder(): void {
    this.textPlaceholder = 'input phone number';
  }
  changeDisable(): void {
    this.disabledValue = !this.disabledValue;
  }
  consoleEvent(event: Event): void {
    console.log(event);
  }
  ngOnInit() {
  }

}
