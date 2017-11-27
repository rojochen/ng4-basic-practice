import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemo5Component } from './route-demo-5.component';

describe('RouteDemo5Component', () => {
  let component: RouteDemo5Component;
  let fixture: ComponentFixture<RouteDemo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
