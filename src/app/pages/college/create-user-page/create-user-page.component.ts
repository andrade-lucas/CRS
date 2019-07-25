import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private router: Router, private service: UserService, private fb: FormBuilder, private toastr: ToastrService) {
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
        Validators.minLength(11),
        Validators.maxLength(14),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(160),
        Validators.required
      ])],
      password:['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      phone: [''],
      status: ['', Validators.required],
      image: ['']
    });
   }

  ngOnInit() {
  }

  submit() {
    this.service.post(this.form.value).subscribe(
      (data: any) => {
        if (data.status) {
          this.toastr.success(data.message, 'Sucesso');
          this.router.navigate(['/users']);
        }
        else
          this.toastr.error(data.message, 'Erro');
      }
    )
  }
}
