import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollegePageComponent } from './create-college-page.component';

describe('CreateCollegePageComponent', () => {
  let component: CreateCollegePageComponent;
  let fixture: ComponentFixture<CreateCollegePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCollegePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCollegePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
