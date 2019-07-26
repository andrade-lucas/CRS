import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentsPageComponent } from './edit-equipments-page.component';

describe('EditEquipmentsPageComponent', () => {
  let component: EditEquipmentsPageComponent;
  let fixture: ComponentFixture<EditEquipmentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquipmentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
