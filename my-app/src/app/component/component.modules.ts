import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DirectiveDemo1Component } from './../directive/directive-demo-1/directive-demo-1.component';
import { ComponentDemo3Component } from './component-demo-3/component-demo-3.component';
import { NgModule } from '@angular/core';
import { ComponentDemo1Component } from './component-demo-1/component-demo-1.component';
import { ComponentDemo2Component } from './component-demo-2/component-demo-2.component';
import { ComponentDemo4Component } from './component-demo-4/component-demo-4.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
     exports: [
        ComponentDemo1Component,
        ComponentDemo2Component,
        ComponentDemo3Component,
        ComponentDemo3Component,
        ComponentDemo4Component],
    declarations: [
        ComponentDemo1Component,
        ComponentDemo2Component,
        ComponentDemo3Component,
        ComponentDemo3Component,
        ComponentDemo4Component],
})
export class ComponentModule {}
