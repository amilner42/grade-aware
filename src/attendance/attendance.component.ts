import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {StudentService} from '../shared/services/student.service';
import {Student} from 'student';
import {AttendanceCardComponent} from './attendance-card.component';

@Component({
  moduleId: module.id,
  selector: 'attendance',
  templateUrl: './attendance.component.html',
  styleUrls: [
    './attendance.component.css'
  ],
  directives: [
    AttendanceCardComponent
  ]
})
export class AttendanceComponent {

  private student: Student;

  constructor(@Inject(StudentService) StudentService) {
    this.student = StudentService.get();
  }

}
