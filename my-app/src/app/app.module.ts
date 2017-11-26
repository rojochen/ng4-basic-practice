import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { LogService } from './service/log.service';
import { ServiceDemo1Component } from './service/service-demo-1/service-demo-1.component';
import { UseFactory } from './service/use-factory';
import { ServiceDemo2Component } from './service/service-demo-2/service-demo-2.component';
import { ServiceDemo3Component } from './service/service-demo-3/service-demo-3.component';

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
    ServiceDemo1Component,
    ServiceDemo2Component,
    ServiceDemo3Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    { provide: LogService, useClass: LogService }, //可以使用簡潔的語法，直接使用LogService
    { provide: 'LogServiceAlias', useExisting: LogService },
    { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com' },
    { provide: 'UseFactory', useFactory: UseFactory, deps: [LogService] } //deps 工廠將取獲取deps 中指定類的實例
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
