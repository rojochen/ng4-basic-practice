import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, Route, RouterModule } from '@angular/router';


// 開啟Hash 模式需要import LocationStrategy & HashLocationStrategy from '@angular/common
const openHashConfig =  { provide: LocationStrategy, useClass: HashLocationStrategy };


// route module
import { BasicModule } from './basic/basic.module';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [openHashConfig],
  declarations: []
})
export class RouteModule { }
