import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxDemo1Component } from './ajax-demo-1.component';

describe('AjaxDemo1Component', () => {
  let component: AjaxDemo1Component;
  let fixture: ComponentFixture<AjaxDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
