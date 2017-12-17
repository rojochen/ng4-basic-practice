import { NgModule } from '@angular/core';
import { PipeDemo1Component } from './pipe-demo-1/pipe-demo-1.component';
import { FilterNumberPipe } from './filter-name.pipe';
import { LastnameUppercasePipe } from './lastname-uppercase.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [PipeDemo1Component, FilterNumberPipe, LastnameUppercasePipe],
    imports: [FormsModule , CommonModule ],
    exports: [PipeDemo1Component, FilterNumberPipe, LastnameUppercasePipe]
})
export class PipeDemoModule {
}
