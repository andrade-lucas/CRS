import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesPageComponent } from './colleges-page.component';

describe('CollegesPageComponent', () => {
  let component: CollegesPageComponent;
  let fixture: ComponentFixture<CollegesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
