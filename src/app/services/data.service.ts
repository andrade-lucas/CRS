import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(public httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<User[]>('https://localhost:5001/v1/users');
  }

  getUserById(id: Number) {
    return this.httpClient.get<any>('https://localhost:5001/v1/users/' + id);
  }

  getColleges() {
    return this.httpClient.get<any[]>('https://localhost:5001/v1/colleges');
  }
}
