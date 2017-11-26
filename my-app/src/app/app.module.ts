import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComponentDemo1Component } from './component/component-demo-1/component-demo-1.component';
import { ComponentDemo2Component } from './component/component-demo-2/component-demo-2.component';
import { ComponentDemo3Component } from './component/component-demo-3/component-demo-3.component';
import { ComponentDemo4Component } from './component/component-demo-4/component-demo-4.component';
import { HighlightDirective } from './directive//highlight.directive';
import { Highlight2Directive } from './directive//highlight2.directive';
import { AppCollarDirective } from './app-collar.directive';
import { DelayDirective } from './directive/delay.directive';
import { DirectiveDemo1Component } from './directive/directive-demo-1/directive-demo-1.component';
import { DirectiveDemo2Component } from './directive/directive-demo-2/directive-demo-2.component';
import { DirectiveDemo3Component } from './directive/directive-demo-3/directive-demo-3.component';
import { LastnameUppercasePipe } from './pipe/lastname-uppercase.pipe';
import { PipeDemo1Component } from './pipe/pipe-demo-1/pipe-demo-1.component';
import { FilterNumberPipe } from './pipe/filter-name.pipe';
import { FormDemo1Component } from './form/form-demo-1/form-demo-1.component';
import { FormDemo2Component } from './form/form-demo-2/form-demo-2.component';
import { FormDemo3Component } from './form/form-demo-3/form-demo-3.component';
import { FormDemo4Component } from './form/form-demo-4/form-demo-4.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemo1Component,
    ComponentDemo2Component,
    ComponentDemo3Component,
    ComponentDemo4Component,
    HighlightDirective,
    Highlight2Directive,
    AppCollarDirective,
    DelayDirective,
    DirectiveDemo1Component,
    DirectiveDemo2Component,
    DirectiveDemo3Component,
    LastnameUppercasePipe,
    PipeDemo1Component,
    FilterNumberPipe,
    FormDemo1Component,
    FormDemo2Component,
    FormDemo3Component,
    FormDemo4Component
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
