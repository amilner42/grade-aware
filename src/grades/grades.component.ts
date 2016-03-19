import {Component} from 'angular2/core';
import {Class} from 'grades';
import {Inject} from 'angular2/core';
import {GradesService} from '../shared/services/grades.service';
import {Injectable} from 'angular2/core';

@Component({
  moduleId: module.id,
  selector: 'grades',
  templateUrl: './grades.component.html',
  styleUrls: [
    './grades.component.css'
  ]
})

@Injectable()
export class GradesComponent {

  private class_grades: Class[];

  constructor(@Inject(GradesService) GradesService) {
    this.class_grades = GradesService.get();
  }

}
