import {Component} from 'angular2/core';
import {StudentService} from '../shared/services/student.service';
import {Inject} from 'angular2/core';
import {Student} from 'student';
import {CommentMonthComponent} from './comment-month.component';
import {NgFor} from 'angular2/common';
import {Injectable} from 'angular2/core';
import {ReversePipe} from '../shared/pipes/reverse.pipe';

@Component({
  moduleId: module.id,
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: [
    './comments.component.css'
  ],
  directives: [
    CommentMonthComponent,
    NgFor
  ],
  pipes: [
    ReversePipe
  ]
})

@Injectable()
export class CommentsComponent {

  private student: Student;

  constructor(@Inject(StudentService) StudentService) {
    this.student = StudentService.get();
  }

}
