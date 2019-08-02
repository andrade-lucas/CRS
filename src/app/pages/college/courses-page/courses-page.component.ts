import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Observable } from 'rxjs';
import { GetCourse } from 'src/app/models/getCourses.model';
import { ConfirmDialogService } from 'src/app/services/confirmDialog.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses$: Observable<GetCourse[]>;
  public id: String;

  constructor(private service: CourseService, private dialog: ConfirmDialogService) {
    this.courses$ = this.service.get();
   }

  ngOnInit() {
  }

  delete(id: string) {
    this.dialog.confirmThis(this.service, id);
  }
}
