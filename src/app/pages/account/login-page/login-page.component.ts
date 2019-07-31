import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'q';
import { Router } from '@angular/router';

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
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('crs.token');
    if (token) {
      // this.service.refreshToken().subscribe(
      //   (data: any) => {
      //     if (data.authenticated) {
      //       localStorage.setItem('crs.token', data.accessToken);
      //     }
      //     else
      //       this.toastr.error(data.message, "Erro ao autenticar");
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
        if (data.authenticated) {
          localStorage.setItem('crs.token', data.accessToken);
          this.toastr.success(data.message, 'Sucesso');
          this.router.navigate(['/']);
        }
        else
          this.toastr.error(data.message, "Erro ao autenticar");
      }
    )
  }
}
