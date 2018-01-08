import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemo2Component } from './pipe-demo-2.component';

describe('PipeDemo2Component', () => {
  let component: PipeDemo2Component;
  let fixture: ComponentFixture<PipeDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
