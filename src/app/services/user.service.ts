import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetUsers } from '../models/getUsers.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public url: String = 'http://localhost:5000';

  constructor(public httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get<GetUsers[]>(`${this.url}/v1/users`);
  }

  getById(id: String) {
    return this.httpClient.get<User>(`${this.url}/v1/users/${id}`);
  }

  post(data: any) {
    return this.httpClient.post(`${this.url}/v1/users`, data);
  }
}
