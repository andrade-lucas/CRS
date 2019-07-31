import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public url: String = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
  }

  public composeHeader() {
    const token = localStorage.getItem('crs.token');
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
