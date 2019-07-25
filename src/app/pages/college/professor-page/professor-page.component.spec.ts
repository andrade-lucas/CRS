import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPageComponent } from './professor-page.component';

describe('ProfessorPageComponent', () => {
  let component: ProfessorPageComponent;
  let fixture: ComponentFixture<ProfessorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
