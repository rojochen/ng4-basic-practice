import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemo2Component } from './directive-demo-2.component';

describe('DirectiveDemo2Component', () => {
  let component: DirectiveDemo2Component;
  let fixture: ComponentFixture<DirectiveDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
