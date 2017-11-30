import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DynamicParentComponent } from './dynamic-parent/dynamic-parent.component';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dynamic/parent', pathMatch: 'full' },
  { path: 'dynamic/parent', component: DynamicParentComponent },
  { path: 'dynamic/child/:id', component: DynamicChildComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: [DynamicParentComponent, DynamicChildComponent],
  exports: [RouterModule]
})
export class DynamicModule { }
