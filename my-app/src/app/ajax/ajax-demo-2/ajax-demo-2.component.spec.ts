import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxDemo2Component } from './ajax-demo-2.component';

describe('AjaxDemo2Component', () => {
  let component: AjaxDemo2Component;
  let fixture: ComponentFixture<AjaxDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
