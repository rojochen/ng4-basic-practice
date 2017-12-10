import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Dynamic2ParentComponent } from './dynamic2-parent/dynamic2-parent.component';
import { Dynamic2ChildComponent } from './dynamic2-child/dynamic2-child.component';

// import service
import { Dynamic2Service } from './dynamic2.service';
const routes: Routes = [
  { path: 'dynamic2/parent', component: Dynamic2ParentComponent },
  { path: 'dynamic2/child/:id', component: Dynamic2ChildComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Dynamic2ParentComponent, Dynamic2ChildComponent],
  providers: [Dynamic2Service],
  exports: [RouterModule]
})
export class Dynamic2Module { }
