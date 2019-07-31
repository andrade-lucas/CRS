import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public url: String = 'http://localhost';

  constructor(private httpClient: HttpClient) {
  }

  public post(data: User) {
    return this.httpClient.post(`${this.url}/v1/auth/login`, data);
  }
}
