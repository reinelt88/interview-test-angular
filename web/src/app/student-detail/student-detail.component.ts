import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../models/student';
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() selectedStudent: Student = <Student>{};
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.selectedStudent = <Student>{};
  }

  clearStudent = () => {
    this.selectedStudent = <Student>{};
  }

  createOrUpdate = () => {
    if (this.selectedStudent.id) {
      this.studentService.updateStudent(this.selectedStudent).subscribe(result => {
        if (result) {
          this.clearStudent();
        }
      }, error => {
        console.log(error);
      });
    } else {
      this.studentService.createStudent(this.selectedStudent).subscribe(result => {
        if (result) {
          this.clearStudent();
        }
      }, error => {
        console.log(error);
      });
    }
  }

  removeStudent = () => {
    this.studentService.removeStudent(this.selectedStudent).subscribe(() => {
      this.clearStudent();
    }, error => {
      console.log(error);
    });
  }

}
