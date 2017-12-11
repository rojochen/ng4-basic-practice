import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDemo3Component } from './service-demo-3.component';

describe('ServiceDemo3Component', () => {
  let component: ServiceDemo3Component;
  let fixture: ComponentFixture<ServiceDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
