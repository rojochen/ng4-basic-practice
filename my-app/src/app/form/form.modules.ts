import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDemo4Component } from './form-demo-4/form-demo-4.component';
import { FormDemo3Component } from './form-demo-3/form-demo-3.component';
import { FormDemo2Component } from './form-demo-2/form-demo-2.component';
import { FormDemo1Component } from './form-demo-1/form-demo-1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [FormDemo1Component, FormDemo2Component, FormDemo3Component, FormDemo4Component],
    imports: [CommonModule , FormsModule, ReactiveFormsModule],
    exports: [FormDemo1Component, FormDemo2Component, FormDemo3Component, FormDemo4Component]
})
export class FormDemoModule {
}
