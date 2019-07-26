import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment.model';
import { GetEquipments } from '../models/getEquipments.model';

@Injectable({
  providedIn: 'root'
})

export class EquipmentService {
  public url: String = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get<GetEquipments[]>(`${this.url}/v1/equipments`);
  }

  getById(id: String) {
    return this.httpClient.get<Equipment>(`${this.url}/v1/equipments/${id}`);
  }

  post (data: Equipment) {
    return this.httpClient.post(`${this.url}/v1/equipments`, data);
  }

  put (data: Equipment) {
    return this.httpClient.put(`${this.url}/v1/equipments`, data);
  }
}
