import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentDemo1Component } from './component-demo-1/component-demo-1.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemo1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
