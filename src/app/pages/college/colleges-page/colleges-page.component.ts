import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college.service';
import { Observable } from 'rxjs';
import { getCollege } from 'src/app/models/getColleges.model';

@Component({
  selector: 'app-colleges-page',
  templateUrl: './colleges-page.component.html',
  styleUrls: ['./colleges-page.component.css']
})
export class CollegesPageComponent implements OnInit {
  public colleges$: Observable<getCollege[]>;

  constructor(private data: CollegeService) { }

  ngOnInit() {
    this.colleges$ = this.data.get();
  }

}
