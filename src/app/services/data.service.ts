import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public url: String = 'https://localhost:5001';

  constructor(public httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<User[]>(`${this.url}/v1/users`);
  }

  getUserById(id: Number) {
    return this.httpClient.get<User>(`${this.url}/v1/users/${id}`);
  }
}
