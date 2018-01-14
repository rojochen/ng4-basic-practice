import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo2Component } from './http-demo-2.component';

describe('HttpDemo2Component', () => {
  let component: HttpDemo2Component;
  let fixture: ComponentFixture<HttpDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
