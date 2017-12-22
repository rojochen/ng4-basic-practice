import { Directive, HostBinding, HostListener } from '@angular/core';
// ElementRef注入到指令構造函數中。這樣代碼就可以訪問 DOM 元素了。
// HostListener 是屬性裝飾器，用來為宿主元素添加事件監聽。
// HostBinding 是屬性裝飾器，用來動態設置宿主元素的屬性值。
@Directive({
  selector: '[appRanDomColor]'
})
export class RanDomColorDirective {
  // color list
  possibleColors: Array<string> = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') newColor() {
    // 用亂數取得 color list index
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    // 將取得的index取得該顏色
    this.color = this.borderColor = this.possibleColors[colorPick];
  }
  constructor() { }

}
