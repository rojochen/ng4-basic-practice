import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemo1Component } from './route-demo-1.component';

describe('RouteDemo1Component', () => {
  let component: RouteDemo1Component;
  let fixture: ComponentFixture<RouteDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
