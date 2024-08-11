import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/getAllStudent`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/addStudent`, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/getById/${id}`);
  }
  updateStudent(studentId: number, studentData: Partial<Student>): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateStudent/${studentId}`, studentData);
  }
  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteStudent/${studentId}`);
  }
}
