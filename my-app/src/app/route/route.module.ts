import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 開啟Hash 模式需要import LocationStrategy & HashLocationStrategy from '@angular/common。
const openHashConfig = { provide: LocationStrategy, useClass: HashLocationStrategy };
// 開啟 html5 模式需import LocationStrategy & PathLocationStrategy from '@angular/common。
const openHtml5Config = { provide: LocationStrategy, useClass: PathLocationStrategy };
// 如果想用module 自訂base url 需要import APP_BASE_HREF from '@angular/common ， 但 index.html 有<base href="/">就會無效。
const customBaseHref = { provide: APP_BASE_HREF, useValue: '/' };

// route module
import { BasicModule } from './basic/basic.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { Dynamic2Module } from './dynamic2/dynamic2.module';
import { Dynamic3Module } from './dynamic3/dynamic3.module';

// common route service;
import { RouteService } from './service/route.service';

const routes: Routes = [
  { path: '', redirectTo: '/basic/parent', pathMatch: 'full' }, // 預設頁面
  { path: '**', redirectTo: '/404' } // erro page
];

// 只有RootRoute才可以設定的config
// enableTracing makes the router log all its internal events to the console.
// useHash enables the location strategy that uses the URL fragment instead of the history API.
// initialNavigation disables the initial navigation.
// errorHandler provides a custom error handler.
// preloadingStrategy configures a preloading strategy (see PreloadAllModules).
// onSameUrlNavigation configures how the router handles navigation to the current URL. See ExtraOptions for more details.
const RootRouteSettingConfig = { enableTracing: true };

@NgModule({
  imports: [
    CommonModule,
    BasicModule,
    DynamicModule,
    Dynamic2Module,
    Dynamic3Module,
    RouterModule.forRoot(
      routes,
      RootRouteSettingConfig
    )
  ],
  providers: [
    openHashConfig, // open Hash
    // openHtml5Dynamic3ParentComponentDynamic3ChildComponentConfig, // open HTML5
    RouteService],
  declarations: [],
  exports: [RouterModule]
})
export class RouteModule { }
