// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//component
import { AppComponent } from './app.component';
import { ComponentDemo1Component } from './component/component-demo-1/component-demo-1.component';
import { ComponentDemo2Component } from './component/component-demo-2/component-demo-2.component';
import { ComponentDemo3Component } from './component/component-demo-3/component-demo-3.component';
import { ComponentDemo4Component } from './component/component-demo-4/component-demo-4.component';


import { DirectiveDemo1Component } from './directive/directive-demo-1/directive-demo-1.component';
import { DirectiveDemo2Component } from './directive/directive-demo-2/directive-demo-2.component';
import { LastnameUppercasePipe } from './pipe/lastname-uppercase.pipe';
import { PipeDemo1Component } from './pipe/pipe-demo-1/pipe-demo-1.component';
import { FilterNumberPipe } from './pipe/filter-name.pipe';
import { FormDemo1Component } from './form/form-demo-1/form-demo-1.component';
import { FormDemo2Component } from './form/form-demo-2/form-demo-2.component';
import { FormDemo3Component } from './form/form-demo-3/form-demo-3.component';
import { FormDemo4Component } from './form/form-demo-4/form-demo-4.component';
import { ServiceDemo1Component } from './service/service-demo-1/service-demo-1.component';
import { ServiceDemo2Component } from './service/service-demo-2/service-demo-2.component';
import { ServiceDiComponent } from './service-di/service-di.component';

// directive
import { HighlightDirective } from './directive//highlight.directive';
import { RanDomColorDirective } from './directive/ran-dom-color.directive';

// global service
import { ApiInterceptorService } from './interceptor/api-interceptor.service';
import { TimingInterceptorService } from './interceptor/timing-interceptor.service';


// route module
import { RouteModule } from './route/route.module';
import { ServiceDemo3Component } from './service/service-demo-3/service-demo-3.component';
import { MovieFilterPipe } from './pipe/movie-filter.pipe';
import { PipeDemo2Component } from './pipe/pipe-demo-2/pipe-demo-2.component';

import { AjaxDemo1Component } from './ajax/ajax-demo-1/ajax-demo-1.component';
import { AjaxDemo2Component } from './ajax/ajax-demo-2/ajax-demo-2.component';
 import { AjaxDemo3Component } from './ajax/ajax-demo-3/ajax-demo-3.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemo1Component,
    ComponentDemo2Component,
    ComponentDemo3Component,
    ComponentDemo4Component,
    HighlightDirective,
    DirectiveDemo1Component,
    DirectiveDemo2Component,
    LastnameUppercasePipe,
    PipeDemo1Component,
    PipeDemo2Component,
    FilterNumberPipe,
    FormDemo1Component,
    FormDemo2Component,
    FormDemo3Component,
    FormDemo4Component,
    ServiceDiComponent,
    ServiceDemo1Component,
    ServiceDemo2Component,
    ServiceDemo3Component,
    RanDomColorDirective,
    MovieFilterPipe,
    AjaxDemo1Component,
    AjaxDemo2Component,
    AjaxDemo3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouteModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ApiInterceptorService,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TimingInterceptorService,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
