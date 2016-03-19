import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {StudentService} from '../shared/services/student.service';
import {Student} from 'student';
import {NgFor} from 'angular2/common';
import {ClassCard} from './class-card.component';

@Component({
  moduleId: module.id,
  selector: 'grades',
  templateUrl: './grades.component.html',
  directives: [
    NgFor,
    ClassCard
  ],
  styleUrls: [
    './grades.component.css'
  ]
})

@Injectable()
export class GradesComponent {

  private student:Student;

  constructor(@Inject(StudentService) studentService) {
    this.student = studentService.get();
    studentService.orderClassesByAverageGrade(this.student);
  }

}
