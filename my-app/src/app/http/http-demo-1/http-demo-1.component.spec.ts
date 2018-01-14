import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo1Component } from './http-demo-1.component';

describe('HttpDemo1Component', () => {
  let component: HttpDemo1Component;
  let fixture: ComponentFixture<HttpDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
