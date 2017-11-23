import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAppCollar]'
})
export class AppCollarDirective {
  @Input() appAppCollar = 0;
  @Output() result = new EventEmitter<number>();
  @HostListener('click') onClick() {
    this.appAppCollar++;
    this.result.emit(this.appAppCollar);
  }
  constructor() { }

}
