import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Observable } from 'rxjs';
import { GetCourse } from 'src/app/models/getCourses.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses$: Observable<GetCourse[]>;
  public id: String;

  constructor(private service: CourseService, private toastr: ToastrService) {
    this.courses$ = this.service.get();
   }

  ngOnInit() {
  }

  delete() {
    this.service.delete(this.id).subscribe(
      (data: any) => {
        if (data.status) {
          this.toastr.success(data.message, 'Sucesso');
          this.ngOnInit();
        }
        else
          this.toastr.error(data.message, 'Erro');
      }
    )
  }
}
