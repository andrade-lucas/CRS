import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { CollegeService } from 'src/app/services/college.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { Observable } from 'rxjs';
import { getCollege } from 'src/app/models/getColleges.model';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html'
})
export class EditCoursePageComponent implements OnInit {
  public form: FormGroup;
  public id: String;
  public colleges$: Observable<getCollege[]>;

  constructor(private router: Router, private service: CourseService, private collegeService: CollegeService,
      private toastr: ToastrService, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
        this.form = this.fb.group({
          id: ['', Validators.required],
          description: ['', Validators.compose([
            Validators.minLength(2),
            Validators.maxLength(60),
            Validators.required
          ])],
          idCollege: ['', Validators.required]
        });
      }

  ngOnInit() {
    this.colleges$ = this.collegeService.get();
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe(
      (data: Course) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['description'].setValue(data.description);
        this.form.controls['idCollege'].setValue(data.idCollege);
      }
    )
  }

  submit() {
    this.service.put(this.form.value).subscribe(
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
