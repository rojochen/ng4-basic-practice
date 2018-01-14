import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo3Component } from './http-demo-3.component';

describe('HttpDemo3Component', () => {
  let component: HttpDemo3Component;
  let fixture: ComponentFixture<HttpDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
