import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';
import { CourseService } from 'src/app/services/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { GetCourse } from 'src/app/models/getCourses.model';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-create-professor-page',
  templateUrl: './create-professor-page.component.html',
  styleUrls: ['./create-professor-page.component.css']
})
export class CreateProfessorPageComponent implements OnInit {
  public form: FormGroup;
  public courses$: Observable<GetCourse[]>;

  constructor(private router: Router, private service: ProfessorService, private courseService: CourseService,
      private fb: FormBuilder, private toastr: ToastrService
    ) {
      this.courses$ = this.courseService.get();

      this.form = this.fb.group({
        firstName: ['', Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.required
        ])],
        lastName: ['', Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.required
        ])],
        document: ['', Validators.compose([
          Validators.min(14),
          Validators.maxLength(14),
          Validators.required,
          CustomValidator.isCpf()
        ])],
        email: ['', Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(160),
          Validators.required,
          CustomValidator.EmailValidator
        ])],
        phone: [''],
        idCourse: ['', Validators.required],
        status: ['', Validators.required]
      });
     }

  ngOnInit() {
  }

  submit() {
    this.service.post(this.form.value).subscribe(
      (data: any) => {
        if (data.status) {
          this.toastr.success(data.message, 'Sucesso');
          this.router.navigate(['/professors']);
        }
        else
          this.toastr.error(data.message, 'Erro');
      }
    )
  }
}
