import {Component, OnInit} from '@angular/core';
import {Student} from '../models/student';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents = () => {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }
}
