import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {StudentService} from '../shared/services/student.service';
import {Student} from 'student';

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

  private student: Student;

  constructor(@Inject(StudentService) StudentService) {
    this.student = StudentService.get();
  }

}
