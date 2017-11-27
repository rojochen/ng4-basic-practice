import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemo3Component } from './route-demo-3.component';

describe('RouteDemo3Component', () => {
  let component: RouteDemo3Component;
  let fixture: ComponentFixture<RouteDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
