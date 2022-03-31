import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../models/student';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() selectedStudent: Student = <Student>{};
  @Output() errorMessage: EventEmitter<string> = new EventEmitter();
  @Output() success: EventEmitter<boolean> = new EventEmitter();
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
          this.success.emit(true);
        } else {
          this.errorMessage.emit('Error updating student');
        }
      }, error => {
        this.errorMessage.emit(error);
      });
    } else {
      this.studentService.createStudent(this.selectedStudent).subscribe(result => {
        if (result) {
          this.clearStudent();
          this.success.emit(true);
        } else {
          this.errorMessage.emit('Error creating student');
        }
      }, error => {
        this.errorMessage.emit(error);
      });
    }
  }

  removeStudent = () => {
    this.studentService.removeStudent(this.selectedStudent).subscribe(() => {
      this.clearStudent();
      this.success.emit(true);
    }, error => {
      this.errorMessage.emit(error);
    });
  }

}
