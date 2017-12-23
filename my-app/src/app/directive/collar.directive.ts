import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCollar]'
})
export class CollarDirective {
  count: number = 0;
  @Output() result = new EventEmitter<number>();
  @HostListener('click') onClick() {
    this.count++;
    this.result.emit(this.count);
  }
  constructor() { }

}
