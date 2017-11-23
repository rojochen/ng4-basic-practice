import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo7Component } from './component-demo-7.component';

describe('ComponentDemo7Component', () => {
  let component: ComponentDemo7Component;
  let fixture: ComponentFixture<ComponentDemo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
