import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemo2Component } from './route-demo-2.component';

describe('RouteDemo2Component', () => {
  let component: RouteDemo2Component;
  let fixture: ComponentFixture<RouteDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
