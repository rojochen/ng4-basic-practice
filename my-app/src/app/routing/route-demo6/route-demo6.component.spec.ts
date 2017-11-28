import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemo6Component } from './route-demo6.component';

describe('RouteDemo6Component', () => {
  let component: RouteDemo6Component;
  let fixture: ComponentFixture<RouteDemo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemo6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
