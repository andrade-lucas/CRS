import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetEquipments } from 'src/app/models/getEquipments.model';
import { EquipmentService } from 'src/app/services/equipment.service';
import { ConfirmDialogService } from 'src/app/services/confirmDialog.service';

@Component({
  selector: 'app-equipments-page',
  templateUrl: './equipments-page.component.html'
})
export class EquipmentsPageComponent implements OnInit {
  public equipments$: Observable<GetEquipments[]>;

  constructor(private service: EquipmentService, private dialog: ConfirmDialogService) {
    this.equipments$ = this.service.get();
  }

  ngOnInit() {
  }

  delete(id: string) {
    this.dialog.confirmThis(this.service, id);
  }
}
