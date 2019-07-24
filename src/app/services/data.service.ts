import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(public httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<any[]>('https://localhost:5001/v1/users');
  }
}
