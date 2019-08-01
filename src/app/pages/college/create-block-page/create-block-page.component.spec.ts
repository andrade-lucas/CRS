import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlockPageComponent } from './create-block-page.component';

describe('CreateBlockPageComponent', () => {
  let component: CreateBlockPageComponent;
  let fixture: ComponentFixture<CreateBlockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBlockPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
