import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemo1Component } from './form-demo-1.component';

describe('FormDemo1Component', () => {
  let component: FormDemo1Component;
  let fixture: ComponentFixture<FormDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
