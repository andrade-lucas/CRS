import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment.model';
import { GetEquipments } from '../models/getEquipments.model';
import { AppHeader } from '../utils/header.util';

@Injectable({
  providedIn: 'root'
})

export class EquipmentService {

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get<GetEquipments[]>(`${AppHeader.url}/equipments`, { headers: AppHeader.composeHeader() });
  }

  getById(id: String) {
    return this.httpClient.get<Equipment>(`${AppHeader.url}/equipments/${id}`, { headers: AppHeader.composeHeader() });
  }

  post(data: Equipment) {
    return this.httpClient.post(`${AppHeader.url}/equipments`, data, { headers: AppHeader.composeHeader() });
  }

  put(data: Equipment) {
    return this.httpClient.put(`${AppHeader.url}/equipments`, data, { headers: AppHeader.composeHeader() });
  }

  delete(id: string) {
    return this.httpClient.delete(`${AppHeader.url}/equipments/${id}`, { headers: AppHeader.composeHeader() });
  }
}
