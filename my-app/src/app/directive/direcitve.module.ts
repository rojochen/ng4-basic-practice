import { AppCollarDirective } from './app-collar.directive';
import { CommonModule } from '@angular/common';
import { DirectiveDemo3Component } from './directive-demo-3/directive-demo-3.component';
import { DirectiveDemo2Component } from './directive-demo-2/directive-demo-2.component';
import { DirectiveDemo1Component } from './directive-demo-1/directive-demo-1.component';
import { NgModule } from '@angular/core';
import { DelayDirective } from './delay.directive';
import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './highlight2.directive';
@NgModule({
    declarations: [
        DirectiveDemo1Component,
        DirectiveDemo2Component,
        DirectiveDemo3Component,
        AppCollarDirective,
        DelayDirective,
        HighlightDirective,
        Highlight2Directive
        ],
    imports: [
        CommonModule
    ],
    exports: [
        DirectiveDemo1Component,
        DirectiveDemo2Component,
        DirectiveDemo3Component,
        AppCollarDirective,
        DelayDirective,
        HighlightDirective,
        Highlight2Directive
    ]
})
export class DirecitveModule {}
