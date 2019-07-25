import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProfessors } from 'src/app/services/getProfessors.model';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrls: ['./professor-page.component.css']
})
export class ProfessorPageComponent implements OnInit {
  public professors$: Observable<GetProfessors[]>;

  constructor(private service: ProfessorService) {
    this.professors$ = service.get();
   }

  ngOnInit() {
  }

}
