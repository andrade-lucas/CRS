import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { CanActivate, Router } from '@angular/router';
import { Security } from '../utils/security.util';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate {
  public url: String = 'http://localhost:5000';

  constructor(private httpClient: HttpClient, private router: Router) {
  }
  
  canActivate() {
    const token = Security.hasToken();
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  public composeHeader() {
    const token = Security.getToken();
    const headers = new HttpHeaders().set('authToken', `bearer ${token}`);
    return headers;
  }

  public post(data: User) {
    return this.httpClient.post(`${this.url}/v1/auth/login`, data);
  }

  public refreshToken() {
    return this.httpClient.post(`${this.url}/v1/auth/refreshToken`, null, { headers: this.composeHeader() });
  }
}
