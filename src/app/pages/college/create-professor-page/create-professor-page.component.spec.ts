import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfessorPageComponent } from './create-professor-page.component';

describe('CreateProfessorPageComponent', () => {
  let component: CreateProfessorPageComponent;
  let fixture: ComponentFixture<CreateProfessorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfessorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfessorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
