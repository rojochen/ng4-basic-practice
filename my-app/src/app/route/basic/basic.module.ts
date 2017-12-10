import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicParentComponent } from './basic-parent/basic-parent.component';
import { BasicChild1Component } from './basic-child-1/basic-child-1.component';
import { BasicChild2Component } from './basic-child-2/basic-child-2.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic/parent', pathMatch: 'full' },
  { path: 'basic/parent', component: BasicParentComponent },
  { path: 'basic/child1', component: BasicChild1Component },
  { path: 'basic/child2', component: BasicChild2Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: [BasicParentComponent, BasicChild1Component, BasicChild2Component],
  exports: [RouterModule]
})
export class BasicModule { }
