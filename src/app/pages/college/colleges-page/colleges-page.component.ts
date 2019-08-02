import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college.service';
import { Observable } from 'rxjs';
import { getCollege } from 'src/app/models/getColleges.model';
import { ConfirmDialogService } from 'src/app/services/confirmDialog.service';

@Component({
  selector: 'app-colleges-page',
  templateUrl: './colleges-page.component.html',
  styleUrls: ['./colleges-page.component.css']
})
export class CollegesPageComponent implements OnInit {
  public colleges$: Observable<getCollege[]>;
  public busy = false;

  constructor(private service: CollegeService, private dialog: ConfirmDialogService) { }

  ngOnInit() {
    this.colleges$ = this.service.get();
  }

  delete(id: string) {
    this.dialog.confirmThis(this.service, id);
  }
}
