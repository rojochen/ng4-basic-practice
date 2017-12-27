import { Directive, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appCollar]'
})
export class CollarDirective implements OnInit {
  count: number;
  // 子傳父
  @Output() result = new EventEmitter<number>();
  // 監聽click event
  @HostListener('click') onClick() {
    this.count++;
    this.result.emit(this.count);
  }
  constructor() { }
  ngOnInit() {
    this.count = this.count || 0;
  }
}
