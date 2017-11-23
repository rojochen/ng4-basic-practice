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
import { LastnameUppercasePipe } from './pipe/lastname-uppercase.pipe';
import { PipeDemo1Component } from './pipe/pipe-demo-1/pipe-demo-1.component';
import { PipeDemo2Component } from './pipe/pipe-demo-2/pipe-demo-2.component';
import { FilterNamePipe } from './pipe/filter-name.pipe';

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
    LastnameUppercasePipe,
    PipeDemo1Component,
    PipeDemo2Component,
    FilterNamePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
