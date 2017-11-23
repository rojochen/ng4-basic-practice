/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';
// ElementRef注入到指令構造函數中。這樣代碼就可以訪問 DOM 元素了。
// Input將數據從綁定表達式傳達到指令中。
// HostListener 是屬性裝飾器，用來為宿主元素添加事件監聽。
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;
  @Input('appHighlight') highlightColor: string;
  @HostBinding('style.color') color: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
