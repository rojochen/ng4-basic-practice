import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChild1Component } from './basic-child-1.component';

describe('BasicChild1Component', () => {
  let component: BasicChild1Component;
  let fixture: ComponentFixture<BasicChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
