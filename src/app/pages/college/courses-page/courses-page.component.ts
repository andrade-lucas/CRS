import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Observable } from 'rxjs';
import { GetCourse } from 'src/app/models/getCourses.model';
import { getCollege } from 'src/app/models/getColleges.model';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses$: Observable<GetCourse[]>;

  constructor(private service: CourseService) {
    this.courses$ = this.service.get();
   }

  ngOnInit() {
  }

}
