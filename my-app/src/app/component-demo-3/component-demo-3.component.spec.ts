import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo3Component } from './component-demo-3.component';

describe('ComponentDemo3Component', () => {
  let component: ComponentDemo3Component;
  let fixture: ComponentFixture<ComponentDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
