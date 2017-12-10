import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DynamicParentComponent } from './dynamic-parent/dynamic-parent.component';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';

const routes: Routes = [
  { path: 'dynamic/parent', component: DynamicParentComponent },
  { path: 'dynamic/child/:id', component: DynamicChildComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DynamicParentComponent, DynamicChildComponent],
  exports: [RouterModule]
})
export class DynamicModule { }
