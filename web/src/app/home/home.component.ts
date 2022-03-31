import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public students: Student[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Student[]>(baseUrl + '/students/').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }
}

interface Student {
  id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Major: string;
}
