import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamic2ParentComponent } from './dynamic2-parent.component';

describe('Dynamic2ParentComponent', () => {
  let component: Dynamic2ParentComponent;
  let fixture: ComponentFixture<Dynamic2ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamic2ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamic2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
