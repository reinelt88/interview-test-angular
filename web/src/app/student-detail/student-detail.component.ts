import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../models/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() selectedStudent: Student = <Student>{};
  constructor() { }

  ngOnInit() {
  }

  clearStudent = () => {
    this.selectedStudent = <Student>{};
  }

}
