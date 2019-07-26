import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';
import { CourseService } from 'src/app/services/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Professor } from 'src/app/models/professor.model';
import { Observable } from 'rxjs';
import { GetCourse } from 'src/app/models/getCourses.model';

@Component({
  selector: 'app-edit-professor-page',
  templateUrl: './edit-professor-page.component.html',
  styleUrls: ['./edit-professor-page.component.css']
})
export class EditProfessorPageComponent implements OnInit {
  public form: FormGroup;
  public id: String;
  public courses$: Observable<GetCourse[]>;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private service: ProfessorService,
      private courseService: CourseService, private fb: FormBuilder, private toastr: ToastrService
    ) {
      this.courses$ = this.courseService.get();

      this.form = this.fb.group({
        id: ['', Validators.required],
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
          Validators.min(11),
          Validators.maxLength(14),
          Validators.required
        ])],
        email: ['', Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(160),
          Validators.required
        ])],
        phone: [''],
        idCourse: ['', Validators.required],
        status: ['', Validators.required]
      })
   }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe(
      (data: Professor) => {
        this.form.controls['id'].setValue(data.id);
        this.form.controls['firstName'].setValue(data.firstName);
        this.form.controls['lastName'].setValue(data.lastName);
        this.form.controls['document'].setValue(data.document);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['idCourse'].setValue(data.idCourse);
        this.form.controls['phone'].setValue(data.phone);
        this.form.controls['status'].setValue(data.status);
      }
    )
  }

  submit() {
    this.service.put(this.form.value).subscribe(
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
