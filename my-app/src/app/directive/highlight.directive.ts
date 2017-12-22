/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';
// ElementRef注入到指令構造函數中。這樣代碼就可以訪問 DOM 元素了。
// Input將數據從綁定表達式傳達到指令中。
// HostListener 是屬性裝飾器，用來為宿主元素添加事件監聽。
/**
 * selector?: string; // 用於定義組件在HTML代碼中匹配的標籤
 * inputs?: string[]; // 指令的輸入屬性
 * outputs?: string[]; // 指令的輸出屬性
 * host?: { [key: string]: string }; // 綁定宿主的屬性，事件等
 * providers?: Provider[]; // 設置指令及其子指令可以用的服務
 * exportAs?: string; // 導出指令，使得可以在模板中調用
 * queries?: { [key: string]: any }; // 設置指令的查詢條件
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // ElementRef注入到指令構造函數中。這樣代碼就可以訪問 DOM 元素了。
  // HostListener 是屬性裝飾器，用來為宿主元素添加事件監聽。
  // HostBinding 是屬性裝飾器，用來動態設置宿主元素的屬性值。
  
  constructor(private el: ElementRef) { }

  @Input() defaultColor: string; // 沒有指定將預設跑這一個取得父值
  @Input('appHighlight') highlightColor: string; // 指定[appHighlight] 接收父傳來的值

  // HostBinding 是屬性裝飾器，用來動態設置宿主元素的屬性值。
  @HostBinding('style.color') color: string;

  // 監聽onMouseEnter 事件
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  // 監聽 mouseleave 事件
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

   highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
