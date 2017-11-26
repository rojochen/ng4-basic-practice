import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemo4Component } from './form-demo-4.component';

describe('FormDemo4Component', () => {
  let component: FormDemo4Component;
  let fixture: ComponentFixture<FormDemo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
