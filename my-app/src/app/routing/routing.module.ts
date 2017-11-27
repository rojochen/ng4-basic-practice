import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common'; //open hash need import LocationStrategy, HashLocationStrategy
import { FormsModule } from '@angular/forms';                                                                 //open HTML5 nees import LocationStrategy, PathLocationStrategy, APP_BASE_HREF
import { Routes, Route, RouterModule } from '@angular/router';
import { RouteDemo1Component } from '../routing/route-demo-1/route-demo-1.component';
import { RouteDemo2Component } from '../routing/route-demo-2/route-demo-2.component';
import { RouteDemo3Component } from './route-demo-3/route-demo-3.component';
import { RouteDemo4Component } from './route-demo-4/route-demo-4.component';
import { RouteDemo5Component } from './route-demo-5/route-demo-5.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: RouteDemo1Component },
  { path: 'index', component: RouteDemo2Component },
  { path: '**', component: RouteDemo3Component }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy } //open hash inject porvide
    { provide: LocationStrategy, useClass: PathLocationStrategy }, //open html5 inject porvide
    { provide: APP_BASE_HREF, useValue: '/' } //open html5 inject porvide
  ],
  exports: [RouterModule],
  declarations: [RouteDemo1Component, RouteDemo2Component, RouteDemo3Component, RouteDemo4Component, RouteDemo5Component]
})
export class RoutingModule { }
