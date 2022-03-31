import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from '../models/student';
import {StudentService} from '../services/student.service';
import {StudentDetailComponent} from '../student-detail/student-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public students: Student[];
  public selectedStudent: Student = null;
  public showSuccessMessage = false;
  public errorMessage = null;
  @ViewChild(StudentDetailComponent, {static: false}) child: StudentDetailComponent;
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

  showInfo = (id: number) => {
    this.selectedStudent = this.students.find(index => index.id === id);
  }

  successAction = () => {
    this.showSuccessMessage = true;
    this.loadStudents();
  }
}
