import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo5Component } from './component-demo-5.component';

describe('ComponentDemo5Component', () => {
  let component: ComponentDemo5Component;
  let fixture: ComponentFixture<ComponentDemo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
