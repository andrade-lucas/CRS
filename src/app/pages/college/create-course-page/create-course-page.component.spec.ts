import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoursePageComponent } from './create-course-page.component';

describe('CreateCoursePageComponent', () => {
  let component: CreateCoursePageComponent;
  let fixture: ComponentFixture<CreateCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
