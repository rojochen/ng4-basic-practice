import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo4Component } from './component-demo-4.component';

describe('ComponentDemo4Component', () => {
  let component: ComponentDemo4Component;
  let fixture: ComponentFixture<ComponentDemo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
