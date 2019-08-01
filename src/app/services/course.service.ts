import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCourse } from '../models/getCourses.model';
import { Course } from '../models/course.model';
import { AppHeader } from '../utils/header.util';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get<GetCourse[]>(`${AppHeader.url}/courses`, { headers: AppHeader.composeHeader() });
  }

  getById(id: String) {
    return this.httpClient.get<Course>(`${AppHeader.url}/courses/${id}`, { headers: AppHeader.composeHeader() });
  }

  post(data: Course) {
    return this.httpClient.post(`${AppHeader.url}/courses`, data, { headers: AppHeader.composeHeader() });
  }

  put(data: Course) {
    return this.httpClient.put(`${AppHeader.url}/courses`, data, { headers: AppHeader.composeHeader() });
  }

  delete(id: String) {
    return this.httpClient.delete(`${AppHeader.url}/courses/${id}`, { headers: AppHeader.composeHeader() });
  }
}
