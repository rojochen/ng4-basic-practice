import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo6Component } from './component-demo-6.component';

describe('ComponentDemo6Component', () => {
  let component: ComponentDemo6Component;
  let fixture: ComponentFixture<ComponentDemo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
