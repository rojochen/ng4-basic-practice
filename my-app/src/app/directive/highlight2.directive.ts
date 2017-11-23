import { Directive, HostBinding, HostListener } from '@angular/core';
// HostListener 是屬性裝飾器，用來為宿主元素添加事件監聽。
// HostBinding 是屬性裝飾器，用來動態設置宿主元素的屬性值。
@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {
  possibleColors: Array<string> = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }
  constructor() { }

}
