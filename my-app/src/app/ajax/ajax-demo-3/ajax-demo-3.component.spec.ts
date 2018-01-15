import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxDemo3Component } from './ajax-demo-3.component';

describe('AjaxDemo3Component', () => {
  let component: AjaxDemo3Component;
  let fixture: ComponentFixture<AjaxDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
