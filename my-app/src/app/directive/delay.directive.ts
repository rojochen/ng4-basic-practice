// TemplateRef 和 ViewContainerRef
// 簡單結構型指令會從Angular 生成的<ng-template>元素中創建一個內嵌的視圖，並把這個視圖插入到一個視圖容器中，緊挨著本指令原來的宿主元素<p>（譯註：注意不是子節點，而是兄弟節點）。
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
// 可以使用TemplateRef取得<ng-template>的內容，並通過ViewContainerRef來訪問這個視圖容器。
@Directive({
  selector: '[appDelay]'
})

export class DelayDirective {
  templateRef: TemplateRef<any>;
  viewContainerRef: ViewContainerRef;
  constructor() { }

}
