import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'q';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(private service: AuthService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    const token = Security.getToken();
    if (token) {
      // this.service.refreshToken().subscribe(
      //   (data: any) => {
      //     if (data.status) {
      //       localStorage.setItem('crs.token', data.accessToken);
      //     }
      //     else
      //       this.toastr.error(data.message, 'Erro');
      //   },
      //   (err) => {
      //     localStorage.clear();
      //   }
      // )
    }
  }

  submit() {
    this.busy = true;
    this.service.post(this.form.value).subscribe(
      (data: any) => {
        this.busy = false;
        if (data.status) {
          this.toastr.success(data.message, 'Sucesso');
          this.setUser(data.user.data, data.accessToken)
        }
        else
          this.toastr.error(data.message, 'Erro');
      }
    )
  }

  setUser(user, token) {
    Security.set(user, token);
    this.router.navigate(['/']);
  }
}
