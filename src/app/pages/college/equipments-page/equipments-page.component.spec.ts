import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsPageComponent } from './equipments-page.component';

describe('EquipmentsPageComponent', () => {
  let component: EquipmentsPageComponent;
  let fixture: ComponentFixture<EquipmentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
