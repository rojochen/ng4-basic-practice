import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChild2Component } from './basic-child-2.component';

describe('BasicChild2Component', () => {
  let component: BasicChild2Component;
  let fixture: ComponentFixture<BasicChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
