import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetEquipments } from 'src/app/models/getEquipments.model';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipments-page',
  templateUrl: './equipments-page.component.html'
})
export class EquipmentsPageComponent implements OnInit {
  public equipments$: Observable<GetEquipments[]>;

  constructor(private service: EquipmentService) {
    this.equipments$ = service.get();
  }

  ngOnInit() {
  }

}
