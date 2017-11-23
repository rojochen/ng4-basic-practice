import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemo1Component } from './directive-demo-1.component';

describe('DirectiveDemo1Component', () => {
  let component: DirectiveDemo1Component;
  let fixture: ComponentFixture<DirectiveDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
