import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlockPageComponent } from './edit-block-page.component';

describe('EditBlockPageComponent', () => {
  let component: EditBlockPageComponent;
  let fixture: ComponentFixture<EditBlockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlockPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
