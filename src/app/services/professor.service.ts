import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetProfessors } from '../models/getProfessors.model';
import { Professor } from '../models/professor.model';
import { AppHeader } from '../utils/header.util';

@Injectable({
    providedIn: 'root'
})

export class ProfessorService {

    constructor(private httpClient: HttpClient) {
    }

    get() {
        return this.httpClient.get<GetProfessors[]>(`${AppHeader.url}/professors`, { headers: AppHeader.composeHeader() });
    }

    getById(id: String) {
        return this.httpClient.get<Professor>(`${AppHeader.url}/professors/${id}`, { headers: AppHeader.composeHeader() });
    }

    post(data: Professor) {
        return this.httpClient.post(`${AppHeader.url}/professors`, data, { headers: AppHeader.composeHeader() });
    }

    put(data: Professor) {
        return this.httpClient.put(`${AppHeader.url}/professors`, data, { headers: AppHeader.composeHeader() });
    }
}