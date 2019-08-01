import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { CanActivate, Router } from '@angular/router';
import { Security } from '../utils/security.util';
import { AppHeader } from '../utils/header.util';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate {

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

  public post(data: User) {
    return this.httpClient.post(`${AppHeader.url}/auth/login`, data);
  }

  public refreshToken() {
    return this.httpClient.post(`${AppHeader.url}/auth/refreshToken`, null, { headers: AppHeader.composeHeader() });
  }
}
