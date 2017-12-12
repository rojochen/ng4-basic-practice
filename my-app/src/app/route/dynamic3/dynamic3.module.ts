import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Dynamic3ParentComponent } from '../dynamic3/dynamic3-parent/dynamic3-parent.component';
const routes: Routes = [
  { path: 'dynamic3/parent', component: Dynamic3ParentComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Dynamic3ParentComponent],
  exports: [RouterModule]
})
export class Dynamic3Module { }
