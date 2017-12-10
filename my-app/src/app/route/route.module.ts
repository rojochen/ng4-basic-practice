import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

// 開啟Hash 模式需要import LocationStrategy & HashLocationStrategy from '@angular/common。
const openHashConfig = { provide: LocationStrategy, useClass: HashLocationStrategy };
// 開啟 html5 模式需import LocationStrategy & PathLocationStrategy from '@angular/common。
const openHtml5Config = { provide: LocationStrategy, useClass: PathLocationStrategy };
// 如果想用module 自訂base url 需要import APP_BASE_HREF from '@angular/common ， 但 index.html 有<base href="/">就會無效。
const customBaseHref = { provide: APP_BASE_HREF, useValue: '/' };

// route module
import { BasicModule } from './basic/basic.module';
import { DynamicModule } from './dynamic/dynamic.module';
// share module
import { ShareModule } from './share/share.module';
// common route service
import { RouteService } from './service/route.service';

// ps 切換 route 記得把沒有用的給註解
@NgModule({
  imports: [
    CommonModule,
    BasicModule,
    DynamicModule,
    ShareModule
  ],
  providers: [openHashConfig, RouteService],
  declarations: [],
  exports: [BasicModule, DynamicModule, ShareModule] // ps 記得要換route
})
export class RouteModule { }
