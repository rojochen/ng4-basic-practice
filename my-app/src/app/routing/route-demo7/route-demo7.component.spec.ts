import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemo7Component } from './route-demo7.component';

describe('RouteDemo7Component', () => {
  let component: RouteDemo7Component;
  let fixture: ComponentFixture<RouteDemo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
