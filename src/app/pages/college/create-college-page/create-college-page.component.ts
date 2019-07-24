import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-college-page',
  templateUrl: './create-college-page.component.html',
  styleUrls: ['./create-college-page.component.css']
})
export class CreateCollegePageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(private router: Router, private service: CollegeService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
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
  }

  submit() {
    this.busy = true;
    this.service.post(this.form.value).subscribe(
      (data: any) => {
        this.busy = false;
        if (data.status) {
          this.toastr.success(data.message, 'Sucesso');
          this.router.navigate(['/colleges']);
        }
        else
          this.toastr.error(data.message, 'Erro');
      },
      (err) => {
        console.log(err);
        this.busy = false;
      }
    )
  }
}
