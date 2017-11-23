import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemo3Component } from './directive-demo-3.component';

describe('DirectiveDemo3Component', () => {
  let component: DirectiveDemo3Component;
  let fixture: ComponentFixture<DirectiveDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
