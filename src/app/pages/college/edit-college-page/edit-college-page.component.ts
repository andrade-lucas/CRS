import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-college-page',
  templateUrl: './edit-college-page.component.html',
  styleUrls: ['./edit-college-page.component.css']
})
export class EditCollegePageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  public id: String;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: CollegeService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.required
      ])],
      document: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(18),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(160)
      ])],
      phone: [''],
      image: ['']
    })
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.busy = true;
    this.service.getById(this.id).subscribe(
      (data: any) => {
        this.busy = false;
        this.form.controls['id'].setValue(data.id);
        this.form.controls['firstName'].setValue(data.firstName);
        this.form.controls['lastName'].setValue(data.lastName);
        this.form.controls['document'].setValue(data.document);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['phone'].setValue(data.phone);
        this.form.controls['image'].setValue(data.image);
      },
      (err) => {
        console.log(err);
        this.busy = false;
      }
    )
  }

  submit() {
    this.busy = true;
    this.service.put(this.form.value).subscribe(
      (data: any) => {
        this.busy = false;
        if (data.status) {
          this.toastr.success(data.message, 'Sucesso');
          this.router.navigate(['/colleges']);
        }
        else {
          this.toastr.error(data.message, 'Erro');
        }
      }
    )
  }

}
