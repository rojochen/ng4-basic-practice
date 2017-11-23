import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemo1Component } from './pipe-demo-1.component';

describe('PipeDemo1Component', () => {
  let component: PipeDemo1Component;
  let fixture: ComponentFixture<PipeDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
