import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {AttendanceMonth} from 'student';

@Component({
  moduleId: module.id,
  selector: 'attendance-card',
  templateUrl: './attendance-card.component.html',
  styleUrls: [
    './attendance-card.component.css'
  ]
})
export class AttendanceCardComponent {

  /* tslint:disable */
  @Input() private attendanceMonth: AttendanceMonth;
  /* tslint:enable */

}
