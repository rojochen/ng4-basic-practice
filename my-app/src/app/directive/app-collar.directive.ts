import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAppCollar]'
})
export class AppCollarDirective {
  count: number = 0;
  @Output() result = new EventEmitter<number>();
  @HostListener('click') onClick() {
    this.count++;
    this.result.emit(this.count);
  }
  constructor() { }

}
