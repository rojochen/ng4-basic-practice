import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDemo4Component } from './service-demo-4.component';

describe('ServiceDemo4Component', () => {
  let component: ServiceDemo4Component;
  let fixture: ComponentFixture<ServiceDemo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDemo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
