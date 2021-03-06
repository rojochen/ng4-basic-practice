import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicParentComponent } from './basic-parent/basic-parent.component';
import { BasicChild1Component } from './basic-child-1/basic-child-1.component';
import { BasicChild2Component } from './basic-child-2/basic-child-2.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'basic/parent', component: BasicParentComponent },
  { path: 'basic/child1', component: BasicChild1Component },
  { path: 'basic/child2', component: BasicChild2Component },
  { path: '404', component: ErrorPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasicParentComponent, BasicChild1Component, BasicChild2Component, ErrorPageComponent],
  exports: [RouterModule]
})
export class BasicRouteModule { }
