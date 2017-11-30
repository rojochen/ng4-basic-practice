import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child-2/child-2.component';
import { ErrorPageComponent } from '../share/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/child/parent', pathMatch: 'full' },
  { path: 'child/parent', component: ChildParentComponent },
  { path: '**', component: ErrorPageComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: [ChildParentComponent, Child1Component, Child2Component],
  exports: [RouterModule]
})
export class ChildModule { }
