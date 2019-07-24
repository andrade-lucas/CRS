import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-colleges-page',
  templateUrl: './colleges-page.component.html',
  styleUrls: ['./colleges-page.component.css']
})
export class CollegesPageComponent implements OnInit {
  public colleges$: Observable<any[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.colleges$ = this.data.getColleges();
  }

}
