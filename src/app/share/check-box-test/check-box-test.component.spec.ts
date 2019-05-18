import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxTestComponent } from './check-box-test.component';

describe('CheckBoxTestComponent', () => {
  let component: CheckBoxTestComponent;
  let fixture: ComponentFixture<CheckBoxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
