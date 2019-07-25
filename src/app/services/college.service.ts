import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getCollege } from '../models/getColleges.model';
import { College } from '../models/college.model';

@Injectable({
    providedIn: 'root'
})

export class CollegeService {
    public url: String = 'http://localhost:5000';

    constructor(public httpClient: HttpClient) {
    }

    get() {
        return this.httpClient.get<getCollege[]>(`${this.url}/v1/colleges`);
    }

    getById(id: String) {
        return this.httpClient.get<College>(`${this.url}/v1/colleges/${id}`);
    }

    post(data: any) {
        return this.httpClient.post(`${this.url}/v1/colleges`, data);
    }

    put(data: any) {
        return this.httpClient.put(`${this.url}/v1/colleges/${data.id}`, data);
    }

    delete(id: String) {
        return this.httpClient.delete(`${this.url}/v1/colleges/${id}`);
    }
}
