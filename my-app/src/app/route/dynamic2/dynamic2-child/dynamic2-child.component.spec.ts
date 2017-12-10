import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamic2ChildComponent } from './dynamic2-child.component';

describe('Dynamic2ChildComponent', () => {
  let component: Dynamic2ChildComponent;
  let fixture: ComponentFixture<Dynamic2ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamic2ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamic2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
