import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicParentComponent } from './basic-parent.component';

describe('BasicParentComponent', () => {
  let component: BasicParentComponent;
  let fixture: ComponentFixture<BasicParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
