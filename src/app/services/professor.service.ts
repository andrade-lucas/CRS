import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetProfessors } from './getProfessors.model';
import { Professor } from '../models/professor.model';

@Injectable({
    providedIn: 'root'
})

export class ProfessorService {
    public url: String = 'http://localhost:5000';

    constructor(private httpClient: HttpClient) {
    }

    get() {
        return this.httpClient.get<GetProfessors[]>(`${this.url}/v1/professors`);
    }

    getById(id: String) {
        return this.httpClient.get<Professor>(`${this.url}/v1/professors/${id}`);
    }

    post(data: Professor) {
        return this.httpClient.post(`${this.url}/v1/professors`, data);
    }

    put(data: Professor) {
        return this.httpClient.put(`${this.url}/v1/professors`, data);
    }
}