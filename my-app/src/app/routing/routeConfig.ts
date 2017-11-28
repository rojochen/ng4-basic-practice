import { RouteDemo1Component } from '../routing/route-demo-1/route-demo-1.component';
import { RouteDemo2Component } from '../routing/route-demo-2/route-demo-2.component';
import { RouteDemo3Component } from './route-demo-3/route-demo-3.component';
import { RouteDemo4Component } from './route-demo-4/route-demo-4.component';
import { RouteDemo5Component } from './route-demo-5/route-demo-5.component';
import { RouteDemo6Component } from './route-demo6/route-demo6.component';
import { RouteDemo7Component } from './route-demo7/route-demo7.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const Basic_Route_Config = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: RouteDemo1Component },
    { path: 'index', component: RouteDemo2Component },
    { path: '**', component: ErrorPageComponent }
];

export const Dynamic_Route_Config = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: RouteDemo3Component },
    { path: 'index/:username', component: RouteDemo4Component }, //動態切換page
    { path: '**', component: ErrorPageComponent }
];

export const Child_Route_Config = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',
      component: RouteDemo5Component,
      children: [
        { path: '', redirectTo: '/login/index', pathMatch: 'full' },
        { path: 'index', component: RouteDemo6Component },
        { path: 'index2', component: RouteDemo7Component },
        { path: '**', component: RouteDemo6Component }
      ]
     },
    { path: '**', component: ErrorPageComponent }
];
