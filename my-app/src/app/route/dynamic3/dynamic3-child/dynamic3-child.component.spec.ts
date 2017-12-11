import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamic3ChildComponent } from './dynamic3-child.component';

describe('Dynamic3ChildComponent', () => {
  let component: Dynamic3ChildComponent;
  let fixture: ComponentFixture<Dynamic3ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamic3ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamic3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
