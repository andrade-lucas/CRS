import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProfessors } from 'src/app/models/getProfessors.model';
import { ProfessorService } from 'src/app/services/professor.service';
import { ConfirmDialogService } from 'src/app/services/confirmDialog.service';

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrls: ['./professor-page.component.css']
})
export class ProfessorPageComponent implements OnInit {
  public professors$: Observable<GetProfessors[]>;

  constructor(private service: ProfessorService, private dialog: ConfirmDialogService) {
    this.professors$ = service.get();
   }

  ngOnInit() {
  }

  delete(id: string) {
    this.dialog.confirmThis(this.service, id);
    this.refresh();
  }

  private refresh() {
    this.professors$ = this.service.get();
  }
}
