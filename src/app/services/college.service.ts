import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getCollege } from '../models/getColleges.model';
import { College } from '../models/college.model';
import { AppHeader } from '../utils/header.util';

@Injectable({
    providedIn: 'root'
})

export class CollegeService {

    constructor(public httpClient: HttpClient) {
    }

    get() {
        return this.httpClient.get<getCollege[]>(`${AppHeader.url}/colleges`, { headers: AppHeader.composeHeader() });
    }

    getById(id: String) {
        return this.httpClient.get<College>(`${AppHeader.url}/colleges/${id}`, { headers: AppHeader.composeHeader() });
    }

    post(data: any) {
        return this.httpClient.post(`${AppHeader.url}/colleges`, data, { headers: AppHeader.composeHeader() });
    }

    put(data: any) {
        return this.httpClient.put(`${AppHeader.url}/colleges`, data, { headers: AppHeader.composeHeader() });
    }

    delete(id: String) {
        return this.httpClient.delete(`${AppHeader.url}/colleges/${id}`, { headers: AppHeader.composeHeader() });
    }
}
