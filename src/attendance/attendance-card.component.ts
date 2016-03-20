import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {AttendanceMonth} from 'student';
import {ColorService} from '../shared/services/color.service';
import {Inject} from 'angular2/core';

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
  private colorService: ColorService;

  constructor(@Inject(ColorService) ColorService) {
    this.colorService = ColorService;
  }

}
