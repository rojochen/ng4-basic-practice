import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicParentComponent } from './basic-parent/basic-parent.component';
import { BasicChild1Component } from './basic-child-1/basic-child-1.component';
import { BasicChild2Component } from './basic-child-2/basic-child-2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BasicParentComponent, BasicChild1Component, BasicChild2Component]
})
export class BasicModule { }
