import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetUsers } from '../models/getUsers.model';
import { User } from '../models/user.model';
import { AppHeader } from '../utils/header.util';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(public httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get<GetUsers[]>(`${AppHeader.url}/users`, { headers: AppHeader.composeHeader() });
  }

  getById(id: String) {
    return this.httpClient.get<User>(`${AppHeader.url}/users/${id}`, { headers: AppHeader.composeHeader() });
  }

  post(data: User) {
    return this.httpClient.post(`${AppHeader.url}/users`, data, { headers: AppHeader.composeHeader() });
  }

  put(data: User) {
    return this.httpClient.put(`${AppHeader.url}/users`, data, { headers: AppHeader.composeHeader() });
  }

  delete(id: String) {
    return this.httpClient.delete(`${AppHeader.url}/users/${id}`, { headers: AppHeader.composeHeader() });
  }
}
