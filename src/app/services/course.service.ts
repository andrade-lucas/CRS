import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCourse } from '../models/getCourses.model';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  public url: String = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get<GetCourse[]>(`${this.url}/v1/courses`);
  }

  getById(id: String) {
    return this.httpClient.get<Course>(`${this.url}/v1/courses/${id}`);
  }

  post(data: Course) {
    return this.httpClient.post(`${this.url}/v1/courses`, data);
  }

  put(data: Course) {
    return this.httpClient.put(`${this.url}/v1/courses`, data);
  }

  delete(id: String) {
    return this.httpClient.delete(`${this.url}/v1/courses/${id}`);
  }
}
