import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/services/college.service';
import { Observable } from 'rxjs';
import { getCollege } from 'src/app/models/getColleges.model';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css']
})
export class CreateCoursePageComponent implements OnInit {
  public form: FormGroup;
  public colleges$: Observable<getCollege[]>;

  constructor(private collegeService: CollegeService, private router: Router, private service: CourseService,
      private toastr: ToastrService, private fb: FormBuilder
    ) {
    this.colleges$ = this.collegeService.get();

    this.form = this.fb.group({
      description: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.required
      ])],
      idCollege: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  submit() {
    this.service.post(this.form.value).subscribe(
      (data: any) => {
        if (data.status) {
          this.toastr.success(data.message, 'Sucesso');
          this.router.navigate(['/courses']);
        }
        else
          this.toastr.error(data.message, 'Erro');
      }
    )
  }
}
