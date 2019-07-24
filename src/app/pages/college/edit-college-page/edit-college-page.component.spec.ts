import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollegePageComponent } from './edit-college-page.component';

describe('EditCollegePageComponent', () => {
  let component: EditCollegePageComponent;
  let fixture: ComponentFixture<EditCollegePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCollegePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCollegePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
