import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../models/student';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getStudents(): Observable<any> {
    return this.http.get<Student[]>(`${this.baseUrl}/students/`)
      .pipe(
        catchError(this.handleError<Student[]>('getStudents', []))
      );
  }

  createStudent(student: Student): Observable<any> {
    return this.http.post<Student>(`${this.baseUrl}/students/create/`, student)
      .pipe(
        catchError(this.handleError<Student>('addStudent'))
      );
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put<Student>(`${this.baseUrl}/students/update/${student.id}/`, student)
      .pipe(
        catchError(this.handleError<Student>('updateStudent'))
      );
  }

  removeStudent(student: Student): Observable<any> {
    return this.http.delete<Student>(`${this.baseUrl}/students/delete/${student.id}/`)
      .pipe(
        catchError(this.handleError<Student>('removeStudent'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
