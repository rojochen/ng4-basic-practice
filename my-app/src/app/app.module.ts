import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComponentDemo1Component } from './component-demo-1/component-demo-1.component';
import { ComponentDemo2Component } from './component-demo-2/component-demo-2.component';
import { ComponentDemo3Component } from './component-demo-3/component-demo-3.component';
import { ComponentDemo5Component } from './component-demo-5/component-demo-5.component';
import { ComponentDemo4Component } from './component-demo-4/component-demo-4.component';
import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './highlight2.directive';
import { ComponentDemo6Component } from './component-demo-6/component-demo-6.component';
import { AppCollarDirective } from './app-collar.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemo1Component,
    ComponentDemo2Component,
    ComponentDemo3Component,
    ComponentDemo5Component,
    ComponentDemo4Component,
    HighlightDirective,
    Highlight2Directive,
    ComponentDemo6Component,
    AppCollarDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
