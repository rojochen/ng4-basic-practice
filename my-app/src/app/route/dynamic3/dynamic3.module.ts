import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Dynamic3ParentComponent } from '../dynamic3/dynamic3-parent/dynamic3-parent.component';
import { Dynamic3ChildComponent } from '../dynamic3/dynamic3-child/dynamic3-child.component';
const routes: Routes = [
  { path: 'dynamic3/parent', component: Dynamic3ParentComponent },
  { path: 'dynamic3/child/:id', component: Dynamic3ChildComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Dynamic3ParentComponent, Dynamic3ChildComponent],
  exports: [RouterModule]
})
export class Dynamic3Module { }
