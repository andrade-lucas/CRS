import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipmentsPageComponent } from './create-equipments-page.component';

describe('CreateEquipmentsPageComponent', () => {
  let component: CreateEquipmentsPageComponent;
  let fixture: ComponentFixture<CreateEquipmentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEquipmentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquipmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
