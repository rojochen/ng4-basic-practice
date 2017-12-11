import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamic3ParentComponent } from './dynamic3-parent.component';

describe('Dynamic3ParentComponent', () => {
  let component: Dynamic3ParentComponent;
  let fixture: ComponentFixture<Dynamic3ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamic3ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamic3ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
