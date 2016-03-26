import {Component} from 'angular2/core';
import {CommentMonth} from 'student';
import {Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {CommentComponent} from './comment.component';

@Component({
  moduleId: module.id,
  selector: 'comment-month',
  templateUrl: './comment-month.component.html',
  styleUrls: [
    './comment-month.component.css'
  ],
  directives: [
    NgFor,
    CommentComponent
  ]
})

export class CommentMonthComponent {

  /* tslint:disable */
  @Input() private commentMonth: CommentMonth;
  /* tslint:enable */

}
