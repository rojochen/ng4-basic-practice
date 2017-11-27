import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemo4Component } from './route-demo-4.component';

describe('RouteDemo4Component', () => {
  let component: RouteDemo4Component;
  let fixture: ComponentFixture<RouteDemo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
